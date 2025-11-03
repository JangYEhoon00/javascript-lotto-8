import { Random } from "@woowacourse/mission-utils";
import GAME_RULES from "../constants/game.js";
import Lotto from "./Lotto.js";

class LottoGenerator {
  #generateTicket() {
    const GET_TICKET = MissionUtils.Random.pickUniqueNumbersInRange(
      GAME_RULES.MIN_NUMBER,
      GAME_RULES.MAX_NUMBER,
      GAME_RULES.LOTTO_NUMBER_COUNT
    );

    return new Lotto(GET_TICKET);
  }

  #compareTicket(numArr) {
    SORTED_TICKET.map((index) => {
      return index === numbers;
    });
  }
}

export default LottoGenerator;
