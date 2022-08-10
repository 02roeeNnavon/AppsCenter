const addItemToTheList = (data) => {
    localStorage.setItem('applications', JSON.stringify(JSON.parse(localStorage.getItem('applications')).concat(data)));
}

const getNextId = () => {
    let id = localStorage.getItem('id');
    localStorage.setItem('id', ++id);
    
    return id;
}

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('#name').addEventListener('input',validateName)
});

const publish = () => {

}

const validateName = (event) => {
    let textEl = event.target
    textEl.classList.remove('is-valid','is-invalid');
    if (textEl.value.length < 4 || textEl.value.length > 30){
        textEl.classList.add('is-invalid')
        return false
    }else{
        textEl.classList.add('is-valid')
        return true
    }
}