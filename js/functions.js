const showPopup = function(action, blocks) {
    if (!document.body.classList.contains("hidden")) {
        document.body.classList.add("hidden");
    }
    blocks.forEach(el => {
        const activeFlag = el.classList.contains("active");
        if (el.getAttribute("data-type") !== action) {
            activeFlag && el.classList.remove("active");
        } else {
            !activeFlag && el.classList.add("active");
            el.style.top = (innerHeight - el.offsetHeight) / 2 + "px";
            el.style.left = (innerWidth - el.offsetWidth) / 2 + "px";
        }
    })
}