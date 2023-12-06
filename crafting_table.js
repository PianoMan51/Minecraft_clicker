crafting_table.addEventListener("click", function () {
    if (oak_plank_counter.innerHTML > 3 && crafting_table_counter.innerHTML < 1) {
        crafting_table.classList.add("active");
        oak_plank_counter.innerHTML--;
        oak_plank_counter.innerHTML--;
        oak_plank_counter.innerHTML--;
        oak_plank_counter.innerHTML--;

        crafting_table_counter.innerHTML++;

        craft3 = true;
    }
})