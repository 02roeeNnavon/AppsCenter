import {isNameValid,isPriceValid} from "../controllers/validate.js";
const validateName = (event) => {
    let nameEl = event.target;
    nameEl.classList.remove('is-valid','is-invalid');
    if (nameEl.value != ''){
        isNameValid(document)? nameEl.classList.add('is-valid'):nameEl.classList.add('is-invalid');
    }
}

const validatePrice = (event) => {
    let priceEl = event.target;
    priceEl.classList.remove('is-valid','is-invalid');
    if (priceEl.value != ''){
        isPriceValid(document)? priceEl.classList.add('is-valid'):priceEl.classList.add('is-invalid');
    }
}

export {validateName, validatePrice};