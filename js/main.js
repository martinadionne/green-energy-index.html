// ev = event
/* global console */
var //3 buttons
    solar_btn, sun_btn, water_btn, paragraph, main_content, image, //contents
    content_box_1, content_box_2, content_box_3, masthead, slides, i, k, container;
var slides = [
    "<img src=\"./img/nature-1.jpg\" alt\"image of\"><p>Use Green energy to protect our environment</p>"
    , "<img src=\"./img/nature-2.jpg\" alt\"image of\"><p>Affordable green energy for your home</p>"
    , "<img src=\"./img/nature-3.jpg\" alt\"image of\"><p>Call us for a complimentary consulatation </p>"
    , "<img src=\"./img/nature-4.jpg\" alt\"image of\"><p>Protect the planet for future generations</p>"
];
masthead = document.querySelector(".mh-image");
i = 0;

function runSlides() {
    "use strict";
    if (i > 3) {
        i = 0;
    }
    masthead.innerHTML = slides[i];
    i = i + 1;
}
window.setInterval(runSlides, 6000);
contents = ['<div id="content-box-1"><img src ="./img/solar-panels.jpg">' +
                    '<p>Solar Panels are an affordable way to harness the sun’s energy to heat your home and water. An investment that will pay off over years. </p>' +
            '</div>'
            , '<div id="content-box-2"><img src = "./img/wind-generator.jpg">' +
                     '<p>A combination of harnassing wind and sun energy will give you maximum savings and are environmentaly friendly.</p></div>'
          , '<div id="content-box-3">  <img src = "./img/power-supply.jpg">' +
                    '<p>Let us show you how we can help you reduce your electricity bill using environmentally sustainable methods. Save money and the environment!  </p>' +
            '</div>'];
buttons = document.querySelectorAll("button");
// access icons and currently empty div 
solar_btn = document.querySelector("#solar_btn");
sun_btn = document.querySelector("#heat_btn");
water_btn = document.querySelector("#water_btn");
document.getElementById("main-container").innerHTML = contents[0];

function checkButton(ev) {
    "use strict";
    console.log("clicked happened id: ", ev);
    // console.log(ev.target.innerHTML); 
    var check = 0;
    if (ev === "solar_btn") {
        check = 0;
        //console.log (contents[0]);
    }
    if (ev === "heat_btn") {
        check = 1;
    }
    if (ev === "water_btn") {
        check = 2;
    }
    document.getElementById("main-container").innerHTML = contents[check];
}
for (i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", checkButton, false);
}