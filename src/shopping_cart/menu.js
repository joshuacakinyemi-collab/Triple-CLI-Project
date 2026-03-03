const prompt = require('prompt-sync')({ sigint: true });
const List = require('./list');

class App {
  constructor() {
    this.isRunning = true;
  }

  start() {
    console.log('\nWelcome to S-mart what would you like?')

    this.cart = new List()

    while (this.isRunning) {
      this.showMenu();
    }
  }

  showMenu() {
    console.log('\nMenu:');
    console.log('1. Add Item');
    console.log('2. Remove Item');
    console.log('3. View List');
    console.log('4. Exit');

    const choice = prompt('Choose your action (1-4): ').trim();
    if (choice === '1') {
      console.clear()
      let item = prompt(`Pick an item:`).toLowerCase().trim();
      let amount = prompt(`Item quantity:`).toLowerCase().trim();
      let price = prompt(`Price per item:`).toLowerCase().trim();
      this.cart.addItem(item, amount, price);
    } else if (choice === '2') {
      console.clear()
      let item = prompt(`Pick an item:`).toLowerCase().trim();
      let amount = prompt(`Item quantity:`).toLowerCase().trim();
      this.cart.removeItem(item, amount);
    } else if (choice === '3') {
      console.clear()
      this.cart.viewList();
    } else if (choice === '4') {
      console.clear()
      this.cart.exitShop();
      this.stop();
    }
  }

  stop() {
    this.isRunning = false;
  }
}

module.exports = App;