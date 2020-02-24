let produkterListe = [];

const produktTemplate = document.querySelector("template");
const container = document.querySelector(".data-container");
let filter = "alle";

const detalje = document.querySelector("#detalje");
const lukKnap = document.querySelector("#luk");




const link = "https://spreadsheets.google.com/feeds/list/1KFeuCYN5F8ByEdt8BDCMkvBp2RHG39MfIKpr_OZD3AU/od6/public/values?alt=json";

document.addEventListener("DOMContentLoaded", start);

function start() {
    hentData();
    //addEventlistenersToAllButtons();
}

async function hentData() {
    const response = await fetch(link);
    produkterListe = await response.json();
    visProdukter();

}

function visProdukter() {
    container.innerHTML = "";
    produkterListe.feed.entry.forEach(produkt => {

        if (filter == "alle" || filter == produkt.gsx$type.$t) {
            let klon = produktTemplate.cloneNode(true).content;
            klon.querySelector("h2").textContent = produkt.gsx$navn.$t;
            klon.querySelector("h3").textContent = produkt.gsx$year.$t;
            klon.querySelector(".type").textContent = produkt.gsx$type.$t;
            klon.querySelector(".origin").textContent = produkt.gsx$origin.$t;
            klon.querySelector("img").src = "imgs/" + produkt.gsx$billede.$t + "-singlebottle.png";

            //klon.querySelector(".image").style.backgroundImage = "imgs/" + produkt.gsx$billede.$t + "-singlebottle.png";

            container.appendChild(klon);

            container.lastElementChild.addEventListener("click", () => {
                location.href = "produktside.html?id=" + produkt.gsx$id.$t;

            });
        }
    })
}

function addEventlistenersToAllButtons() {
    document.querySelectorAll(".filter").forEach(elm => {
        elm.addEventListener("click", filtrering);

    })
}

function filtrering() {
    console.log("FILTER");
    filter = this.dataset.produkt;
    //    document.querySelector("header h1").textContent = this.textContent;
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
