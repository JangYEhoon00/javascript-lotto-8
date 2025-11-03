import Inputs from "./controller/inputs";

export default class Money {
  #money;
  #count;
  #GAME_PRICE = 1000;
  // 입력받은 금액의 유효성 검사
  // 나머지의 몫이 그럼 전부 로또로
  // 로또는 사용자가 입력한 수 만큼 구매
  // 세터 지양의 이유

  constructor(money, count) {
    const CHANGED_MONEY = this.#changeMoney(money);
    this.#money = CHANGED_MONEY;
    this.#count = count;
  }

  #changeMoney(money) {
    const CHANGE_NUM = Number(money);
    if (isNaN(CHANGE_NUM)) {
      throw new Error("[ERROR] 금액이 숫자가 아닙니다.");
    }

    return CHANGE_NUM;
  }

  #validateMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 로또의 금액 투입은 1,000원 단위 입니다.");
    }
    if (money < 1000) {
      throw new Error("[ERROR] 로또의 금액 투입은 1,000원 이상 입니다.");
    }
    return money;
  }

  #modulo(money, count) {
    const GAME_MONEY = money / (count * GAME_PRICE);

    return GAME_MONEY;
  }

  #restMoney(money, GAME_MONEY) {
    const REST_MONEY = money - GAME_MONEY;

    return REST_MONEY;
  }
}
