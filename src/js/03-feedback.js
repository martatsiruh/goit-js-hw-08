import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');


// хранилище обновлялось не чаще чем раз в 500 миллисекунд
const THROTTLE_WAIT_TIME = 500;
const STORAGE_KEY = "feedback-form-state";
let formData = {};

feedbackFormEl.addEventListener('input', throttle(onFormInput, THROTTLE_WAIT_TIME));
feedbackFormEl.addEventListener('submit', clickSubmitForm);


function onFormInput(event) {
    formData = {
        email: inputEl.value,
        message: textareaEl.value,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    //formData[event.target.name] = event.target.value;
    //localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateTextarea();

function populateTextarea() {
    /**let savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        savedMessage = JSON.parse(savedMessage);

        Object.entries(savedMessage).forEach(([name, value]) => {
            formData[name] = value
            feedbackFormEl[name].value = value
        })
    }*/
    const dataTextarea = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (dataTextarea) {
        inputEl.value = dataTextarea.email;
        textareaEl.value = dataTextarea.message;
    }
}


function clickSubmitForm(event) {
    event.preventDefault();

    event.currentTarget.reset();

    //console.log(dataTextarea)
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    
}