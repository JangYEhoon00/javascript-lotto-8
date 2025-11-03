import Inputs from "../controller/input";

export default class Money {
  #money;
  #count;
  // 입력받은 금액의 유효성 검사
  // 나머지의 몫이 그럼 전부 로또로
  // 로또는 사용자가 입력한 수 만큼 구매
  // 세터 지양의 이유
  constructor(money, count) {
    this.#money = money;
    this.#count = count;
  }

  #modulo(money, count) {
    const GAME_PRICE = 1000;

    if (money % GAME_PRICE != 0) {
      throw new Error("[ERROR] 로또의 금액 투입은 1,000원 단위 입니다.");
    }
    const GAME_MONEY = money / (count * GAME_PRICE);

    return GAME_MONEY;
  }

  #restMoney(money, GAME_MONEY) {
    const REST_MONEY = money - GAME_MONEY;

    return REST_MONEY;
  }
}
