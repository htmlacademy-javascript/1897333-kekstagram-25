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
  if (min >= 0 && max >= 0) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  }
}

getNumber(1, 20);

function checkCommentLength(comment, maxLength) {
  return (comment.length < maxLength);
}

checkCommentLength('123456789', 140);
