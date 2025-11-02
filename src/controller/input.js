import { Console } from "@woowacourse/mission-utils";

export default class Inputs {
  static async getWinningNumber() {
    const INPUT = await Console.readLineAsync("당첨 번호를 입력해 주세요. : ");
    const TRIMED_INPUT = INPUT.replaceAll(" ", "");
    const WINNING_NUMBER = TRIMED_INPUT.split(",");

    return WINNING_NUMBER;
  }

  static async getBonusNumber() {
    const BONUS_NUMBER = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요. : "
    );

    return BONUS_NUMBER;
  }

  static async getMoney() {
    const MONEY_INPUT = await Console.readLineAsync("금액을 입력해 주세요. : ");

    return MONEY_INPUT;
  }

  static async getGameCount() {
    const COUNT_INPUT = await Console.readLineAsync("금액을 입력해 주세요. : ");

    return COUNT_INPUT;
  }
}
