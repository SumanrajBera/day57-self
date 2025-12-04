let form = document.querySelector("form")
const scroll = document.querySelector(".fillGrp")
const prevBtn = document.querySelector("#prev")
const nxtBtn = document.querySelector("#next")
const submitBtn = document.querySelector("#submit")
const formSlide = document.querySelectorAll(".step")
const wrapperFill = document.querySelector(".fillWrapper")

let currentIndex = 0;


form.addEventListener("submit", function (e) {
    e.preventDefault()
})

function handleTransition() {
    wrapperFill.style.height = formSlide[currentIndex].offsetHeight + "px"
    scroll.style.height = formSlide[currentIndex].offsetHeight + "px"
    setTimeout(() => {
        scroll.style.transform = `translateX(calc(-${(currentIndex) * 100}% - ${(currentIndex)}rem))`
    }, 350)
}

function disableBtn() {
    if (currentIndex === 0) {
        prevBtn.disabled = true;
    } else if (currentIndex === 3) {
        nxtBtn.disabled = true
    } else {
        prevBtn.disabled = false;
        nxtBtn.disabled = false;
    }

    if (currentIndex !== 3) {
        submitBtn.disabled = true
    } else {
        submitBtn.disabled = false
    }
}

function updateUI() {
    disableBtn();
    handleTransition();
}


nxtBtn.addEventListener("click", function () {
    if (currentIndex === 3) return
    currentIndex++;
    updateUI()
})

prevBtn.addEventListener("click", function () {
    if (currentIndex == 0) return
    currentIndex--;
    updateUI()
})

updateUI()