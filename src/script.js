const dropdown = document.getElementById("terminal-dropdown");
const trigger = document.getElementById("dropdown-trigger");

trigger.addEventListener("click", function (event) {
    event.preventDefault();

    const isOpen = dropdown.classList.toggle("show");

    trigger.setAttribute("aria-expanded", isOpen);
});

window.addEventListener("click", function (event) {

    if (
        !trigger.contains(event.target) &&
        !dropdown.contains(event.target)
    ) {
        dropdown.classList.remove("show");
        trigger.setAttribute("aria-expanded", "false");
    }

});