let randomNumber;

function between(min, max) {
  if (min >= 0 && max >= 0) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  } else {
    console.log("min и max должны быть положительными числами");
  }
}

between(20, 10);

console.log(randomNumber);

function commentCheck(comment, maxLength) {
  if (comment.length > maxLength) {
    return false;
  } else {
    return true;
  }
}

console.log(commentCheck("123456789", 5));
