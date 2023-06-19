var menuItems = ['New Game', 'Continue', 'Multiplayer','Settings','Extras']

const elem = document.getElementById('mainMenu')
let menuString = "<div></div>"
for (let i = 0; i < menuItems.length; i++) {
    menuString += `<div class="menu-item">${menuItems[i]}</div>` ;
    
}

elem.innerHTML = menuString;