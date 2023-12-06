let slot_counters = document.querySelectorAll(".icon label");
let items = document.querySelectorAll(".app .icon")
let inventory_slots = document.querySelectorAll("#inventory .slot");


let craft3 = false;


let oak_wood = document.getElementById("oak_wood");
let oak_plank = document.getElementById("oak_plank");
let stick = document.getElementById("stick");
let wooden_axe = document.getElementById("wooden_axe");
let wooden_pickaxe = document.getElementById("wooden_pickaxe");
let stone = document.getElementById("stone");
let cobblestone = document.getElementById("cobblestone");
let iron_ore = document.getElementById("iron_ore");
let iron_ingot = document.getElementById("iron_ingot");
let coal = document.getElementById("coal");

let crafting_table = document.getElementById("crafting_table");
let furnace = document.getElementById("furnace");


let oak_wood_counter = document.querySelector("#oak_wood .icon_count")
let oak_plank_counter = document.querySelector("#oak_plank .icon_count")
let stick_counter = document.querySelector("#stick .icon_count")
let crafting_table_counter = document.querySelector("#crafting_table .icon_count")
let furnace_counter = document.querySelector("#furnace .icon_count")
let stone_counter = document.querySelector("#stone .icon_count")
let cobblestone_counter = document.querySelector("#cobblestone .icon_count")
let iron_ore_counter = document.querySelector("#iron_ore .icon_count")
let iron_ingot_counter = document.querySelector("#iron_ingot .icon_count")
let coal_counter = document.querySelector("#coal .icon_count")


slot_counters.forEach(c => {
    c.innerHTML = 0;
    if (c.parentElement.classList.contains("tool")) {
        c.style.opacity = "0"
    }
});

items.forEach(item => {
    let id = item.id;
    item.style.backgroundImage = "url('pics/" + id + ".png')"
})




