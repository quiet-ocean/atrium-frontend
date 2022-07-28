import Phaser from 'phaser'

// import { debugDraw } from '../utils/debug'
// eslint-disable-next-line import/no-duplicates
import '../characters/MyPlayer'
// eslint-disable-next-line import/no-duplicates
import '../characters/OtherPlayer'
// eslint-disable-next-line import/no-duplicates
import type MyPlayer from '../characters/MyPlayer'
// eslint-disable-next-line import/no-duplicates
import OtherPlayer from '../characters/OtherPlayer'
import Computer from '../items/Computer'
import type Item from '../items/Item'
import Whiteboard from '../items/Whiteboard'
import type Network from '../services/Network'
import store from '../stores'
import { setFocused, setShowChat } from '../stores/ChatStore'
import { setSettingDialogOpen } from '../stores/SettingStore'
import { setMyPlayerReady } from '../stores/UserStore'
import type { IPlayer } from '../types/IOfficeState'
import { ItemType } from '../types/Items'
import { PlayerBehavior } from '../types/PlayerBehavior'

export default class Game {
  network!: Network
  myPlayer!: MyPlayer
  private otherPlayerMap = new Map<string, OtherPlayer>()
  computerMap = new Map<string, Computer>()
  private whiteboardMap = new Map<string, Whiteboard>()

  constructor() {}

  registerKeys() {}

  disableKeys() {}

  enableKeys() {}

  create(data: { network: Network }) {
    if (!data.network) {
      throw new Error('server instance missing')
    } else {
      this.network = data.network
    }

    // register network event listeners
    this.network.onPlayerJoined(this.handlePlayerJoined, this)
    this.network.onPlayerLeft(this.handlePlayerLeft, this)
    this.network.onMyPlayerReady(this.handleMyPlayerReady, this)
    this.network.onMyPlayerVideoConnected(this.handleMyVideoConnected, this)
    this.network.onPlayerUpdated(this.handlePlayerUpdated, this)
    this.network.onItemUserAdded(this.handleItemUserAdded, this)
    this.network.onItemUserRemoved(this.handleItemUserRemoved, this)
    this.network.onChatMessageAdded(this.handleChatMessageAdded, this)
  }

  // function to add new player to the otherPlayer group
  private handlePlayerJoined(newPlayer: IPlayer, id: string) {}

  // function to remove the player who left from the otherPlayer group
  private handlePlayerLeft(id: string) {
    if (this.otherPlayerMap.has(id)) {
      const otherPlayer = this.otherPlayerMap.get(id)
      if (!otherPlayer) return
      this.otherPlayerMap.delete(id)
    }
  }

  private handleMyPlayerReady() {
    // this.myPlayer.readyToConnect = true
  }

  private handleMyVideoConnected() {
    // this.myPlayer.videoConnected = true
  }

  // function to update target position upon receiving player updates
  private handlePlayerUpdated(
    field: string,
    value: number | string,
    id: string
  ) {
    const otherPlayer = this.otherPlayerMap.get(id)
    otherPlayer?.updateOtherPlayer(field, value)
  }

  private handlePlayersOverlap(myPlayer, otherPlayer) {
    otherPlayer.makeCall(myPlayer, this.network?.webRTC)
  }

  private handleItemUserAdded(
    playerId: string,
    itemId: string,
    itemType: ItemType
  ) {
    if (itemType === ItemType.COMPUTER) {
      const computer = this.computerMap.get(itemId)
      computer?.addCurrentUser(playerId)
    } else if (itemType === ItemType.WHITEBOARD) {
      const whiteboard = this.whiteboardMap.get(itemId)
      whiteboard?.addCurrentUser(playerId)
    }
  }

  private handleItemUserRemoved(
    playerId: string,
    itemId: string,
    itemType: ItemType
  ) {
    if (itemType === ItemType.COMPUTER) {
      const computer = this.computerMap.get(itemId)
      computer?.removeCurrentUser(playerId)
    } else if (itemType === ItemType.WHITEBOARD) {
      const whiteboard = this.whiteboardMap.get(itemId)
      whiteboard?.removeCurrentUser(playerId)
    }
  }

  private handleChatMessageAdded(playerId: string, content: string) {
    const otherPlayer = this.otherPlayerMap.get(playerId)
    otherPlayer?.updateDialogBubble(content)
  }

  update() {}
}
