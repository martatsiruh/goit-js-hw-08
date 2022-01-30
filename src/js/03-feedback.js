import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');

feedbackFormEl.addEventListener("submit", clickSubmitForm);



// хранилище обновлялось не чаще чем раз в 500 миллисекунд
const THROTTLE_WAIT_TIME = 500;
const STORAGE_KEY = "feedback-form-state";
const formData = {};

populateTextarea();

feedbackFormEl.addEventListener("input", throttle(onFormInput, THROTTLE_WAIT_TIME));

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
    let savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        savedMessage = JSON.parse(savedInputs);

        Object.entries(savedMessage).forEach(([name, value]) => {
            formData[name] = value
            feedbackFormEl[name].value = value
        })
    }
}


function clickSubmitForm(event) {
    event.preventDefault();

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY)
    feedbackFormEl.reset()
}