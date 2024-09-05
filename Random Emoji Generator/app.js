const btn = document.querySelector('#emoji');
const emojis = 
    [
        "👌",
        "🤷‍♂️",
        "😎",
        "🤣",
        "😢",
        "😒",
        "😁",
        "😃",
        "🫥",
        "😶",
        "😪",
        "🙄",
    ];

    btn.addEventListener('mousemove', () => {
        btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    })