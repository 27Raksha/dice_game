var random1= Math.floor(Math.random()*6)+1;
var newdice1="dice"+random1+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",newdice1);
var random2= Math.floor(Math.random()*6)+1;
var newdice2="dice"+random2+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",newdice2);
if(random1>random2){
    document.querySelector("h1").innerHTML("🚩Player 1 win!");
}
else if(random2>random1){
    document.querySelector("h1").innerHTML("Player 2 win! 🚩");
}
else{
    document.querySelector("h1").innerHTML("Draw!");
}
