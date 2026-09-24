"use strict";
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-select").forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.dataset.product || "Produkt";
      alert(`${name}: Der sichere Checkout wird erst mit dem Backend aktiviert.`);
    });
  });
});
