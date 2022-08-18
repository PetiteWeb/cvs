const clickableBlocks = document.querySelectorAll("[data-action]");
let popups = document.querySelectorAll(".popup");
clickableBlocks.forEach(el => {
    el.addEventListener("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        const action = this.getAttribute("data-action")
        showPopup(action, popups);
    })
});


popups.forEach(item => {
    item.querySelector(".popup-close").addEventListener("click", () => {
        item.parentElement.classList.remove("active");
        document.body.classList.remove("hidden");
        item.classList.remove("active");
    })
})
document.querySelector(".popup .upd").addEventListener("click", function (e) {
    e.preventDefault()
    this.classList.add("rotate")
    setTimeout(() => {
        this.classList.remove("rotate")
    }, 1000);
})