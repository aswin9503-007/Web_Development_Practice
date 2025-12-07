

function bmiCalculator(weight, height){
    var result = weight / (height * height); 
    return Math.round(result)
}

var bmi = bmiCalculator(65, 1.8); 

console.log(bmi)



