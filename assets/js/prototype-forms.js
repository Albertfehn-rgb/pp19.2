"use strict";
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("form[data-prototype-form=\"true\"]").forEach((form) => {
    form.addEventListener("submit", (event) => event.preventDefault());
  });
});
