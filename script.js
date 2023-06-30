let colorInput = document.querySelectorAll("input");
let body = document.querySelector("body");
let leftColor = document.querySelector(".color1");
let rightColor = document.querySelector(".color2");
let btn = document.querySelector("button");
let directionInput = document.querySelector("#direction");
let directionText = document.querySelector(".direction")

function getRandomColor(){
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;

}

//Changes the background color based on user input
function changeBackgroundColor(color,pos){
    let direction = directionInput.value;
    body.style.backgroundImage = `linear-gradient(${direction}, ${colorInput[0].value} , ${colorInput[1].value})`
    directionText.innerHTML = direction

}
function changeBackgroundDirection(){
    let direction = directionInput.value;
    body.style.backgroundImage = `linear-gradient(${direction}, ${leftColor.innerHTML} , ${rightColor.innerHTML})`
    directionText.innerHTML = direction;
}

//color input event listener get user input color
colorInput.forEach(color => {
    color.addEventListener('input', (e) => {
        changeBackgroundColor();
    });
});

//Button eventlistener triggers getRandomColor function
btn.addEventListener('click', () => {
    colorInput[0].value = getRandomColor();
    colorInput[1].value = getRandomColor();
    changeBackgroundColor()
})

//Event listener for gradient direction
directionInput.addEventListener('input', (e) => {
    changeBackgroundDirection()
})
