import { Brain } from './brain.js';
import { eyesColors, hairsColors, sizes } from './../constants.js';
import { getRandomValueInArray } from './../utils.js';

class Head {
  constructor() {
    this.brain = new Brain();
    this.beard = {};
    this.hairs = {
      color: getRandomValueInArray(hairsColors),
      size: getRandomValueInArray(sizes)
    };
    this.eyes = {
      color: getRandomValueInArray(eyesColors),
      open: false,
    };
    this.nose = {
      size: getRandomValueInArray(sizes)
    }
  };
  openEyes() {
    this.eyes.open = true;
  };
  setBeard(beardSize) {
    this.beard.size = beardSize;
  }
};
export { Head };