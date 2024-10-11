const emojis = [
    "🤞",
    "🤞",
    "👀",
    "👀",
    "🎶",
    "🎶",
    "🤠",
    "🤠",
    "🏎",
    "🏎",
    "⚽",
    "⚽",
];

let open_cards = [];

let shuffle_emojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

for(let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffle_emojis[i];
    box.onclick = handle_click;
    document.querySelector(".game").appendChild(box);
}

function handle_click() {
    if(open_cards.length < 2) {
        this.classList.add("box_open");
        open_cards.push(this);
    }
    if(open_cards.length == 2) {
        setTimeout(check_match, 500); // Renomear para check_match
    }
}

function check_match() { // Renomear para check_match
    if(open_cards[0].innerHTML === open_cards[1].innerHTML) {
        open_cards[0].classList.add("box_match");
        open_cards[1].classList.add("box_match");
    } else {
        open_cards[0].classList.remove("box_open");
        open_cards[1].classList.remove("box_open");
    }

    open_cards = [];

    if(document.querySelectorAll(".box_match").lenght === emojis.length){
        alert("Você venceu !")
    }
}
