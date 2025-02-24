"use client";

import { useEffect } from 'react';
import * as Phaser from 'phaser';

const Game = () => {
    useEffect(() => {
      // Check if the code is running in the browser
      if (typeof window !== 'undefined') {
        const config = {
          type: Phaser.AUTO,
          width: 800,
          height: 600,
          scene: {
            preload: function (this: Phaser.Scene) {
              this.load.image('sky', 'https://labs.phaser.io/assets/skies/space3.png');
            },
            create: function (this: Phaser.Scene) {
              this.add.image(400, 300, 'sky');
            },
          },
        };
  
        const game = new Phaser.Game(config);
  
        return () => {
          game.destroy(true);
        };
      }
    }, []);

  return <div id="phaser-game" />;
};

export default Game; 