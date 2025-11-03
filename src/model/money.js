import ERROR_MESSAGES from "../constants/errorMessages.js";

export default class Money {
  #amount;
  static #GAME_PRICE = 1000;

  constructor(input) {
    const parsed = Money.#parseAmount(input);
    Money.#validateAmount(parsed);
    this.#amount = parsed;
  }

  static #parseAmount(input) {
    const num = Number(input);
    if (Number.isNaN(num)) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER);
    }
    return num;
  }

  static #validateAmount(amount) {
    if (amount < Money.#GAME_PRICE)
       throw new Error(ERROR_MESSAGES.BELOW_MINIMUM);
    if (amount % Money.#GAME_PRICE !== 0)
      throw new Error(ERROR_MESSAGES.INVALID_UNIT);
  }

  getAmount() {
    return this.#amount;
  }

  getPurchaseCount() {
    return this.#amount / Money.#GAME_PRICE;
  }
}
