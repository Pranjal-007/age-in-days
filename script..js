"use strict";
// let ageInDays = (2021 - birtheYear) * 365;

// let birtheYear = prompt("what year you were born?");
document.querySelector(".primary").addEventListener("click", function () {
  let birtheYear = prompt("What Year You were Born? GOOD FRIEND 👦");
  const ageInDays = (2021 - birtheYear) * 365;

  document.querySelector(
    ".result"
  ).textContent = `you are  ${ageInDays} days old!!`;
  document.querySelector(".result").style.backgroundColor = " #00FF00";
  if (!birtheYear) {
    document.querySelector(".result").textContent =
      "PLEASE INPUT A CORRECT Number ❌";
    document.querySelector(".result").style.backgroundColor = " #ff0000";
  } else if (birtheYear > 2021) {
    document.querySelector(".result").textContent = "IT'S OUT OF 2021 ❌";
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".result").textContent = "WANT TO PLAY AGAIN? 💇‍♂️";
  document.querySelector(".result").style.backgroundColor = "#1F51FF";
});
