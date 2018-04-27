// var colors = ["rgb(255, 0, 0)","rgb(25, 20, 40)","rgb(25, 20, 220)","rgb(55, 20, 20)","rgb(5, 4, 3)","rgb(2, 224, 40)"]
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#msg");
var resetButton = document.querySelector('#reset');
var h1 = document.querySelector("h1");
resetButton.addEventListener("click", function() {
   colors = generateRandomColors(6)

   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   refresh()
   h1.style.backgroundColor = '#232323'
})



colorDisplay.textContent = pickedColor
function refresh() {
for(var i = 0; i<squares.length; i ++) {
  squares[i].style.backgroundColor = colors[i];

  //add click to squres
  squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
          resetButton.textContent = "Play Again?"
        messageDisplay.textContent = "Correct"
        changeColors(clickedColor)
        h1.style.backgroundColor = clickedColor;
      } else{
          this.style.backgroundColor ="#232323"
          messageDisplay.textContent = "TRY AGAIN"
      }
  })
}
}
refresh()
function changeColors(color) {
    for(var i = 0; i< squares.length ; i++) {
        squares[i].style.backgroundColor = color
    }
}
function pickColor() {
   var random = Math.floor(Math.random() * colors.length +1);
   return colors[random];
}
function generateRandomColors(num) {
//make an array; 
var arr = [];
for(var i = 0; i< num; i++) {
 arr.push(randomColor());
}

return arr; 
}
function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    
    return "rgb(" +red + ", " + green +", " + blue + ")";
}