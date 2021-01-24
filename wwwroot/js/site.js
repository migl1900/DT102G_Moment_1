// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
"use strict"

function changeColor(className) {
    var header = document.querySelectorAll("h1");

    for (var i = 0; i < header.length; i++) {
        header[i].className = "";
        header[i].classList.add("display-4", className);
    }
}
