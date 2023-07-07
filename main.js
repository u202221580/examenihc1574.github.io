const banner = document.querySelector("#banner");

const seccion1 = document.querySelector("#seccion1");

const seccion2 = document.querySelector("#seccion2");

const seccion3 = document.querySelector("#seccion3");

const pie = document.querySelector("#pie");


banner.addEventListener("click", (i) => {
    i.preventDefault();

    const sectionI = document.querySelector(".banner");

    sectionI.scrollIntoView({behavior: "smooth"});

})

seccion1.addEventListener("click", (c) => {
    c.preventDefault();

    const sectionC = document.querySelector(".seccion1");

    sectionC.scrollIntoView({behavior: "smooth"});

})

seccion2.addEventListener("click", (c1) => {
    c1.preventDefault();

    const sectionC1 = document.querySelector(".seccion2");

    sectionC1.scrollIntoView({behavior: "smooth"});

})

seccion3.addEventListener("click", (c2) => {
    c2.preventDefault();

    const sectionC2 = document.querySelector(".seccion3");

    sectionC2.scrollIntoView({behavior: "smooth"});

})

pie.addEventListener("click", (c3) => {
    c3.preventDefault();

    const sectionC3 = document.querySelector(".pie");

    sectionC3.scrollIntoView({behavior: "smooth"});

})


$(document).ready(function(){
    $('#icon').click(function(){
        $('ul').toggleClass('show')
    })
})