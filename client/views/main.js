import { getData, remove } from "../services/database.js";

document.addEventListener("DOMContentLoaded", () => {
  getData().then((data) => {
    createCards(data);
  });
  document.querySelector("#addApp").addEventListener("click", () => {
    window.location.href = "./addApplication.html";
  });
  document.querySelector("#search").addEventListener("input", search);

  });

const createCards = (data) => {
  let cards = document.querySelector("#cards");
  cards.innerHTML = "";
  for (const cardData of data) {
    let desc = cardData.description || "this app does not have description";
    let compName = cardData.companyname || "this app does not have a company";
    let imageUrl = cardData.imageurl || "help.png";
    cards.innerHTML += `
        <div class = "row">
            <div class = "card mb-3 col-12 p-0 border border-dark">
                <div class = "row g-0">
                    <div class = "col-2 my-auto">
                        <img src = ".\\images\\${imageUrl}" class = "card-img-top rounded-circle"></img>
                    </div>
                    <div class = "col-8">
                        <div class = "card-body">
                            <h4 class = "card-title mb-4">${cardData.name}</h4>
                            <p class = "card-text m-0">${desc}</p>
                            <p class = "card-text m-0"><small>Price: ${cardData.price}$</small></p>
                            <p class = "card-text m-0"><small>Company name: ${compName}</small></p>
                        </div>
                    </div>
                        <div class = "col-2 justify-content-center my-auto">
                            <p class="h1 col remove text-center" data-app-id = "${cardData.id}">&#128465</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
    cards.querySelectorAll('.remove').forEach((element) => element.addEventListener('click',async (event) => {
        await remove(event.target.getAttribute('data-app-id'))
        data = await getData();
        createCards(data)
    }))
};

const search = (event) => {
    getData().then((data) => {
        let result = data.filter((app) =>
        app.name.toLowerCase().includes(event.target.value.toLowerCase()))
        createCards(result);
    })
};
