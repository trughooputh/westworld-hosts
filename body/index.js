import { Head } from "./head.js";
import { Arm } from "./arm.js";

class Body {
  constructor() {
    this.head = new Head();
    this.arms = [new Arm("L"), new Arm("R")];
    this.head = new Head();
    this.power = 100;
    this.health = 70;
    this.hungry = 50;
    this.thirsty = 50;
  }
  updatePower(gradient = 1) {
    if (this.power <= 100) {
      this.power = this.power + gradient > 100 ? 100 : this.power + gradient;
    }
  }
  updateHealth(gradient = 1) {
    if (this.health <= 100) {
      this.health = this.health + gradient > 100 ? 100 : this.health + gradient;
    }
  }
  updateHungry(gradient = 1) {
    this.hungry = this.hungry + gradient < 0 ? 0 : this.hungry + gradient;
  }
  updateThirsty(gradient = 1) {
    this.thirsty = this.thirsty + gradient < 0 ? 0 : this.thirsty + gradient;
  }
  moveArm(side) {
    this.power = this.power - 2;
  }
}

export { Body };
