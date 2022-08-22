const isNameValid = (document) => {
    let nameEl = document.querySelector('#name');
    const nameRegex = /^([\w\s]{4,30})$/
    return nameRegex.test(nameEl.value);
}

const isPriceValid = (document) => {
    let priceEl = document.querySelector('#price');
    const priceRegex = /^[0-9]+$/;
    return priceRegex.test(priceEl.value);
}

const isImageUrlValid = (document) => {
    let imageUrlEl = document.querySelector('#ImageUrl');
    return imageUrlEl.value.length <= 300;
}

const isCompanyNameValid = (document) => {
    let companyNameEl = document.querySelector('#companyName');
    return companyNameEl.value.length <= 30;
}


const isDescriptionValid = (document) => {
    let descriptionEl = document.querySelector('#description');
    return descriptionEl.value.length <= 500;
}

export {isNameValid, isPriceValid, isImageUrlValid, isCompanyNameValid, isDescriptionValid}