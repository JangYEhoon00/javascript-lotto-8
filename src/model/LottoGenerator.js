import { Random } from "@woowacourse/mission-utils";
import GAME_RULES from "../constants/game.js";
import Lotto from "../Lotto.js";

class LottoGenerator {
  static generateTicket() {
    const GET_TICKET = Random.pickUniqueNumbersInRange(
      GAME_RULES.MIN_NUMBER,
      GAME_RULES.MAX_NUMBER,
      GAME_RULES.LOTTO_NUMBER_COUNT
    );

    return new Lotto(GET_TICKET);
  }

  static generateTickets(count) {
    const tickets = [];
    for (let i = 0; i < count; i += 1) {
      tickets.push(this.generateTicket());
    }
    return tickets;
  }

}

export default LottoGenerator;
