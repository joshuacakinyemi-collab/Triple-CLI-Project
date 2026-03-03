const prompt = require('prompt-sync')({ sigint: true });
const RPS = require('./rps');

class App {
  constructor() {
    this.isRunning = true;
  }

  start() {

    this.game = new RPS()

    while (this.isRunning) {
      this.showMenu();
    }
  }

  showMenu() {
    console.log('\nMenu:');
    console.log('1. Play Round');
    console.log('2. View Stats');
    console.log('3. Exit');

    const choice = prompt('Choose your action (1-3): ').trim();
    if (choice === '1') {
      console.clear()
      let move = prompt(`rock, paper, scissors:`).toLowerCase().trim();
      this.game.play(move);
    } else if (choice === '2') {
      console.clear()
      this.game.viewStats();
    } else if (choice === '3') {
      console.clear()
      this.game.exitGame();
      this.stop();
    }
  }

  stop() {
    this.isRunning = false;
  }
}

module.exports = App;