import {createPost, SIMMILAR_OBJECTS_COUNT} from './data.js';
const similarPicturesElement = document.querySelector('.pictures');
const similarPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPictures = Array.from({length: SIMMILAR_OBJECTS_COUNT}, (element, index) => createPost(index+1));
const similarListFragment = document.createDocumentFragment();

const createPicture = () => {
  similarPictures.forEach((picture) => {
    const pictureElement = similarPicturesTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
    similarListFragment.appendChild(pictureElement);
  });
  similarPicturesElement.appendChild(similarListFragment);
};
export {createPicture};
