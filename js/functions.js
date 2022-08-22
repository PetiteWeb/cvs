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

const sortData = function(sort, type, lines) {
    blocks = Array.from(lines)
    if (type === "up") {
        blocks.sort((a,b) => {
            let d1 = a.querySelector(`[data-type="${sort}"]`).textContent;
            let d2 = b.querySelector(`[data-type="${sort}"]`).textContent;
            if (!isNaN(d1-d2)) {
                return d1 - d2
            } else if (d1 > d2) {
                return 1;
            } else {
                return -1;
            }
        })
    } else {
        blocks.sort((a,b) => {
            let d1 = b.querySelector(`[data-type="${sort}"]`).textContent;
            let d2 = a.querySelector(`[data-type="${sort}"]`).textContent;
            if (!isNaN(d1-d2)) {
                return d1 - d2
            } else if (d1 > d2) {
                return 1;
            } else {
                return -1;
            }
        })
    }
    const parent = blocks[0].parentElement
    parent.innerHTML = "";
    blocks.forEach(b => {
        parent.append(b);
    })

}