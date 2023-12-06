stone.addEventListener("click", function () {
    items.forEach(item => {
        if (item.classList.contains("pick") && item.classList.contains("active")) {
            cobblestone_counter.innerHTML++;
        }
    })
})

iron_ore.addEventListener("click", function () {
    items.forEach(item => {
        if (item.classList.contains("pick") && item.classList.contains("active")) {
            iron_ore_counter.innerHTML++;
        }
    })
})

coal_ore.addEventListener("click", function () {
    items.forEach(item => {
        if (item.classList.contains("pick") && item.classList.contains("active")) {
            coal_counter.innerHTML++;
        }
    })
})