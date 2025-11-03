import Inputs from "./controller/inputs";

export default class Numbers {
  // 입력받은 문자열을 숫자로 변환
  changeToNumber(winningNumber) {
    const fetchWinningNumber = winningNumber.map((index) => {
      Number(index);
    });

    return fetchWinningNumber;
  }
}
