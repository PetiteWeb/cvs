const showPopup = function(action, blocks) {
    const wrapper = document.querySelector(".popup-wrapper")
    !wrapper.classList.contains("active") && wrapper.classList.add("active");
    !document.body.classList.contains("hidden") && document.body.classList.add("hidden");
    blocks.forEach(el => {
        const activeFlag = el.classList.contains("active");
        if (el.getAttribute("data-type") !== action) {
            activeFlag && el.classList.remove("active");
        } else {
            !activeFlag && el.classList.add("active");
        }
    })
}