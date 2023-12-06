wooden_axe.addEventListener("click", function () {
    if (oak_plank_counter.innerHTML > 2 && stick_counter.innerHTML > 1 && craft3 == true) {
        oak_plank_counter.innerHTML--;
        oak_plank_counter.innerHTML--;
        oak_plank_counter.innerHTML--;

        stick_counter.innerHTML--;
        stick_counter.innerHTML--;

        wooden_axe.classList.add("active");
    }
})

