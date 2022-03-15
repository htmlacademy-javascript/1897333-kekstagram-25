import { getNumber, getRandomArrayElement, shuffleArray} from './util.js';

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

const unshuffledIds = [];

const shuffledIds = shuffleArray(unshuffledIds);

for (let i=1 ; i <= SIMMILAR_OBJECTS_COUNT ; i++) {
  unshuffledIds.push(i);
}

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${  getNumber(1, 6)  }.svg`,
  message: getRandomArrayElement(COMMENT),
  name: getRandomArrayElement(NAMES),
});

const createPost = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(COMMENT),
  likes: getNumber(15, 200),
  comments: Array.from({length: SIMMILAR_OBJECTS_COUNT}, (element, index) => createComment(shuffledIds[index]))
});

const similarPosts = Array.from({length: SIMMILAR_OBJECTS_COUNT}, (element, index) => createPost(index+1));

export {SIMMILAR_OBJECTS_COUNT, unshuffledIds, similarPosts};
