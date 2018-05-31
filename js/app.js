document.addEventListener("DOMContentLoaded", function() {

// DROPDOWN MENU
    var listEl = [...document.querySelectorAll(".navbar>li>a")];
    var dropdownMenu = document.querySelector(".dropdown_menu");
    // console.log(listEl);
    // console.log(dropdownMenu);

    listEl[0].addEventListener("mouseover", function() {
        dropdownMenu.style.display = "block";
    });

    listEl[0].addEventListener("mouseout", function() {
        dropdownMenu.style.display = "none";
    });

// HIDE/SHOW BLOCK

    var boxes = [...document.querySelectorAll(".clair, .margarita")];
    // console.log(boxes);
    var shadow = [...document.querySelectorAll(".shadow")];
    // console.log(shadow);

    boxes.forEach(function(el, i) {
        el.addEventListener("mouseover", function() {
            shadow[i].style.display = "none";
        })
    });

    boxes.forEach(function(el, i) {
        el.addEventListener("mouseout", function() {
            shadow[i].style.display = "block";
        })
    });

// SLIDER
    var arrow = document.querySelectorAll(".arrow a");
    var next = arrow[1];
    var prev = arrow[0];
    // console.log(prev);
    var sliderElem = document.querySelectorAll(".slider li");
    var index = 0;

    sliderElem[index].classList.add("visible");

    next.addEventListener("click", function() {
        if (index >= 2) {
            sliderElem[index].classList.remove("visible");
            index = 0;
            sliderElem[index].classList.add("visible");
        } else if (index <= 2) {
            sliderElem[index].classList.remove("visible");
            index++;
            sliderElem[index].classList.add("visible");
        }
    });

    prev.addEventListener("click", function() {
        if (index <= 0) {
            sliderElem[index].classList.remove("visible");
            index = 2;
            sliderElem[index].classList.add("visible");
        } else if (index <= 2) {
            sliderElem[index].classList.remove("visible");
            index--;
            sliderElem[index].classList.add("visible");
        }
    });

// KALKULATOR

    var listArrow = [...document.querySelectorAll(".list_arrow")];
    // console.log(listArrow);
    var listPanel = document.querySelectorAll(".list_panel");

    listArrow.forEach(function(el, i) {

        el.addEventListener("click", function() {
            if (listPanel[i].style.display != "block") {
                listPanel[i].style.display = "block";
            } else if (listPanel[i].style.display = "block") {
                listPanel[i].style.display = "none";
            }
        });
    });


    var options = [...document.querySelectorAll(".list_panel")];
    // console.log(options);
    var type = [...options[0].children];
    // console.log(type);
    var colors = [...options[1].children];
    // console.log(colors);
    var patterns = [...options[2].children];
    // console.log(patterns);
    var transportCheckbox = document.querySelector("#transport");
    // console.log(transportCheckbox);

    var listLabel = [...document.querySelectorAll(".list_label")];
    var title = document.querySelector(".panel_left h4");
    var titleValue = document.querySelector(".panel_right h4");
    var color = document.querySelector(".panel_left .color");
    var colorValue = document.querySelector(".panel_right .color_value");
    var pattern = document.querySelector(".panel_left .pattern");
    var patternValue = document.querySelector(".panel_right .pattern_value");
    var transport = document.querySelector(".transport");
    var transportValue = document.querySelector(".panel_right .transport_value");


    function price() {
        var sum = document.querySelector(".sum");
        var titleNumb = Number(titleValue.innerText);
        var colorNumb = Number(colorValue.innerText);
        var patternNumb = Number(patternValue.innerText);
        var transportNumb = Number(transportValue.innerText);
        sum.innerText = titleNumb + colorNumb + patternNumb + transportNumb;
    }

    type.forEach(function(li) {
        li.addEventListener("click", function() {
            title.innerText = li.innerText;
            li.parentElement.style.display = "none";
            listLabel[0].innerText = li.innerText;
            listLabel[0].style.color = "#000000";
            if (li.innerText === "Clair") {
                titleValue.innerText = 600;
                price();
            }
            if (li.innerText === "Margarita") {
                titleValue.innerText = 800;
                price();
            }
            if (li.innerText === "Selena") {
                titleValue.innerText = 1000;
                price();
            }
        })
    });

    colors.forEach(function(li) {
        li.addEventListener("click", function() {
            color.innerText = li.innerText;
            li.parentElement.style.display = "none";
            listLabel[1].innerText = li.innerText;
            listLabel[1].style.color = "#000000";
            colorValue.innerText = 0;
            price();
        })
    });

    patterns.forEach(function(li) {
        li.addEventListener("click", function() {
            pattern.innerText = li.innerText;
            li.parentElement.style.display = "none";
            listLabel[2].innerText = li.innerText;
            listLabel[2].style.color = "#000000";
            if (li.innerText === "Tkanina") {
                patternValue.innerText = 200;
                price();
            }
            if (li.innerText === "Skóra") {
                patternValue.innerText = 500;
                price();
            }
        })
    });

    transportCheckbox.addEventListener("change", function() {
        if (transportCheckbox.checked === true) {
            transport.innerText = "Transport";
            transportCheckbox.nextElementSibling.style.color = "#000000";
            transportValue.innerText = 100;
            price();
        } else if (transportCheckbox.checked === false) {
            transport.innerText = "";
            transportCheckbox.nextElementSibling.style = "none";
            transportValue.innerText = "";
            price();
        }
    });




// CHECKBOX

    var checkbox = document.querySelector(".form_checkbox div");
    var input = document.querySelector(".form_checkbox input");
    // console.log(checkbox);

    checkbox.addEventListener("click", function() {
        // if (input.checked) {
        //     input.checked = false;
        // } else {
        //     input.checked = true;
        // }
        input.checked = !input.checked;
    });

});
