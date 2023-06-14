var hint_text = ["Delving into treacherous dungeons...", 
"Venturing into unexplored lands...", 
"Unraveling the secrets of a lost civilization..."];
var bg_url = ['./assets/images/tomas-honz-act1-finaldev.jpg',
'./assets/images/tomas-honz-act4-finaldamin.jpg',
'./assets/images/tomas-honz-act5-finaldamin.jpg',
]

const element = document.getElementById("hint-content"); 
var i = 0;
function changeText() {
    element.textContent = hint_text[i];
    document.body.style.backgroundImage = `url(${bg_url[i]})`;
    setTimeout(() => {
        i = (i + 1) % hint_text.length;
        changeText()
    }, 5000);
}

window.onload = function() {
    changeText();
}