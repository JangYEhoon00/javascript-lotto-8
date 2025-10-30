import { Console } from "@woowacourse/mission-utils";

class Controller {
  static async getWinningNumber() {
    const INPUT = await Console.readLineAsync("당첨 번호를 입력해 주세요. : ");
    const WINNING_NUMBER = INPUT.replaceAll(" ", "");

    return WINNING_NUMBER;
  }

  static async getMoney() {
    const MONEY_INPUT = await Console.readLineAsync("금액을 입력해 주세요. : ");

    return MONEY_INPUT;
  }
}
