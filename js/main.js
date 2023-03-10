let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
let textArea = document.querySelector('textarea');
let num = document.querySelector('.num');

if (localStorage.getItem('color')) {
    $('html').css('--main-color', JSON.parse(localStorage.getItem('color')))
}

$('.bars-icon').click(function() {
    $('.bars-icon').toggleClass('fa-solid fa-bars');
    $('.bars-icon').toggleClass('fa-solid fa-close');
    $('ul').toggleClass('active');
})

$('.main-h3').click(function() {
    $(this).parent().siblings().find('.secondary-para').slideUp(1000);
    $(this).next().slideToggle(1000);
})

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    
    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));

    let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));

    document.querySelector('.days').innerText = days < 10 ? `0${days}` : days;
    document.querySelector('.hours').innerText = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;

    if (days <= 0) {
        clearInterval(counter);
    }

}, 1000)

$(document).ready(function() {
    textArea.addEventListener('keyup', function() {
        num.innerText = 100 - textArea.value.length;
        if (num.innerText <= 0) {
            num.innerText = `your available character finished`;
        }
    })
})

$('.colorBx li').click(function() {
    $('html').css('--main-color', $(this).css('backgroundColor'));
    localStorage.setItem('color', JSON.stringify($('html').css('--main-color')));
});

$('.gearIcon').click(function() {
    $('.colorBx').toggleClass('active')
})