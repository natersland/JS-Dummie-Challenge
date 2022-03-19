class PizzaCompany {
  constructor(size, pepperoni, cheese, totalbill) {
    this.size = size.toLowerCase();
    this.pepperoni = pepperoni.toLowerCase();
    this.cheese = cheese.toLowerCase();
    this.totalbill = totalbill;
  }
  sizeCheck() {
    if (this.size === "l") {
      this.totalbill += 25;
    } else if (this.size === "m") {
      this.totalbill += 20;
    } else if (this.size === "s") {
      this.totalbill += 15;
    }
  }
  add_peperoni() {
    if (this.pepperoni === "y") {
      if (this.size === "l" || this.size === "m") {
        this.totalbill += 3;
      } else if (this.size === "s") {
        this.totalbill += 2;
      }
    }
  }
  extra_cheese() {
    if (this.cheese === "y") {
      this.totalbill++;
    }
  }
  displayBill(orderName) {
    if (
      (this.size === "s" || this.size === "m" || this.size === "l") &&
      (this.pepperoni === "y" || this.pepperoni === "n") &&
      (this.cheese === "y" || this.cheese === "n")
    ) {
      orderName.sizeCheck();
      orderName.add_peperoni();
      orderName.extra_cheese();
      console.log(`🍕พิซซ่าของคุณราคา: $${this.totalbill}`);
    } else {
      console.log(`😌กรอกข้อมูลอะไรบางอย่างผิด กรุณาเช็คอีกครั้ง`);
    }
  }
}

const pizzaOrder001 = new PizzaCompany("m", "y", "y", 0);
// size: "s", "m", "l"
// add_pepperoni: "y", "n"
// extra_cheese: "y", "n" */
pizzaOrder001.displayBill(pizzaOrder001);
