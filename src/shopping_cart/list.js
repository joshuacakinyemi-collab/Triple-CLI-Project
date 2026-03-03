class List {
  #cart = [];

  addItem(item, amount, price) {
    amount = Number(amount);
    price = Number(price);

    this.#cart.push({ item, amount, price });
    console.clear()
    console.log(`Added ${amount} ${item} at $${price} to your cart.`);
  }

  removeItem(item, amount) {
    if (typeof amount !== "number" && amount <= 0) {
      console.clear()
      console.log("Not a valid amount.");
      return;
    }
    const index = this.#cart.findIndex(cartItem => cartItem.item === item);

    if (index === -1) {
      console.log(`${item} is not in cart.`);
      return;
    }

    const cartItem = this.#cart[index];

    if (amount >= cartItem.amount) {
      this.#cart.splice(index, 1);
      console.clear()
      console.log(`${item} have been removed from your cart.`);
    } else {
      cartItem.amount -= amount
      console.clear()
      console.log(`Removed ${amount} ${item} from your cart.`);
    }
  }

  viewList() {
    const totalItems = this.#cart.reduce((acc, curr) => acc + curr.amount, 0);
    const totalPrice = this.#cart.reduce((acc, curr) => acc + (curr.price * curr.amount), 0);
    console.clear()
    console.log(`Your Cart:`);
    this.#cart.forEach((unit) => console.log(`- ${unit.amount} ${unit.item}: $${unit.amount * unit.price}`))

    console.log(`\nTotal Items: $${totalItems}`);
    console.log(`Total Price: $${totalPrice.toFixed(2)}`);

  }

  exitShop() {
    console.log(`\nThanks for shoppping at S-mart. We hope to see you soon`);
  }
}

module.exports = List;