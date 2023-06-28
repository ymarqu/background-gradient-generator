let firstColor = document.querySelector(".first-color");
let secondColor = document.querySelector(".second-color");
let body = document.querySelector("body");


function changeBackground(color, pos){
    if(pos === 'left'){
    body.style.backgroundImage = `linear-gradient(to right, ${color} , yellow)`
    }else{
        body.style.backgroundImage = `linear-gradient(to right, ${color} , yellow)`
    }
}



firstColor.addEventListener('input', (e) => {
    console.log(e.target.value);
    changeBackground(e.target.value);
})

secondColor.addEventListener('input', (e) => {

})
