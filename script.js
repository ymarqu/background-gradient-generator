let colorInput = document.querySelectorAll("input");
let body = document.querySelector("body");
let leftColor = document.querySelector(".color1");
let rightColor = document.querySelector(".color2");


function changeBackground(color, pos){
    if(pos === 'left'){
        body.style.backgroundImage = `linear-gradient(to right, ${color} , ${rightColor.innerHTML})`
        leftColor.innerHTML = color;
    }else{
        body.style.backgroundImage = `linear-gradient(to right, ${leftColor.innerHTML} , ${color})`
        rightColor.innerHTML = color;
    }

}

colorInput.forEach(color => {
    color.addEventListener('input', (e) => {
        let newColor = e.target.value
        let side = e.target.dataset.side
        changeBackground(newColor, side);
    })
})
