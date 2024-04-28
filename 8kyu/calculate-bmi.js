// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// My solution
function bmi(weight, height) {
  const calcBmi = weight / (height * height);

  if (calcBmi <= 18.5) return 'Underweight';
  if (calcBmi <= 25) return 'Normal';
  if (calcBmi <= 30) return 'Overweight';
  return 'Obese';
}

// Chained ternary - less readable
return bmi < 18.5
  ? 'Underweight'
  : bmi <= 25
    ? 'Normal'
    : bmi <= 30
      ? 'Overweight'
      : 'Obese';
