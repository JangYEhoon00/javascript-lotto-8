import Calculator from "../src/model/Calculator.js";

const makeTicket = (numbers) => ({
  getNumbers: () => numbers,
});

describe("Calculator - tallyResults", () => {
  test("6개 일치 -> rank1 1개", () => {
    const tickets = [makeTicket([1, 2, 3, 4, 5, 6])];
    const tally = Calculator.tallyResults(tickets, [1, 2, 3, 4, 5, 6], 7);
    expect(tally).toEqual({ rank5: 0, rank4: 0, rank3: 0, rank2: 0, rank1: 1 });
  });

  test("5개+보너스 -> rank2 1개", () => {
    const tickets = [makeTicket([1, 2, 3, 4, 5, 7])];
    const tally = Calculator.tallyResults(tickets, [1, 2, 3, 4, 5, 6], 7);
    expect(tally).toEqual({ rank5: 0, rank4: 0, rank3: 0, rank2: 1, rank1: 0 });
  });

  test("5개 -> rank3 1개", () => {
    const tickets = [makeTicket([1, 2, 3, 4, 5, 8])];
    const tally = Calculator.tallyResults(tickets, [1, 2, 3, 4, 5, 6], 7);
    expect(tally).toEqual({ rank5: 0, rank4: 0, rank3: 1, rank2: 0, rank1: 0 });
  });

  test("4개 -> rank4 1개", () => {
    const tickets = [makeTicket([1, 2, 3, 4, 9, 10])];
    const tally = Calculator.tallyResults(tickets, [1, 2, 3, 4, 5, 6], 7);
    expect(tally).toEqual({ rank5: 0, rank4: 1, rank3: 0, rank2: 0, rank1: 0 });
  });

  test("3개 -> rank5 1개", () => {
    const tickets = [makeTicket([1, 2, 3, 9, 10, 11])];
    const tally = Calculator.tallyResults(tickets, [1, 2, 3, 4, 5, 6], 7);
    expect(tally).toEqual({ rank5: 1, rank4: 0, rank3: 0, rank2: 0, rank1: 0 });
  });
});


