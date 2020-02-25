//split scroll funktion start
let isLeftSideScrolling;
let container_LHasScrollSnap = false;
const container_L = document.querySelector(".container_left");
const container_R = document.querySelector(".container_right");

// Sæt højre scroll i bund
container_R.scrollTop = container_R.scrollHeight - container_R.clientHeight - container_R.scrollTop;



container_L.addEventListener("scroll", listenL);
// kontrollere venstre del af skærmen
function listenL() {



    if (isLeftSideScrolling) {
        container_R.scrollTop = this.scrollHeight - this.clientHeight - this.scrollTop;


        // hvis venstre side bliver scrollet tilføjes scroll snap på venstre side
        if (container_LHasScrollSnap == true) {
            //                    console.log("BOOOOM L")
            container_L.classList.add("scroll_snap_type_y_mandatory");
            container_R.classList.remove("scroll_snap_type_y_mandatory");
            container_LHasScrollSnap = false;
        }
    }
    isLeftSideScrolling = true;
}

container_R.addEventListener("scroll", listenR);
// kontrollere højre del af skærmen
function listenR() {


    if (!isLeftSideScrolling) {
        container_L.scrollTop = this.scrollHeight - this.clientHeight - this.scrollTop;

        // hvis venstre side ikke bliver scrollet tilføjes scroll snap på højre side
        if (container_LHasScrollSnap == false) {
            //                    console.log("BOOOOM R");
            container_R.classList.add("scroll_snap_type_y_mandatory");
            container_L.classList.remove("scroll_snap_type_y_mandatory");
            container_LHasScrollSnap = true;
        }

    }
    isLeftSideScrolling = false;
}

//split scroll funktion slut



// carousel aka slideshow
let slideIndex = 0;
let i;
let x = document.querySelectorAll(".mySlides");
let xx = document.querySelectorAll(".mobilSlides");

carousel();


function carousel() {
    // henholdvis ændre display modes for at vise nyt billede
    // fungere lidt som et array hvor der brugges ++ for at target det enkelte billede
    /*    for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";
       }
      slideIndex++;
      */

    /*------- Mobil -------*/
    if (slideIndex > xx.length - 1) {
        slideIndex = 0;
    }
    xx.forEach(billede => {
        billede.style.display = "none";
    })

    xx[slideIndex].style.display = "block";
    slideIndex++
    /*------- Mobil Slut-------*/
    /*------- Desktop -------*/

    if (slideIndex > x.length - 1) {
        slideIndex = 0;
    }
    x.forEach(billede => {
        billede.style.display = "none";
    })

    x[slideIndex].style.display = "block";
    slideIndex++
    // skifter display mode hvert andet sekundt
    setTimeout(carousel, 2000);
    /*------- Desktop Slut-------*/

}

setTimeout(loader, 2000);
//loader
function loader() {
    console.log(loader);

    // tilføjer fade animtion på baggrund
    document.querySelector(".baggrund").classList.add("fadeout");

    // tilføjer fade animtion på gif
    document.querySelector(".loader").classList.add("fadeout");

    //lytter på hvornår fade animation er færdig
    document.querySelector(".baggrund").addEventListener("animationend", hidebaggrund);
}

//tilføjer klassen hide på gif (får den til at forsvinde og gør resten af siden scrollable og clickable)
function hidebaggrund() {
    document.querySelector(".loader").classList.add("hide");
}


//burgermenu

const btn = document.querySelector("#toggle");
const overlay = document.querySelector("#overlay")

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
    btn.classList.toggle("active");
    overlay.classList.toggle("open")
}




//var div1 = document.querySelector('.container_left');
////var div2 = document.querySelector('.container_right');
//console.log(div1);
////console.log(div1.offsetHeight);
////div1.scrollTop = 2646;
//
//div1.addEventListener('scroll', scrollFunction);
////div2.addEventListener('scroll', scrollFunction);
//
//function scrollFunction() {
//    console.log("offsetheigt", div1.offsetHeight, "scrollY", scrollY, "scrolltop", div1.scrollTop, "scrollheight", div1.scrollHeight);
//    //    this.scrollTop();
//    // div2.scrollTop -= this.scrollTop;
//}
//
//div1.addEventListener("click", () => {
//    console.log(div1);
//    div1.scrollTop = document.querySelector(".container").offsetHeight * 0.5;
//})
//
////window.scroll(function () {
////    div1.scrollLeft($(this).scrollBottom());
////});

// Sæt højre scroll i bund


//document.querySelector(".container_right").scrollTop = (document.querySelector(".container_right").scrollHeight - document.querySelector(".container_right").clientHeight) - document.querySelector(".container_right").scrollTop;
//
//
//
//document.querySelector(".container_left").addEventListener("scroll", listenL);
//
//function listenL() {
//    console.log("scrollTop: " + this.scrollTop);
//    console.log("clientHeight: " + this.clientHeight);
//    console.log("scrollHeight: " + this.scrollHeight);
//
//    console.log("***********************************");
//
//    document.querySelector(".container_right").scrollTop = (this.scrollHeight - this.clientHeight) - document.querySelector(".container_left").scrollTop;
//
//}
//
//document.querySelector(".container_right").addEventListener("scroll", listenR);
//
//function listenR() {
//    //        console.log("scrollTop: "+this.scrollTop);
//    //        console.log("clientHeight: "+this.clientHeight);
//    //        console.log("scrollHeight: "+this.scrollHeight);
//    //
//    //        console.log("***********************************");
//
//    document.querySelector(".container_left").scrollTop = (this.scrollHeight - this.clientHeight) - document.querySelector(".container_right").scrollTop;
//
//}
