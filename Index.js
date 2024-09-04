
document.querySelector(".btn").addEventListener("click", dice_game);
var name1 = prompt("type your name: ");
var name2 = prompt("type your friend's name: ");

document.querySelector(".left").innerHTML = name1 ;
document.querySelector(".right").innerHTML = name2 ;

function dice_game(){
  var count1 = (Math.floor((Math.random())*6) + 1 );
  var diseImage1 = "Images/" + count1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", diseImage1 );

  var count2 = (Math.floor((Math.random())*6) + 1 );
  var diseImage2 = "Images/" + count2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", diseImage2 );

  if (count1 === count2){
      document.querySelector(".nothing").innerHTML = "<h1>Match Draw</h1>";
      document.querySelector(".left_color").style.backgroundColor = "#3c5c54";
      document.querySelector(".right_color").style.backgroundColor = "#3c5c54";
  }else if(count1 > count2){
      document.querySelector(".nothing").innerHTML = "<h1>Player " + name1 + " Won</h1>";
      document.querySelector(".left_color").style.backgroundColor = "#3c5c54";
      document.querySelector(".right_color").style.backgroundColor = "#dac5bc";
  }else{
      document.querySelector(".nothing").innerHTML = "<h1>Player " + name2 + " Won</h1>";
      document.querySelector(".left_color").style.backgroundColor = "#dac5bc";
      document.querySelector(".right_color").style.backgroundColor = "#3c5c54";
  }
}
