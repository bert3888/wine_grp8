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
document.querySelector(".container_right").scrollTop = (document.querySelector(".container_right").scrollHeight - document.querySelector(".container_right").clientHeight) - document.querySelector(".container_right").scrollTop;



document.querySelector(".container_left").addEventListener("scroll", listenL);

function listenL() {
    console.log("scrollTop: " + this.scrollTop);
    console.log("clientHeight: " + this.clientHeight);
    console.log("scrollHeight: " + this.scrollHeight);

    console.log("***********************************");

    document.querySelector(".container_right").scrollTop = (this.scrollHeight - this.clientHeight) - document.querySelector(".container_left").scrollTop;

}

document.querySelector(".container_right").addEventListener("scroll", listenR);

function listenR() {
    //        console.log("scrollTop: "+this.scrollTop);
    //        console.log("clientHeight: "+this.clientHeight);
    //        console.log("scrollHeight: "+this.scrollHeight);
    //
    //        console.log("***********************************");

    document.querySelector(".container_left").scrollTop = (this.scrollHeight - this.clientHeight) - document.querySelector(".container_right").scrollTop;

}
