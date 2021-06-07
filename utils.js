const getRandomValueInArray = (arrayValues) => {
  return arrayValues[Math.floor(Math.random() * arrayValues.length)];
}
const getRandomPercent = () => {
  return Math.floor(Math.random() * 100);
}
const getRandomBoolean = () => {
  return Math.random() < 0.5;
}

const getMinutesDiff = (dt2, dt1) => {
  let diff =(dt2 - dt1) / 1000;
  // diff /= 60;
  return Math.abs(Math.round(diff));
}

export { getRandomValueInArray, getRandomPercent, getMinutesDiff, getRandomBoolean };