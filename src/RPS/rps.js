class RPS {
  #stats = {
    wins: 0,
    losses: 0,
    ties: 0
  };

  #comMove;
  #rps = ["rock", "paper", "scissors"];

  play(move) { // checks if input is right
    if (move !== 'rock' && move !== 'paper' && move !== 'scissors') {
      console.log(`invalid input, try again`)
      return
    }
    const com = Math.floor(Math.random() * 3);
    // computer pick a random number which will turn into a choice
    this.#comMove = this.#rps[com];

    console.log(`\nYou chose: ${move}`);
    console.log(`Computer chose: ${this.#comMove}`)

    if (move === this.#comMove) {
      this.#stats.ties++;
      console.log('The game is a tie!');
    }

    if (move === 'rock') {
      if (this.#comMove === 'paper') {
        this.#stats.losses++;
        console.log(`Paper beat Rock! Computer Win!`);
      } else {
        this.#stats.wins++;
        console.log(`Rock beat scissors! You win!`);
      }
    }
    if (move === 'paper') {
      if (this.#comMove === 'scissors') {
        this.#stats.losses++;
        console.log(`Scissors beat paper! Computer Win!`);
      } else {
        this.#stats.wins++;
        console.log(`Paper beat Rock! You win!`);
      }
    }
    if (move === 'scissors') {
      if (this.#comMove === 'rock') {
        this.#stats.losses++;
        console.log(`Rock beat scissors! Computer Win!`);
      } else {
        this.#stats.wins++;
        console.log(`Scissors beat paper! You win!`);

      }
    }
  };

  viewStats() {
    let total = this.#stats.wins + this.#stats.losses + this.#stats.ties;
    let rate = total === 0 ? 0 : (this.#stats.wins / total) * 100;
    console.log(`\nCurrent Statistics:`);
    console.log(`Games Won: ${this.#stats.wins}`);
    console.log(`Games Lost: ${this.#stats.losses}`);
    console.log(`Games Tied: ${this.#stats.ties}`);
    console.log(`Total Games: ${total}`);
    console.log(`Win Rate: ${Math.round(rate)}%`);
  }

  exitGame() {
    let total = this.#stats.wins + this.#stats.losses + this.#stats.ties;
    let rate = total === 0 ? 0 : (this.#stats.wins / total) * 100;
    console.log(`\nFinal Statistics.`);
    console.log(`Games Won: ${this.#stats.wins}`);
    console.log(`Games Lost: ${this.#stats.losses}`);
    console.log(`Games Tied: ${this.#stats.ties}`);
    console.log(`Total Games: ${total}`);
    console.log(`Win Rate: ${Math.round(rate)}%`);
    console.log(`\nThanks for playing.`);
  }
}

module.exports = RPS;