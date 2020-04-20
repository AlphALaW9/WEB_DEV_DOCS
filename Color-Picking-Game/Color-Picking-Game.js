var numsquares = 6;
var colors; 
var pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#msg");
var colordisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeSelectb = document.querySelectorAll(".modeSelectb")

init();

function init(){
   eventAdding(); 
   reset(numsquares);
   setsquare();
   colordisplay.textContent = pickedColor;
   resetButton.addEventListener("click",function(){
    reset(numsquares);

   })

}

function eventAdding(){
    for(var i = 0;i<modeSelectb.length;i++){
        modeSelectb[i].addEventListener("click",function(){
            modeSelectb[0].classList.remove("selectedmode");
            modeSelectb[1].classList.remove("selectedmode");
            this.classList.add("selectedmode");
            if(this.textContent === "Easy"){
                numsquares = 3;
            }
            else{
                numsquares= 6;
            }
            reset(numsquares);
       })
    }
}

function setsquare(){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.background;
            if(clickedColor === pickedColor){
                for(var i = 0; i < squares.length; i++){
                    messageDisplay.textContent = "Correct"
                    squares[i].style.background = pickedColor;
                    h1.style.background = pickedColor;
                    resetButton.textContent= "PLAY AGAIN"
                }
            }
            else{
                this.style.background = "rgb(255, 127, 80)";
                messageDisplay.textContent = "!!Pick the correct color!! "
            }
        })
    }
    
}

 function reset(x){
    colors = generateRandomColors(x);
    pickedColor = pickcolor();
    colordisplay.textContent = pickedColor;
    for(var i = 0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"; 
            squares[i].style.background = colors[i];
    }
            else{
        squares[i].style.display = "none";
        }
        resetButton.textContent= "NEW COLORS";     
    }
    h1.style.background = "rgb(70, 130, 180)";
    messageDisplay.textContent = "";
}

function pickcolor(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
}

function generateRandomColors(num){
     
    var arr = [];
    for(var i = 0; i< num; i++){
         arr.push(randomColor());
    }
    return arr;
}


function randomColor(){
 var r = Math.floor(Math.random() * 256);
 var g = Math.floor(Math.random() * 256);
 var b = Math.floor(Math.random() * 256);

 return "rgb(" + r + ", " + g + ", " + b +")";
}