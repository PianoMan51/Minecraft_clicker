furnace.addEventListener("click", function () {
    if (cobblestone_counter.innerHTML > 8 && furnace_counter.innerHTML < 1) {
        cobblestone_counter.innerHTML--;
        cobblestone_counter.innerHTML--;
        cobblestone_counter.innerHTML--;
        cobblestone_counter.innerHTML--;
        cobblestone_counter.innerHTML--;
        cobblestone_counter.innerHTML--;
        cobblestone_counter.innerHTML--;
        cobblestone_counter.innerHTML--;

        furnace_counter.innerHTML++;
        furnace_active = true;
    }
})

iron_ingot.addEventListener("click", function () {
    if (iron_ore_counter.innerHTML > 7 && furnace_active == true && coal_counter.innerHTML > 1) {
        iron_ore_counter.innerHTML--;
        iron_ore_counter.innerHTML--;
        iron_ore_counter.innerHTML--;
        iron_ore_counter.innerHTML--;
        iron_ore_counter.innerHTML--;
        iron_ore_counter.innerHTML--;
        iron_ore_counter.innerHTML--;
        iron_ore_counter.innerHTML--;

        coal_counter.innerHTML--;

        iron_ingot_counter.innerHTML++;
        iron_ingot_counter.innerHTML++;
        iron_ingot_counter.innerHTML++;
        iron_ingot_counter.innerHTML++;
        iron_ingot_counter.innerHTML++;
        iron_ingot_counter.innerHTML++;
        iron_ingot_counter.innerHTML++;
        iron_ingot_counter.innerHTML++;
    }
})


