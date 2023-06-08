var random1= Math.floor(Math.random()*6)+1;
var newdice1="dice"+random1+".png";
var newimage1="images/"+newdice1;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",newimage1);
var random2= Math.floor(Math.random()*6)+1;
var newdice2="dice"+random2+".png";
var newimage2="images/"+newdice2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",newimage2);
if(random1>random2){
    document.querySelector("h1").innerHTML("🚩Player 1 win!");
}
else if(random2>random1){
    document.querySelector("h1").innerHTML("Player 2 win! 🚩");
}
else{
    document.querySelector("h1").innerHTML("Draw!");
}