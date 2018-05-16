import Phaser from 'phaser'
import WebFont from 'webfontloader'
import config from '../config';

export default class extends Phaser.State {
  init() {
    console.log('Boot.init()')
    this.stage.backgroundColor = '#000'

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true

    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.game.physics.arcade.gravity.y = 1000

    this.game.world.setBounds(0, 0, config.gameWidth, config.gameHeight + 300)
  }

  preload() {
    if (config.webfonts.length) {
      WebFont.load({
        google: {
          families: config.webfonts
        },
        active: this.fontsLoaded
      })
    }

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')
  }

  create () {
    console.log('Boot.create()')
    this.game.stage.backgroundColor = '#fff'
    this.state.start('Preload')
  }

  render () {
    console.log('Boot.render()')
  }
}
