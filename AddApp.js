const addItemToTheList = (data) => {
    localStorage.setItem('applications', JSON.stringify(JSON.parse(localStorage.getItem('applications')).concat(data)));
}

const getNextId = () => {
    let id = localStorage.getItem('id');
    localStorage.setItem('id', ++id);
    
    return id;
}

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('#name').addEventListener('input',validateName);
    document.querySelector('#price').addEventListener('input',validatePrice);
    document.querySelector('#publish').addEventListener('click',publish);
});

let errorPresented = false;

const publish = (event) => {
    if (isNameValid() & isPriceValid() & isDescriptionValid() & isCompanyNameValid() & isImageUrlValid()){
        let application = {id:getNextId(),imageUrl:getImageUrl(),name:getName(),price:getPrice(),companyName:getCompanyName(),desc:getDescription()};
        addItemToTheList(application)
        window.location.href = './mainPage.html';
    }else if(!errorPresented){
        let div = document.createElement('div');
        div.classList.add('col-4','offset-4')
        let errorLine = document.createElement('p');
        errorLine.classList.add('text-danger', 'col-12')
        errorLine.innerHTML = 'Opps, something went wrong! <br> check your fields again'
        div.appendChild(errorLine)
        document.querySelector('#container').appendChild(div)
        errorPresented = true;
    }
}

const validateName = (event) => {
    let nameEl = event.target;
    nameEl.classList.remove('is-valid','is-invalid');
    if (nameEl.value != ''){
        isNameValid()? nameEl.classList.add('is-valid'):nameEl.classList.add('is-invalid');
    }
}
const isNameValid = () => {
    let nameEl = document.querySelector('#name');
    nameRegex = /^([\w\s]{4,30})$/
    return nameRegex.test(nameEl.value);
}

const getName = () => {
    return document.querySelector('#name').value;
}

const validatePrice = (event) => {
    let priceEl = event.target;
    priceEl.classList.remove('is-valid','is-invalid');
    if (priceEl.value != ''){
        isPriceValid()? priceEl.classList.add('is-valid'):priceEl.classList.add('is-invalid');
    }
}
const isPriceValid = () => {
    let priceEl = document.querySelector('#price');
    const priceRegex = /^[0-9]+$/;
    return priceRegex.test(priceEl.value);
}

const getPrice = () => {
    return document.querySelector('#price').value;
}

const isDescriptionValid = () => {
    let descriptionEl = document.querySelector('#description');
    return descriptionEl.value.length <= 500;
}

const getDescription = () => {
    return document.querySelector('#description').value;
}

const isCompanyNameValid = () => {
    let companyNameEl = document.querySelector('#companyName');
    return companyNameEl.value.length <= 30;
}

const getCompanyName = () => {
    return document.querySelector('#companyName').value;
}

const isImageUrlValid = () => {
    let imageUrlEl = document.querySelector('#ImageUrl');
    return imageUrlEl.value.length <= 300;
}

const getImageUrl = () => {
    return document.querySelector('#ImageUrl').value;
}