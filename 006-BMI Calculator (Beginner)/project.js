class BMICalculator {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
  bmiCalc(weight, height) {
    const bmiResult = Number(weight / height ** 2).toFixed(2);
    return bmiResult;
  }

  bmiRating(bmi) {
    if (bmi >= 35) {
      return `you are clinically obese`;
    } else if (bmi >= 30) {
      return `you are obese.`;
    } else if (bmi >= 25) {
      return `you are slightly overweight.`;
    } else if (bmi >= 22) {
      return `you have a normal weight.`;
    } else {
      return `you are underweight.`;
    }
  }
  result() {
    let bmiResult = this.bmiCalc(this.weight, this.height);
    console.log(`You BMI result is ${bmiResult}, ${this.bmiRating(bmiResult)}`);
  }
}

const poeple1 = new BMICalculator(1.75, 65);
poeple1.result();
