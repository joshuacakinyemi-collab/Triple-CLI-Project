const prompt = require('prompt-sync')({ sigint: true });

class Game {
  static #HS = []; //Hold all current player scores
  #game = [
    {
      question: "What is 5 + 7?",
      choices: [12, 10, 13, 11],
      answerIndex: 0
    },
    {
      question: "What is 9 - 4?",
      choices: [6, 5, 3, 4],
      answerIndex: 1
    },
    {
      question: "What is 6 × 3?",
      choices: [18, 15, 17, 16],
      answerIndex: 0
    },
    {
      question: "What is 20 ÷ 4?",
      choices: [5, 2, 3, 4],
      answerIndex: 0
    },
    {
      question: "What is 8 + 8?",
      choices: [18, 15, 16, 17],
      answerIndex: 2
    },
    {
      question: "What is 14 - 6?",
      choices: [9, 6, 7, 8],
      answerIndex: 3
    },
    {
      question: "What is 7 × 7?",
      choices: [56, 42, 63, 49],
      answerIndex: 3
    },
    {
      question: "What is 36 ÷ 6?",
      choices: [6, 7, 4, 5],
      answerIndex: 0
    },
    {
      question: "What is 10 + 15?",
      choices: [30, 20, 25, 35],
      answerIndex: 3
    },
    {
      question: "What is 18 - 9?",
      choices: [10, 9, 7, 8],
      answerIndex: 1
    },
    {
      question: "What is 4 × 8?",
      choices: [36, 24, 28, 32],
      answerIndex: 3
    },
    {
      question: "What is 45 ÷ 9?",
      choices: [6, 4, 7, 5],
      answerIndex: 3
    },
    {
      question: "What is 3 + 14?",
      choices: [18, 17, 15, 16],
      answerIndex: 1
    },
    {
      question: "What is 22 - 7?",
      choices: [16, 13, 14, 15],
      answerIndex: 3
    },
    {
      question: "What is 9 × 4?",
      choices: [38, 36, 32, 34],
      answerIndex: 1
    },
    {
      question: "What is 64 ÷ 8?",
      choices: [9, 6, 8, 7],
      answerIndex: 2
    },
    {
      question: "What is 11 + 6?",
      choices: [16, 18, 15, 17],
      answerIndex: 3
    },
    {
      question: "What is 30 - 12?",
      choices: [19, 18, 16, 17],
      answerIndex: 1
    },
    {
      question: "What is 5 × 9?",
      choices: [55, 40, 45, 50],
      answerIndex: 2
    },
    {
      question: "What is 81 ÷ 9?",
      choices: [10, 7, 8, 9],
      answerIndex: 3
    }
  ];
  #score = 0;
  #percent;

  startGame() {
    this.#score = 0;
    for (let i = 0; i < this.#game.length; i++) {
      console.clear();
      const test = this.#game[i];
      console.log
      console.log(`Question: ${i + 1}`)
      console.log(`${test.question} :`);
      test.choices.forEach((index, n) => console.log(`${n + 1}. ${index}`));

      let number = Number(prompt('Choose your answer (1-4): ').trim());

      if (number < 0 || number > 4 || Number.isNaN(number)) {
        console.log(`invalid answer`);
        i--;
        continue;
      }

      if (test.answerIndex === number - 1) {
        console.clear();
        this.#score++;
        this.#percent = (this.#score / this.#game.length) * 100;
        console.log(`Correct! Well done!`);
      } else {
        console.clear();
        console.log(`Incorrect Answer!`);
        this.#percent = (this.#score / this.#game.length) * 100;
      }

      console.log(`Current Score: ${this.#score}/${this.#game.length} (${Math.trunc(this.#percent)}%)`);
      let next = prompt('Next Question: ').trim();
    }

    console.clear();
    const date = new Date();
    console.log(`Quiz Complete!`);
    console.log(`Final Score: ${this.#score}/${this.#game.length} (${Math.trunc(this.#percent)}%)`);

    const isHigher = Game.#HS.length < 5 || Game.#HS.some(p => Math.trunc(this.#percent) > p.score);
    // checks if player score is higher than another player score on the leaderboard
    if (isHigher) {
      console.log(`Congratulations! You scored a high score!`)
      let name = prompt('Enter your name: ').trim() || "???";

      Game.#HS.push({
        name,
        score: Math.trunc(this.#percent),
        date: date.toLocaleDateString()
      }); // Add player score to HS and remove the person with the lowest score
      Game.#HS.sort((a, b) => b.score - a.score);
      Game.#HS.splice(5)
    }
  }

  static viewHS() {
    console.clear()
    Game.#HS.forEach((player) => console.log(`${Math.trunc(player.score)}% (${player.name}) - ${player.date} `))
    console.log(Game.#HS);
  }

  exit() {
    console.clear();
    console.log(`\nThank For Playing!`);
  }
}

module.exports = Game;