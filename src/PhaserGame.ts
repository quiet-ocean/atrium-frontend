import Phaser from 'phaser'

import Background from './scenes/Background'
import Bootstrap from './scenes/Bootstrap'
import GameScene from './scenes/Game'

const config: Phaser.Types.Core.GameConfig = {
  autoFocus: true,
  backgroundColor: '#93cbee',
  parent: 'phaser-container',
  physics: {
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
    default: 'arcade',
  },
  pixelArt: true,

  // Prevent pixel art from becoming blurred when scaled.
  scale: {
    height: window.innerHeight,
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
  },

  scene: [Bootstrap, Background, GameScene],
  type: Phaser.AUTO,
}

class PhaserGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config)
  }
}

const phaserGame = new PhaserGame(config)
// @ts-expect-error
window.game = phaserGame

export default phaserGame
