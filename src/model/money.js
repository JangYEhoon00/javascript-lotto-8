import Inputs from "./controller/inputs";
import ERROR_MESSAGES from "../constants/errorMessages";

export default class Money {
  #money;
  #count;
  #GAME_PRICE = 1000;

  constructor(money, count) {
    const CHANGED_MONEY = this.#changeMoney(money);
    this.#money = CHANGED_MONEY;
    this.#count = count;
  }

  #changeMoney(money) {
    const CHANGE_NUM = Number(money);
    if (isNaN(CHANGE_NUM)) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER);
    }

    return CHANGE_NUM;
  }

  #validateMoney(money) {
    if (money % 1000 !== 0) throw new Error(ERROR_MESSAGES.INVALID_UNIT);
    if (money < 1000) throw new Error(ERROR_MESSAGES.BELOW_MINIMUM);
    if (count <= 0) throw new Error(ERROR_MESSAGES.INVALID_COUNT);
    if (count * this.#GAME_PRICE > money)
      throw new Error(ERROR_MESSAGES.EXCEED_LIMIT);
  }

  #getMaxPurchaseCount() {
    return this.#money / this.#GAME_PRICE;
  }

  #restMoney(money, count) {
    const GAME_MONEY = this.#GAME_PRICE * this.#count;

    const REST_MONEY = money - GAME_MONEY;

    return REST_MONEY;
  }
}
