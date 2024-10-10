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
    document.querySelector(".game").appendChild(box);
}