window.addEventListener("DOMContentLoaded", () => {
    const loaderBg = document.querySelector(".loader_bg"),
        sidebarCollapse = document.querySelector(".sidebarCollapse"),
        sidebar = document.querySelector(".sidebar"),
        closeBtn = document.querySelector(".sidebar .arrow i"),
        tabs = document.querySelectorAll(".product_buying1 .nav .tab"),
        tabContents = document.querySelectorAll(".product_buying1 .tab_content");

    setTimeout(function() {
        loaderBg.style.display = "none";
    }, 1500);
    (function() {
        sidebarCollapse.addEventListener("click", () => {
            sidebar.classList.add("active");
        });
        closeBtn.addEventListener("click", () => {
            sidebar.classList.remove("active");
        });
    })();

    function tabFunc() {
        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                tabContents.forEach((item) => {
                    item.style.display = "none";
                });
                tabContents[index].style.display = "block";
            });
        });
    }
    tabFunc();

    // Slider
    const slides = document.querySelectorAll("#myCarousel .slide"),
        btns = document.querySelectorAll(".slide_btn button");
    let point = 0;

    function slider() {
        for (let i = 0; i < slides.length; i++) {
            if (i != 0) {
                slides[i].style.display = "none";
                btns[0].classList.add("active");
            }
        }
        btns.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                slides.forEach((slide, index) => {
                    slide.style.display = "none";
                    btns[index].classList.remove("active");
                });
                slides[index].style.display = "flex";
                btns[index].classList.add("active");
                point = index;
            });
        });
    }
    slider();
    setInterval(() => {
        point++;
        slides.forEach((slide, index) => {
            slide.style.display = "none";
            btns[index].classList.remove("active");
        });
        if (point > slides.length - 1) {
            point = 0;
            slides[point].style.display = "flex";
            btns[point].classList.add("active");
        } else {
            slides[point].style.display = "flex";
            btns[point].classList.add("active");
        }
    }, 3000);
});