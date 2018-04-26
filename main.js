var color = ["rgb(255, 0, 0)","rgb(25, 20, 40)","rgb(25, 20, 220)","rgb(55, 20, 20)","rgb(5, 4, 3)","rgb(2, 224, 40)"]
var squares = document.querySelectorAll(".squares");

for(var i = 0; i<squares.length; i ++) {
  squares[i].style.backgroundColor = color[i];
}