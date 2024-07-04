// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:
// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by ,  or ,.

// To compare the results of the teams you are asked for giving three statistics; range, average and median.
// Your task is to return a string giving these 3 values. For the example given above, the string result will be
// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"
// of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`
// where hh, mm, ss are integers (represented by strings) with each 2 digits.

function stat(strg) {
  // if the given string is "" you will return ""
  if (strg === '') return '';
  const times = strg.split(', ');
  let asSeconds = [];
  for (time of times) {
    asSeconds.push(timeToSeconds(time));
  }

  asSeconds = asSeconds.sort((a, b) => a - b);

  const range = calcRange(asSeconds);
  const mean = calcMean(asSeconds);
  const median = calcMedian(asSeconds);

  return `Range: ${range} Average: ${mean} Median: ${median}`;
}

function calcRange(secArr) {
  // Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.
  const smallestTime = Math.min(...secArr);
  const biggestTime = Math.max(...secArr);
  return secondsToTime(biggestTime - smallestTime);
}

function calcMean(secArr) {
  // Mean or Average : To calculate mean, add together all of the numbers and then divide the sum by the total count of numbers.
  const numOfTimes = secArr.length;
  let totalSeconds = secArr.reduce((acc, cur) => acc + cur);

  return secondsToTime(totalSeconds / numOfTimes);
}

function calcMedian(secArr) {
  // Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).
  const numOfTimes = secArr.length;
  if (numOfTimes % 2 === 1) {
    medianSecs = secArr[Math.floor(numOfTimes / 2)];
  } else {
    medianSecs = (secArr[numOfTimes / 2] + secArr[numOfTimes / 2 - 1]) / 2;
  }
  return secondsToTime(medianSecs);
}

function timeToSeconds(time) {
  const secondsInMin = 60;
  const minsInHours = 60;
  const [hours, minutes, seconds] = time.split('|');
  const totalMins = hours * minsInHours + +minutes;
  return totalMins * secondsInMin + +seconds;
}

function secondsToTime(seconds) {
  const secondsInHour = 3600;
  const secondsInMin = 60;

  const hours = String(Math.floor(seconds / secondsInHour)).padStart(2, '0');
  let secondsRemaining = seconds - hours * secondsInHour;
  let mins = String(Math.floor(secondsRemaining / secondsInMin)).padStart(
    2,
    '0'
  );
  // if a result in seconds is ab.xy... it will be given truncated as ab.
  secondsRemaining = String(
    Math.floor(secondsRemaining - mins * secondsInMin)
  ).padStart(2, '0');
  return `${hours}|${mins}|${secondsRemaining}`;
}

const inp1 = '01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17';
const inp2 = '02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41';
const inp3 = '02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17';
const ans = stat(inp1);
// Range: 01|01|18 Average: 01|38|05 Median: 01|32|34
console.log(ans);
