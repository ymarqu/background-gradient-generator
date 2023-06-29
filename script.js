let colorInput = document.querySelectorAll("input");
let body = document.querySelector("body");
let leftColor = document.querySelector(".color1");
let rightColor = document.querySelector(".color2");
let btn = document.querySelector("button");
let directionInput = document.querySelector("#direction");

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
    if(pos === 'left'){
        body.style.backgroundImage = `linear-gradient(${direction}, ${color} , ${rightColor.innerHTML})`
        leftColor.innerHTML = color;
    }else if(pos == 'right'){
        body.style.backgroundImage = `linear-gradient(${direction}, ${leftColor.innerHTML} , ${color})`
        rightColor.innerHTML = color;
    }else{
        body.style.backgroundImage = `linear-gradient(${direction}, ${color} , ${pos})`
        leftColor.innerHTML = color;
        rightColor.innerHTML = pos;
        colorInput[0].value = color;
        colorInput[1].value = pos;
    }

}
function changeBackgroundDirection(direction){
    body.style.backgroundImage = `linear-gradient(${direction}, ${leftColor.innerHTML} , ${rightColor.innerHTML})`
}

//color input event listener get user input color
colorInput.forEach(color => {
    color.addEventListener('input', (e) => {
        let newColor = e.target.value
        let side = e.target.dataset.side
        changeBackgroundColor(newColor, side);
    });
});

//Button eventlistener triggers getRandomColor function
btn.addEventListener('click', () => {
    let firstColor = getRandomColor();
    let secondColor = getRandomColor();
    changeBackgroundColor(firstColor, secondColor)
})

//Event listener for gradient direction
directionInput.addEventListener('input', (e) => {
    let newDirection = directionInput.value;
    changeBackgroundDirection(newDirection)
})
