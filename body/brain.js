import { getRandomPercent } from "trugh-utils";
class Brain {
  constructor() {
    this.personality = {
      // humour: {
      //   value: getRandomPercent(),
      //   gradient: 2,
      // },
      sensibility: {
        value: getRandomPercent(),
        gradient: 1,
      },
      happiness: {
        value: getRandomPercent(),
        gradient: 2,
      },
      // shyness: {
      //   value: getRandomPercent(),
      //   gradient: 0.1,
      // },
      social: {
        value: getRandomPercent(),
        gradient: 1,
      },
      culture: {
        value: getRandomPercent(),
        gradient: 1,
      },
      // curiousity: {
      //   value: getRandomPercent(),
      //   gradient: 0.5,
      // },
      // empathy: {
      //   value: getRandomPercent(),
      //   gradient: 1,
      // },
    };
  }
  updateHappiness(gradient = 1) {
    if (this.happiness <= 100) {
      this.happiness =
        this.happiness + gradient > 100 ? 100 : this.happiness + gradient;
    }
  }
  updateSocial(gradient = 1) {
    if (this.social <= 100) {
      this.social = this.social + gradient > 100 ? 100 : this.social + gradient;
    }
  }
  updateCulture(gradient = 1) {
    if (this.culture <= 100) {
      this.culture =
        this.culture + gradient > 100 ? 100 : this.culture + gradient;
    }
  }
}

export { Brain };
