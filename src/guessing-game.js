class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.currentGuess
    }

    setRange(min, max) {
        this.max = max
        this.min = min
    }

    guess() {
        return this.currentGuess = Math.round((this.min+this.max) /2)
    }

    lower() {
        return this.max = this.currentGuess
    }

    greater() {
        return this.min = this.currentGuess
    }
}

module.exports = GuessingGame;
