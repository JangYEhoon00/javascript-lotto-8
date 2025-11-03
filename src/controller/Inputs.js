import { Console } from "@woowacourse/mission-utils";

export default class Inputs {
  static async getWinningNumber() {
    const INPUT = await Console.readLineAsync("당첨 번호를 입력해 주세요. : ");
    const TRIMED_INPUT = INPUT.replaceAll(" ", "");
    const WINNING_NUMBER = TRIMED_INPUT.split(",");

    return changeToNumber(WINNING_NUMBER).sort((a, b) => a - b);
  }

  static async getBonusNumber() {
    const BONUS_NUMBER = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요. : "
    );

    return Number(BONUS_NUMBER);
  }

  static async getMoney() {
    const MONEY_INPUT = await Console.readLineAsync("금액을 입력해 주세요. : ");

    return MONEY_INPUT;
  }

  static async getGameCount() {
    const COUNT_INPUT = await Console.readLineAsync(
      "시행횟수를 입력해 주세요. : "
    );

    return COUNT_INPUT;
  }

  static async getPurchaseMoney() {
    const PURCHASE_MONEY = await Console.readLineAsync(
      "구매 금액을 입력해 주세요. : "
    );

    return PURCHASE_MONEY;
  }

  static #changeToNumber(numbers) {
    const CHECK_NUM = numbers.map((index) => {
      return Number(index);
    });
    return CHECK_NUM;
  }
}
