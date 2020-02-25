let isLeftSideScrolling;
let container_LHasScrollSnap = false;
const container_L = document.querySelector(".container_left");
const container_R = document.querySelector(".container_right");

// Sæt højre scroll i bund
container_R.scrollTop = container_R.scrollHeight - container_R.clientHeight - container_R.scrollTop;



container_L.addEventListener("scroll", listenL);

function listenL() {



    if (isLeftSideScrolling) {
        container_R.scrollTop = this.scrollHeight - this.clientHeight - this.scrollTop;



        if (container_LHasScrollSnap == true) {
            //                    console.log("BOOOOM L")
            container_L.classList.add("scroll_snap_type_y_mandatory");
            container_R.classList.remove("scroll_snap_type_y_mandatory");
            container_LHasScrollSnap = false;
            //                container_RHasScrollSnap = false
        }
    }
    isLeftSideScrolling = true;
}

document.querySelector(".container_right").addEventListener("scroll", listenR);

function listenR() {


    if (!isLeftSideScrolling) {
        container_L.scrollTop = this.scrollHeight - this.clientHeight - this.scrollTop;

        if (container_LHasScrollSnap == false) {
            //                    console.log("BOOOOM R");
            container_R.classList.add("scroll_snap_type_y_mandatory");
            container_L.classList.remove("scroll_snap_type_y_mandatory");
            //                container_RHasScrollSnap = true;
            container_LHasScrollSnap = true;
        }

    }
    isLeftSideScrolling = false;
}

/* carls kode */
let slideIndex = 0;

carousel()
setTimeout(loader, 4000);

function carousel() {
    let i;
    let x = document.querySelectorAll(".mySlides");


    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}

function loader() {
    console.log(loader);

    // document.querySelector(".").classList.remove("sort");
    document.querySelector(".baggrund").classList.add("fadeout");

    document.querySelector(".loader").classList.add("fadeout");
    //document.querySelector(".loader").classList.add("hide");
    document.querySelector(".baggrund").addEventListener("animationend", hidebaggrund);
}

function hidebaggrund() {
    document.querySelector(".loader").classList.add("hide");
}
/*carls kode slut*/


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
