import Phaser from 'phaser'

import Background from './scenes/Background'
import Bootstrap from './scenes/Bootstrap'
import Game from './scenes/Game'

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

  scene: [Bootstrap, Background, Game],
  type: Phaser.AUTO,
}

const phaserGame = new Phaser.Game(config)

;(window as any).game = phaserGame

export default phaserGame
