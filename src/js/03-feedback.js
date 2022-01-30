import throttle from 'lodash.throttle';

/**const feedbackFormEl = document.querySelector('.feedback-form');

feedbackFormEl.addEventListener("submit", clickSubmitForm);

// хранилище обновлялось не чаще чем раз в 500 миллисекунд
const THROTTLE_WAIT_TIME = 500;
const STORAGE_KEY = "feedback-form-state";
const formData = {};


function clickSubmitForm(event) {
    event.preventDefault();
}
*/

const feedbackFormEl = document.querySelector('.feedback-form')
const feedbackMessageEl = document.querySelector('.feedback-form textarea')

feedbackFormEl.addEventListener('submit', onFormSubmit);
feedbackMessageEl.addEventListener('input', onTextareaInput);

function onTextareaInput(event) {
    const message = event.currentTarget.value;

    localStorage.setItem('feelback-msg', message);
}