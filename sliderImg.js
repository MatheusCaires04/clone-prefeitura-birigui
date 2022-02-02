var sliderTotal = document.querySelectorAll('.slider--img').length
document.querySelector('.slider--width').style.width = `calc(100% * ${sliderTotal})`
var currentSlider = 0

function goPrev() {
    currentSlider--
    if (currentSlider < 0){
        currentSlider = sliderTotal - 1
    }

    updateMargin()
}

function goNext() {
    currentSlider++
    if (currentSlider > (sliderTotal - 1)){
        currentSlider = 0
    }

    updateMargin()
}

updateMargin = () => {
    var sliderImgWidth = document.querySelector('.slider--img').clientWidth
    var newMargin = (currentSlider * sliderImgWidth)
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext, 8000)
