import { Random } from "@woowacourse/mission-utils";
import GAME_RULES from "../constants/game";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #generateTicket() {
    const GET_TICKET = MissionUtils.Random.pickUniqueNumbersInRange(
      GAME_RULES.MIN_NUMBER,
      GAME_RULES.MAX_NUMBER,
      GAME_RULES.LOTTO_NUMBER_COUNT
    );
    const SORTED_TICKET = GET_TICKET.sort((a, b) => a - b);

    return SORTED_TICKET;
  }

  #compareTicket(numArr) {
    SORTED_TICKET.map((index) => {
      return index === numbers;
    });
  }

  #changeToNumber(numbers) {
    const CHECK_NUM = numbers.map((index) => {
      return Number(index);
    });
    return CHECK_NUM;
  }
}

export default Lotto;
