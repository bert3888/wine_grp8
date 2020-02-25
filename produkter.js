// Det tomme array til produkterne
let produkterListe = [];

// alle mulige variabler
const produktTemplate = document.querySelector("template");
const container = document.querySelector(".data-container");
let filter = "alle";
const detalje = document.querySelector("#detalje");
const lukKnap = document.querySelector("#luk");

//link til json spreadsheet
const link = "https://spreadsheets.google.com/feeds/list/1KFeuCYN5F8ByEdt8BDCMkvBp2RHG39MfIKpr_OZD3AU/od6/public/values?alt=json";

document.addEventListener("DOMContentLoaded", start);

// function som kører efter dom er loaded
function start() {
    hentData();
    addEventlistenersToAllButtons();
}

// henter json data
async function hentData() {
    const response = await fetch(link);
    produkterListe = await response.json();
    visProdukter();

}

// sætter info fra json data ind i template
function visProdukter() {
    container.innerHTML = ""; // tømmer container
    produkterListe.feed.entry.forEach(produkt => {

        // if sætning med filter funktion
        if (filter == "alle" || filter == produkt.gsx$type.$t) {
            let klon = produktTemplate.cloneNode(true).content; // kloner templaten og sætter inhold ind
            klon.querySelector("h2").textContent = produkt.gsx$navn.$t;
            klon.querySelector("h3").textContent = produkt.gsx$year.$t;
            klon.querySelector(".type").textContent = produkt.gsx$type.$t;
            klon.querySelector(".origin").textContent = produkt.gsx$origin.$t;
            klon.querySelector("img").src = "imgs/" + produkt.gsx$billede.$t + "-singlebottle.png";

            //klon.querySelector(".image").style.backgroundImage = "imgs/" + produkt.gsx$billede.$t + "-singlebottle.png";

            container.appendChild(klon);

            // sætter event listener på det sidste man trykker paa og linker til detalje view
            container.lastElementChild.addEventListener("click", () => {
                location.href = "produktside.html?id=" + produkt.gsx$id.$t;

            });
        }
    })
}


// sætter event listener paa alle filter knapper
function addEventlistenersToAllButtons() {
    document.querySelectorAll(".filter").forEach(elm => {
        elm.addEventListener("click", filtrering);

    })
}

// filtrerer produkter
function filtrering() {
    console.log("FILTER");
    filter = this.dataset.produkt;
    document.querySelectorAll(".filter").forEach(elm2 => {
        elm2.classList.remove("valgt");
    })
    this.classList.add("valgt");
    visProdukter();
}



//burgermenu

const btn = document.querySelector("#toggle");
const overlay = document.querySelector("#overlay")

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
    btn.classList.toggle("active");
    overlay.classList.toggle("open")
}
