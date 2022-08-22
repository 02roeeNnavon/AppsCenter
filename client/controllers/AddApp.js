import { isNameValid, isPriceValid, isCompanyNameValid, isDescriptionValid, isImageUrlValid} from "../controllers/validate.js";
import { addItemToTheList} from "../services/database.js";
import {validateName, validatePrice} from "../views/validView.js"

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('#name').addEventListener('input',validateName);
    document.querySelector('#price').addEventListener('input',validatePrice);
    document.querySelector('#publish').addEventListener('click',publish);
});

let errorPresented = false;

const publish = (event) => {
    if (isNameValid(document) & isPriceValid(document) & isDescriptionValid(document) & isCompanyNameValid(document) & isImageUrlValid(document)){
        let application = {"imageUrl":getImageUrl(),"name":getName(),"price":getPrice(),"companyName":getCompanyName(),"description":getDescription()};
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

const getName = () => {
    return document.querySelector('#name').value;
}
const getPrice = () => {
    return document.querySelector('#price').value;
}
const getDescription = () => {
    return document.querySelector('#description').value;
}
const getCompanyName = () => {
    return document.querySelector('#companyName').value;
}
const getImageUrl = () => {
    return document.querySelector('#ImageUrl').value;
}