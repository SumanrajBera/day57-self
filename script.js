let form = document.querySelector("form")
const scroll = document.querySelector(".fillGrp")
const prevBtn = document.querySelector("#prev")
const nxtBtn = document.querySelector("#next")
let currentIndex = 0;


form.addEventListener("submit", function(e) {
    e.preventDefault()
})

function disableBtn() {
    if(currentIndex === 0) {
        prevBtn.disabled = true;
    }else if(currentIndex === 3) {
        nxtBtn.disabled = true
    }else {
        prevBtn.disabled = false;
        nxtBtn.disabled = false;
    }
}

nxtBtn.addEventListener("click", function() {
    if(currentIndex === 3) return
    currentIndex++;
    scroll.style.transform = `translateX(calc(-${(currentIndex)*100}% - ${(currentIndex)}rem))`
    disableBtn()
})

prevBtn.addEventListener("click", function() {
    if(currentIndex == 0) return
    currentIndex--;
    scroll.style.transform = `translateX(calc(-${currentIndex*100}% - ${currentIndex}rem))`
    disableBtn()
})

disableBtn()