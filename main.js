const getData = () => {
    if (localStorage.getItem('applications') == null) {
        localStorage.setItem('applications', JSON.stringify(applications));
        localStorage.setItem('id', id);
    }

    return JSON.parse(localStorage.getItem('applications'));
}

document.addEventListener("DOMContentLoaded", () => {
    createCards(getData())
    document.querySelector('#addApp').addEventListener('click',() => {window.location.href = './addApplication.html'})
    document.querySelector('#search').addEventListener('input',search);
});

const createCards = (data) => {
    let cards = document.querySelector('#cards');
    cards.innerHTML = '';
    for (const cardData of data) {
        let row = document.createElement('div');
        row.classList.add('row',);

        let card = document.createElement('div');
        card.classList.add('card','mb-3','col-12','p-0','border-0');
        
        let innerRow = document.createElement('div');
        innerRow.classList.add('row','g-0');

        let imgCol = document.createElement('div');
        imgCol.classList.add('col-2');

        let img = document.createElement('img');
        img.src = `.\\images\\${cardData.id}\\${cardData.imageUrl}`;   
        img.classList.add('card-img-top','rounded-circle');
        img.addEventListener('error',() => {img.src = '.\\images\\Help.png'})
        
        let bodyCol =document.createElement('div');
        bodyCol.classList.add('col-9');

        let body = document.createElement('div');
        body.classList.add('card-body');

        let title = document.createElement('h4');
        title.classList.add('card-title','mb-4');
        title.innerHTML = cardData.name;

        let description = document.createElement('p');
        description.classList.add('card-text','m-0');
        let desc = cardData.desc;
        desc != ''? true:desc = 'this app does not have description';
        description.innerHTML = desc;

        let price = document.createElement('p');
        price.classList.add('card-text','m-0');
        price.innerHTML = `<small>Price: ${cardData.price}$</small>`;

        let companyName = document.createElement('p');
        companyName.classList.add('card-text','m-0');
        let compName = cardData.companyName;
        compName != ''? true:compName = 'this app does not have a company'
        companyName.innerHTML = `<small>Company name: ${compName}</small>`;

        imgCol.appendChild(img);
        innerRow.appendChild(imgCol);

        body.appendChild(title);
        body.appendChild(description);
        body.appendChild(price);
        body.appendChild(companyName);

        bodyCol.appendChild(body);
        innerRow.appendChild(bodyCol);
        card.appendChild(innerRow);
        row.appendChild(card);
        cards.appendChild(row);
    }
}

const search = (event) => {
    let data = getData().filter((app) => app.name.toLowerCase().includes(event.target.value));
    createCards(data);
}