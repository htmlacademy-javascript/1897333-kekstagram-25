import { getNumber, getRandomArrayElement, shuffledIds} from './util.js';
import { COMMENT, NAMES, SIMMILAR_OBJECTS_COUNT} from './data.js';

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

//console.log(similarPosts);
