import { SIMMILAR_OBJECTS_COUNT, unshuffledIds } from './data.js';

function getNumber(min, max) {
  if (min > max) {
    throw new RangeError ('первое значение должно быть минимумом, а второе максимумуом');
  }
  if (min === max) {
    throw new RangeError ('минимум не может быть равен максимуму');
  }
  if (min < 0 || max < 0) {
    throw new RangeError ('min и max должны быть положительными числами');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkCommentLength(comment, maxLength) {
  return (comment.length <= maxLength);
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
const shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const getRandomArrayElement = (elements) => elements[getNumber(0, elements.length - 1)];

export {getNumber, getRandomArrayElement, shuffleArray};
