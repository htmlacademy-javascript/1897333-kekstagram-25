import {SIMMILAR_OBJECTS_COUNT, createPost} from './data.js';
const similarPosts = Array.from({length: SIMMILAR_OBJECTS_COUNT}, (element, index) => createPost(index+1));
//console.log(similarPosts);
