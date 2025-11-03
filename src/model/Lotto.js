import GAME_RULES from "../constants/game.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== GAME_RULES.LOTTO_NUMBER_COUNT) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #getNumbers() {
    return this.#numbers;
  }

  #sortNumbers(numbers) {
    const SORTED_TICKET = [...numbers].sort((a, b) => a - b);

    return SORTED_TICKET;
  }
}

export default Lotto;
