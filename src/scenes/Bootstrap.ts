import Phaser from 'phaser'

import Network from '../services/Network'
import store from '../stores'
import { setRoomJoined } from '../stores/RoomStore'
import { BackgroundMode } from '../types/BackgroundMode'

export default class Bootstrap extends Phaser.Scene {
  network!: Network

  constructor() {
    super('bootstrap')
  }

  preload() {
    this.load.atlas(
      'cloud_day',
      'assets/background/cloud_day.png',
      'assets/background/cloud_day.json'
    )
    this.load.image('backdrop_day', 'assets/background/backdrop_day.png')
    this.load.image('login_bg', 'assets/background/login_bg.png')
    this.load.atlas(
      'cloud_night',
      'assets/background/cloud_night.png',
      'assets/background/cloud_night.json'
    )
    this.load.image('backdrop_night', 'assets/background/backdrop_night.png')
    this.load.image('sun_moon', 'assets/background/sun_moon.png')

    this.load.tilemapTiledJSON('tilemap', 'assets/map/map.json')
    this.load.spritesheet('tiles_wall', 'assets/map/FloorAndGround.png', {
      frameHeight: 32,
      frameWidth: 32,
    })
    this.load.spritesheet('chairs', 'assets/items/chair.png', {
      frameHeight: 64,
      frameWidth: 32,
    })
    this.load.spritesheet('computers', 'assets/items/computer.png', {
      frameHeight: 64,
      frameWidth: 96,
    })
    this.load.spritesheet('whiteboards', 'assets/items/whiteboard.png', {
      frameHeight: 64,
      frameWidth: 64,
    })
    this.load.spritesheet(
      'vendingmachines',
      'assets/items/vendingmachine.png',
      {
        frameHeight: 72,
        frameWidth: 48,
      }
    )
    this.load.spritesheet(
      'office',
      'assets/items/Modern_Office_Black_Shadow.png',
      {
        frameHeight: 32,
        frameWidth: 32,
      }
    )
    this.load.spritesheet('basement', 'assets/items/Basement.png', {
      frameHeight: 32,
      frameWidth: 32,
    })
    this.load.spritesheet('generic', 'assets/items/Generic.png', {
      frameHeight: 32,
      frameWidth: 32,
    })
    this.load.spritesheet('adam', 'assets/character/adam.png', {
      frameHeight: 48,
      frameWidth: 32,
    })
    this.load.spritesheet('ash', 'assets/character/ash.png', {
      frameHeight: 48,
      frameWidth: 32,
    })
    this.load.spritesheet('lucy', 'assets/character/lucy.png', {
      frameHeight: 48,
      frameWidth: 32,
    })
    this.load.spritesheet('nancy', 'assets/character/nancy.png', {
      frameHeight: 48,
      frameWidth: 32,
    })
  }

  init() {
    this.network = new Network()
  }

  create() {
    this.launchBackground(store.getState().user.backgroundMode)
  }

  private launchBackground(backgroundMode: BackgroundMode) {
    this.scene.launch('background', { backgroundMode })
  }

  launchGame() {
    this.network.webRTC?.checkPreviousPermission()
    this.scene.launch('game', {
      network: this.network,
    })

    // update Redux state
    store.dispatch(setRoomJoined(true))
  }

  changeBackgroundMode(backgroundMode: BackgroundMode) {
    this.scene.stop('background')
    this.launchBackground(backgroundMode)
  }
}
