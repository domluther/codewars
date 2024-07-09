// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

// Can you help him?

// How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

// Parameters and return of function:

// parameter (positive int or float, guaranteed) start_price_old (Old car price)
// parameter (positive int or float, guaranteed) start_price_new (New car price)
// parameter (positive int or float, guaranteed) saving_per_month
// parameter (positive float or int, guaranteed) percent_loss_by_month

// nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
// Detail of the above example:
// end month 1: percent_loss 1.5 available -4910.0
// end month 2: percent_loss 2.0 available -3791.7999...
// end month 3: percent_loss 2.0 available -2675.964
// end month 4: percent_loss 2.5 available -1534.06489...
// end month 5: percent_loss 2.5 available -395.71327...
// end month 6: percent_loss 3.0 available 766.158120825...
// return [6, 766] or (6, 766)

// where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to 766.158... (rounding 766.158 gives 766).

// Note:

// Selling, buying and saving are normally done at end of month. Calculations are processed at the end of each considered month but if, by chance from the start, the value of the old car is bigger than the value of the new one or equal there is no saving to be made, no need to wait so he can at the beginning of the month buy the new car:

// nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
// nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]

function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  // Don't want to edit the raw parameters
  let oldCarValue = startPriceOld;
  let newCarValue = startPriceNew;
  let deprecationRate = percentLossByMonth;
  let cash = 0;
  let month = 0;
  let totalAvailable = oldCarValue + cash - newCarValue;
  // Loop while not enough money
  while (totalAvailable < 0) {
    // At the end of the month, I save money
    month += 1;
    cash += savingperMonth;

    // rate increases every 2 months - has to happen before deprecation
    if (month % 2 === 0) deprecationRate += 0.5;

    // both cars deprecate
    oldCarValue = deprecateValue(oldCarValue, deprecationRate);
    newCarValue = deprecateValue(newCarValue, deprecationRate);

    totalAvailable = oldCarValue + cash - newCarValue;
  }
  return [month, Math.round(totalAvailable)];
}

function deprecateValue(value, rate) {
  return value * (1 - rate / 100);
}

const ans = nbMonths(18000, 12000, 500, 1);
console.log(ans);