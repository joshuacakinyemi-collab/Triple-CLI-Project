const prompt = require('prompt-sync')({ sigint: true });
const Game = require('./game');

class App {
  constructor() {
    this.isRunning = true;
  }

  start() {
    console.log('\nTime for a game show!')

    this.game = new Game()

    while (this.isRunning) {
      this.showMenu();
    }
  }

  showMenu() {
    console.log('\nMenu:');
    console.log('1. Start Quiz');
    console.log('2. View High Scores');
    console.log('3. Exit');

    const choice = prompt('Choose your action (1-3): ').trim();
    if (choice === '1') {
      console.clear()
      this.game.startGame();
    } else if (choice === '2') {
      console.clear()
      Game.viewHS();
    } else if (choice === '3') {
      console.clear()
      this.game.exit();
      this.stop();
    }
  }

  stop() {
    this.isRunning = false;
  }
}

module.exports = App;