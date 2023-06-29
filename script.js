let colorInput = document.querySelectorAll("input");
let body = document.querySelector("body");
let leftColor = document.querySelector(".color1");
let rightColor = document.querySelector(".color2");
let btn = document.querySelector("button");

function getRandomColor(){
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;

}

//Changes the background color based on user input
function changeBackground(color,pos){
    console.log(pos)
    if(pos === 'left'){
        body.style.backgroundImage = `linear-gradient(to right, ${color} , ${rightColor.innerHTML})`
        leftColor.innerHTML = color;
    }else if(pos == 'right'){
        body.style.backgroundImage = `linear-gradient(to right, ${leftColor.innerHTML} , ${color})`
        rightColor.innerHTML = color;
    }else{
        body.style.backgroundImage = `linear-gradient(to right, ${color} , ${pos})`
        leftColor.innerHTML = color;
        rightColor.innerHTML = pos;
        colorInput[0].value = color;
        colorInput[1].value = pos;
    }

}

//color input event listener get user input color
colorInput.forEach(color => {
    color.addEventListener('input', (e) => {
        let newColor = e.target.value
        let side = e.target.dataset.side
        changeBackground(newColor, side);
    });
});

//Button eventlistener triggers getRandomColor function
btn.addEventListener('click', () => {
    let firstColor = getRandomColor();
    let secondColor = getRandomColor();
    changeBackground(firstColor, secondColor)
})
