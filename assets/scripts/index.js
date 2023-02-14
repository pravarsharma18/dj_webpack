import "./test1.js";
import "./test2.js";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

window.htmx = require("htmx.org");

window.addEventListener("load", () => {
  document.getElementById("message").textContent = "From Javascript";
});
