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

getNumber(1, 20);

function checkCommentLength(comment, maxLength) {
  return (comment.length <= maxLength);
}

checkCommentLength('123456789', 140);

const SIMMILAR_OBJECTS_COUNT = 25;

const NAMES = [
  'Александр',
  'Дмитрий',
  'Максим',
  'Сергей',
  'Андрей',
  'Алексей',
  'Артём',
  'Илья',
  'Кирилл',
  'Михаил',
  'Никита',
  'Матвей',
  'Роман',
  'Егор',
  'Арсений',
  'Иван',
  'Денис',
  'Евгений',
  'Даниил',
  'Тимофей',
  'Владислав',
  'Игорь',
  'Владимир',
  'Павел',
  'Руслан',
];

const COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const idUnshuffled = [];

for (let i=1 ; i <= SIMMILAR_OBJECTS_COUNT ; i++) {
  idUnshuffled.push(i);
}

console.log(idUnshuffled);

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

const b = shuffleArray(idUnshuffled);
console.log(b);
console.log(b[0]);

const getRandomArrayElement = (elements) => elements[getNumber(0, elements.length - 1)];

const createPost = () => ({
  id: getRandomArrayElement(b),
  url: `img/avatar-${  getNumber(1, 6)  }.svg`,
  description: '',
  likes: getNumber(15, 200),
  name: getRandomArrayElement(NAMES),
  message: getRandomArrayElement(COMMENT)
});

const similarPosts = Array.from({length: SIMMILAR_OBJECTS_COUNT}, createPost);

console.log(similarPosts);
