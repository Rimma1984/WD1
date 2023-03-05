document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.querySelectorAll("[data-popup]");
    for (let button of buttons) {
        button.addEventListener("click", function (event) {
            let popup = document.querySelector(this.dataset.popup);
            popup.style.display = "flex";
        });
    }

    let buttonsClose = document.querySelectorAll(".popup__close");
    for (let button of buttonsClose) {
        button.addEventListener("click", function (event) {
            let popup = this.closest(".popup");
            popup.style.display = "none";
        });
    }

    let popups = document.querySelectorAll(".popup");
    for (let popup of popups) {
        popup.addEventListener("click", function (event) {
            if (event.target == event.currentTarget
                // || event.target.matches('.popup__close')
                // || event.target.matches('.popup__close img')
            ) {
                popup.style.display = "none";
            }
        });
    }

    let burgerButton = document.querySelector(".header__burger");
    let menu = document.querySelector(".header__nav");

    burgerButton.addEventListener("click", function () {
        burgerButton.classList.toggle('header__burger_active');
        menu.classList.toggle('header__nav_active');
    }); 

    new Swiper('.swiper', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 34,
    });
        
});


