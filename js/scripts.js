$(document).ready(function() {
    $('.hamburger-icon').click(function() {
        $('nav').toggleClass('active')})
    $('ul li').click(function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');})
    }
)
    