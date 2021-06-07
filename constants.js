const hairsColors = ['brown', 'blond', 'dark'];
const eyesColors = ['blue', 'green', 'brown'];
const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
const sexes = ['M', 'F'];
const sides = ['L', 'R'];
const activities = [
  { name: 'Stand up', power: -0.5, healthy: 0.5 },
  { name: 'Walk 🚶🏻‍♂️', power: -1, healthy: 0.5, ageLimit: { min: 3, max: 100 }, happiness: 1 },
  { name: 'Run 🏃🏽‍♂️', power: -2, healthy: 1, ageLimit: { min: 4, max: 75 }, happiness: 2, thirsty: 5, hungry: 3 },
  { name: 'Eat healthy 🥗', power: -0.5, healthy: 1, happiness: 1, hungry: -5 },
  { name: 'Eat junk food 🍔', power: -0.5, healthy: -2, happiness: 2, hungry: -5 },
  { name: 'Drink water 💧', power: -0.5, healthy: 2, thirsty: -5 },
  { name: 'Drink alcohol 🍹', power: -0.5, healthy: -2, ageLimit: { min: 14, max: 100 }, happiness: 1, thirsty: -5 },
  { name: 'Cook 🥘', power: -0.5, healthy: 0, ageLimit: { min: 18, max: 100 } },
  { name: 'Nothing', power: 0, healthy: 0, culture: -0.1 },
  { name: 'Work 💼', power: -1, healthy: 0, ageLimit: { min: 17, max: 65 }, happiness: -3, social: 2 },
  { name: 'Play 🎮', power: -1, healthy: 1, happiness: 3, social: 2 },
  { name: 'Watch Netflix 📺', power: -0.5, healthy: 0, happiness: 3, culture: 0.1, ageLimit: { min: 5, max: 100 } },
  { name: 'Cry 😢', power: -1, healthy: -1, happiness: -5 },
  { name: 'Do sport 🏋🏻‍♂️', power: -2, healthy: 3, ageLimit: { min: 5, max: 100 }, happiness: 2, thirsty: 5, hungry: 3 },
  { name: 'Go to the bathroom', power: -1, healthy: 2, happiness: 1 },
  { name: 'Listen music', power: 0, healthy: 1, happiness: 1, culture: 0.1 },
  { name: 'Read a book', power: -0.5, happiness: 1, culture: 0.5, ageLimit: { min: 8, max: 100 } },
  { name: 'Read newspaper', power: -0.5, culture: 0.1, ageLimit: { min: 8, max: 100 } },
  { name: 'Meet friends', power: -1, healthy: 1, happiness: 4, social: 5, ageLimit: { min: 5, max: 100 } },
  { name: 'Tak a nap', power: 5, healthy: 1, happiness: 3 },
];

const femaleNames = ['Dolores', 'Maeve', 'Clementine']; 
const maleNames = ['Teddy', 'William', 'Bernard', 'Akecheta']; 

export {
  hairsColors,
  eyesColors,
  sizes,
  femaleNames,
  maleNames,
  sexes,
  sides,
  activities,
};