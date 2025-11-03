import { Console } from "@woowacourse/mission-utils";
import Inputs from "./controller/Inputs.js";
import Money from "./model/money.js";
import LottoGenerator from "./model/LottoGenerator.js";
import Calculator from "./model/Calculator.js";
import PRIZE_RANK from "./constants/prizeRank.js";

class App {
  async run() {
    const money = await this.#readValidMoney();
    const count = money.getPurchaseCount();
    Console.print(`${count}개를 구매했습니다.`);

    const tickets = LottoGenerator.generateTickets(count);
    tickets.forEach((ticket) => {
      const formatted = `[${ticket.getNumbers().join(", ")}]`;
      Console.print(formatted);
    });

    const winningNumbers = await Inputs.getWinningNumber();
    const bonusNumber = await Inputs.getBonusNumber();

    const tally = Calculator.tallyResults(
      tickets,
      winningNumbers,
      bonusNumber
    );

    this.#printStatistics(tally);
    const totalPrize = Calculator.totalPrize(tally);
    const rate = Calculator.rate(totalPrize, money.getAmount());
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }

  async #readValidMoney() {
    while (true) {
      try {
        const input = await Inputs.getMoney();
        return new Money(input);
      } catch (e) {
        Console.print(e?.message);
      }
    }
  }

  #printStatistics(tally) {
    const format = (key, desc) => {
      const amount = desc.split(" / ")[1];
      const labelMap = {
        NO_5: "3개 일치",
        NO_4: "4개 일치",
        NO_3: "5개 일치",
        NO_2: "5개 일치, 보너스 볼 일치",
        NO_1: "6개 일치",
      };
      return `${labelMap[key]} (${amount})`;
    };

    Console.print(`${format("NO_5", PRIZE_RANK.NO_5)} - ${tally.rank5}개`);
    Console.print(`${format("NO_4", PRIZE_RANK.NO_4)} - ${tally.rank4}개`);
    Console.print(`${format("NO_3", PRIZE_RANK.NO_3)} - ${tally.rank3}개`);
    Console.print(`${format("NO_2", PRIZE_RANK.NO_2)} - ${tally.rank2}개`);
    Console.print(`${format("NO_1", PRIZE_RANK.NO_1)} - ${tally.rank1}개`);
  }
}

export default App;
