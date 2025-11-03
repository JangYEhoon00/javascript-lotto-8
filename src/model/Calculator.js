import PRIZE_RANK from "../constants/prizeRank.js";

const PRIZE ={
  RANK_1: 2000000000,
  RANK_2: 30000000,
  RANK_3: 1500000,
  RANK_4: 50000,
  RANK_5: 5000,
};

export default class Calculator {
  static countMatch(ticketNumbers, winningNumbers) {
    const set = new Set(winningNumbers);
    return ticketNumbers.filter((n) => set.has(n)).length;
  }

  static isBonusMatch(ticketNumbers, bonus) {
    return ticketNumbers.includes(bonus);
  }

  static getRank(ticketNumbers, winningNumbers, bonus) {
    const match = Calculator.countMatch(ticketNumbers, winningNumbers);
    if (match === 6) return "rank1";
    if (match === 5 && Calculator.isBonusMatch(ticketNumbers, bonus)) return "rank2";
    if (match === 5) return "rank3";
    if (match === 4) return "rank4";
    if (match === 3) return "rank5";
    return null;
  }

  static tallyResults(tickets, winningNumbers, bonus) {
    return tickets.reduce(
      (tally, ticket) => {
        const rank = Calculator.getRank(
          ticket.getNumbers(),
          winningNumbers,
          bonus
        );
        if (rank) tally[rank] += 1;
        return tally;
      },
      { rank5: 0, rank4: 0, rank3: 0, rank2: 0, rank1: 0 }
    );
  }

  static totalPrize(tally) {
    return (
      tally.rank1 * PRIZE.RANK_1 +
      tally.rank2 * PRIZE.RANK_2 +
      tally.rank3 * PRIZE.RANK_3 +
      tally.rank4 * PRIZE.RANK_4 +
      tally.rank5 * PRIZE.RANK_5
    );
  }

  static rate(totalPrize, purchaseAmount) {
    const percent = (totalPrize / purchaseAmount) * 100;
    return Math.round(percent * 10) / 10; 
  }

  static rankDescriptions() {
    return {
      rank1: PRIZE_RANK.NO_1,
      rank2: PRIZE_RANK.NO_2,
      rank3: PRIZE_RANK.NO_3,
      rank4: PRIZE_RANK.NO_4,
      rank5: PRIZE_RANK.NO_5,
    };
  }
}
