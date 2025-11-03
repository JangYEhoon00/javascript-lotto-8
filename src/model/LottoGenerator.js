import { Random } from "@woowacourse/mission-utils";
import GAME_RULES from "../constants/game.js";
import Lotto from "./Lotto.js";

class LottoGenerator {
  #ticket;
  constructor() {
    this.#ticket = this.generateTicket();
  }

  static generateTicket() {
    const GET_TICKET = MissionUtils.Random.pickUniqueNumbersInRange(
      GAME_RULES.MIN_NUMBER,
      GAME_RULES.MAX_NUMBER,
      GAME_RULES.LOTTO_NUMBER_COUNT
    );

    return new Lotto(GET_TICKET);
  }

  getGenerated() {
    return [...this.#ticket];
  }
}

export default LottoGenerator;
