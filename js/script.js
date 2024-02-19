const menuBar = document.getElementById('menuBar');
const sideMenu = document.getElementById('menuOption');
const overLay = document.getElementById('overlay');
const menuItem = document.getElementById('menuOptionItem');

document.onclick = function(e){
    if(e.target.id === 'menuOptionItem' || e.target.id === 'overlay'){
        console.log('It works');
        menuBar.classList.remove('active');
        sideMenu.classList.remove('active');
        overLay.classList.remove('active');
    }
}
menuBar.onclick = function (){
    menuBar.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overLay.classList.toggle('active');
}