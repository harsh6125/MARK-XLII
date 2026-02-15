console.log("Script loaded");

// Change heading
const title = document.querySelector("h1");
title.textContent = "ScholarLink Platform";

// Select the specific button
const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", function () {
  alert("Welcome to ScholarLink!");
});