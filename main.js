// var colors = ["rgb(255, 0, 0)","rgb(25, 20, 40)","rgb(25, 20, 220)","rgb(55, 20, 20)","rgb(5, 4, 3)","rgb(2, 224, 40)"]
var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#msg");
var resetButton = document.querySelector('#reset');
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector('#easy');
var hardBtn = document.querySelector('#hard');

easyBtn.addEventListener('click', function() {
  hardBtn.classList.remove('selected')
  easyBtn.classList.add("selected")
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor
  for(var i = 0 ; i<squares.length; i++) {
      if(colors[i]) {
          squares[i].style.backgroundColor = colors[i];
      }  else{
          squares[i].style.display = 'none'
      }
  }
})

hardBtn.addEventListener('click', function() {
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")
    numSquares = 6;
    colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
    for(var i = 0 ; i<squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'inline-block'
    }
    
}) 
resetButton.addEventListener("click", function() {
   colors = generateRandomColors(numSquares)

   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   messageDisplay.textContent = "";
   refresh()
   h1.style.backgroundColor = '#232323'
   this.textContent = 'New Colors';
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