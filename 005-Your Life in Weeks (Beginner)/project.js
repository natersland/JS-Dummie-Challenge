class LifeInWeeks {
  constructor(age) {
    this.age = age;
  }
  calcLifeYear() {
    const ageLeft = 90 - this.age;
    const daysLeft = ageLeft * 365;
    const weekLeft = ageLeft * 52;
    const monthLeft = ageLeft * 12;

    console.log(
      `$You have ${daysLeft} days, ${weekLeft} weeks, and ${monthLeft} months left.`
    );
  }
}

const people1 = new LifeInWeeks(56);
people1.calcLifeYear();
