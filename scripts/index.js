const question_items = document.querySelectorAll('.question__item');
question_items.forEach((item) => item.addEventListener('click', questionClick));

function questionClick(e) {
  const opened_item = document.querySelector('.question__opened');
  if (opened_item == e.currentTarget) {
    e.currentTarget.classList.remove('question__opened');
    e.currentTarget.querySelector('.question__icon').innerText = '+';
  } else {
    if (opened_item) {
      opened_item.classList.remove('question__opened');
      opened_item.querySelector('.question__icon').innerText = '+';
    }
    e.currentTarget.classList.add('question__opened');
    e.currentTarget.querySelector('.question__icon').innerText = '-';
  }
}
