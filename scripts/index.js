const question_items = document.querySelectorAll('.question__item');
question_items.forEach((item) => item.addEventListener('click', questionClick));

function questionClick(e) {
  //   const opened_items = document.querySelectorAll('.question__opened');
  //   if (opened_items.length > 0) {
  //     opened_items.forEach((item) => item.classList.remove('question__opened'));
  //   }

  e.currentTarget.classList.toggle('question__opened');
  let current_icon = e.currentTarget.querySelector('.question__icon').innerText;
  if (current_icon === '+') {
    e.currentTarget.querySelector('.question__icon').innerText = '-';
  } else {
    e.currentTarget.querySelector('.question__icon').innerText = '+';
  }

  //   setTimeout((e) => answerShow(e), 2000);
}

// function answerShow(e) {
//   e.currentTarget.classList.toggle('question__show');
// }
