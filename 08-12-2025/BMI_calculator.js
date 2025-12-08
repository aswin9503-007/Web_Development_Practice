function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / (height * height));

  if (bmi < 18.5) {
    var interpretation = "Your BMI is " + bmi + " so you are underweight.";
  }

  if (bmi >= 18.5 && bmi < 24.9) {
    var interpretation = "Your BMI is " + bmi + " so you have a normal weight.";
  }

  if (bmi >= 24.9) {
    var interpretation = "Your BMI is " + bmi + " so you are overweight.";
  }

  return interpretation;
}

var weight = Math.random();
weight = Math.floor(weight * 200) + 1;

var height = Math.random();
height = (Math.floor(height * 200) + 100) / 100;

console.log("Weight:", weight);
console.log("Height:", height);
console.log(bmiCalculator(weight, height));
