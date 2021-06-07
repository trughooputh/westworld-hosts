import { Body } from './body/index.js';
import {
  activities,
  femaleNames,
  maleNames,
  sexes,
  sizes
} from './constants.js';

import { 
  getRandomValueInArray,
  getRandomPercent,
  getMinutesDiff,
  getRandomBoolean 
} from './utils.js';

class Host {
  constructor(predefiniton = {}) {
    this.sexe = predefiniton.sexe ? predefiniton.sexe : getRandomValueInArray(sexes);
    this.name = predefiniton.name ? predefiniton.name : this.generateName(this.sexe);
    this.age = predefiniton.age ? predefiniton.age : getRandomPercent();
    this.body = new Body();
    this.limitFullPower = 100;
    if (this.sexe === 'M' && this.age > 13) {
      this.body.head.setBeard(getRandomValueInArray(sizes));
    }
    this.bornTime = Date.now();
    this.deadTime = null;
    this.logs = {
      cycles: 0,
      breathes: 0,
      activities: 0,
    };
    this.status = 'INIT';
    this.activities = activities.filter(activity => {
      if (!activity.ageLimit) {
        return true;
      };
      return (this.age > activity.ageLimit.min) && this.age < activity.ageLimit.max;
    });
    console.log(this.activities);
    this.alive();
  }
  generateName(sexe) {
    return getRandomValueInArray(sexe === 'M' ? maleNames : femaleNames);
  };
  alive() {
    console.log(this.name + ' is born');
    window.cycles.alive.interval = setInterval(function() {
      this.breath();
    }.bind(this), window.speed);
    this.wakeUp();
  };
  setDOMenvironment() {
    const element = document.querySelector('#env')
    element.classList.toggle('day');
    element.classList.toggle('night');
  };
  setlimitFullPower() {
    let limitFullPower = (100 - this.age) + 50;
    this.limitFullPower = limitFullPower > 100 ? 100 : limitFullPower;
    console.log({limitFullPower});
  }

  wakeUp() {
    this.setDOMenvironment();
    this.status = 'AWAKE';
    this.logs.cycles++;
    if (this.logs.cycles > 1) {
      this.age++;
    }
    this.printName();
    this.setlimitFullPower();
    window.cycles.awake.interval = setInterval(function() {
      this.think();
      this.do();
      if(getRandomBoolean()) {
        this.body.updateHungry();
        this.body.updateThirsty();
      }
      if (this.body.power < 25) {
        if (this.wantToSleep()) {
          clearInterval(window.cycles.awake.interval);
          this.sleep();
        }
      }
      // if (!this.isAlive() || this.body.power > this.limitFullPower) {
      if (!this.isAlive()) {
        this.kill();
      }
      this.printHost();
    }.bind(this), window.speed);
  }
  sleep() {
    this.setDOMenvironment();
    this.status = 'ASLEEP';
      window.cycles.asleep.interval = setInterval(function() {
        this.body.updatePower();
        if (this.body.power >= this.limitFullPower) {
          clearInterval(window.cycles.asleep.interval);
          this.wakeUp();
        }
        this.printHost();
      }.bind(this), window.speed);
  };
  wantToSleep() {
    return getRandomBoolean();
  }
  think() {
    const personalities = Object.keys(this.body.head.brain.personality);
    personalities.forEach(personalityKey => {
      let { value, gradient } = this.body.head.brain.personality[personalityKey];
      let newValue = getRandomBoolean() ? value - gradient : value + gradient;
      if (newValue > 100) this.body.head.brain.personality[personalityKey].value = 100;
      else if (newValue < 0) this.body.head.brain.personality[personalityKey].value = 0;
      else this.body.head.brain.personality[personalityKey].value = newValue;
    });
    const { happiness } = this.body.head.brain.personality;
    if (happiness > 90) console.log(this.name + ' is super happy');
    if (happiness < 10) console.log(this.name + ' is sad');
  };
  do() {
    // this.body.moveArm();
    const { power, healthy, thirsty, hungry, happiness, social, culture, name } = getRandomValueInArray(this.activities);
    console.log(name);
    this.body.updatePower(power);
    this.body.updateHealth(healthy);
    if (thirsty) this.body.updateThirsty(thirsty);
    if (hungry) this.body.updateHungry(hungry);
    if (happiness) this.body.head.brain.updateHappiness(happiness);
    if (social) this.body.head.brain.updateSocial(social);
    if (culture) this.body.head.brain.updateCulture(culture);
    this.logs.activities++;
  }
  isHappyEnough() {
    return this.body.head.brain.personality.happiness.value > 5;
  };
  isAlive () {
    return this.isHappyEnough() 
      && this.body.power > 0 
      && this.body.health > 0
      && this.body.hungry < 100
      && this.body.thirsty < 100;
  }
  breath() {
    this.logs.breathes++;
    //console.log('--breath--', this.body.head.brain.personality.happiness);
  }
  kill() {
    this.status = 'DEAD';
    this.deadTime = Date.now();
    clearInterval(window.cycles.awake.interval);
    clearInterval(window.cycles.asleep.interval);
    console.log(this.name + ' is dead after ' + getMinutesDiff(this.bornTime, this.deadTime) + ' seconds');
    console.log(this.logs);
    console.log(this.logs.cycles, 'cycles');
  };
  printHost() {
    const element = document.querySelector('#profile');
    element.innerHTML = JSON.stringify(this.body, null, 4);
    this.printStatus();
  };
  printName() {
    const element = document.querySelector('h1');
    element.innerHTML = `${this.name} (${this.sexe}) - ${this.age}y`;
  }
  printStatus() {
    const subtitleElement = document.querySelector('h2');
    subtitleElement.innerHTML = `${this.status}`;
  }
};

export { Host };