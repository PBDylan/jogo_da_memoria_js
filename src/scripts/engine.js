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

for(let i=0; i < emojis.length; i++)
{
    let box = document.createElement
    ("div");
    box.className = "item";
    box.innerHTML = shuffle_emojis[i];
    box.onclick = handle_click;
    document.querySelector(".game").appendChild(box);
}

function handle_click() {
    if(open_cards.length <2){
        this.class_list.add("box_open");
        open_cards.push(this);
    }
    if(open_cards.lenght == 2){
        setTimeout(check_math, 500);
    }
}

function check_math() {
    if(open_cards[0].innerHTML ===)
}