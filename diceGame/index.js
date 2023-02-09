var r1= Math.floor(Math.random()*6) + 1;

var randomImage1= "/images/dice" + r1 +".png";
var playerI= document.querySelectorAll("img")[0];
playerI.setAttribute("src",randomImage1);

var r2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "/images/dice"+r2+".png";
playerII = document.querySelectorAll("img")[1];
playerII.setAttribute("src",randomImage2); 


    if(r1>r2){
        document.querySelector("#winner").style.visibility='visible';
        document.querySelector("#winner").innerHTML="🚩Player 1 win🥳";
    }
    else if(r1<r2){
        document.querySelector("#winner").style.visibility='visible';
        document.querySelector("#winner").innerHTML="🚩Player 2 win🥳";
    }
    else{
        document.querySelector("#winner").style.visibility='visible';
        document.querySelector("#winner").innerHTML="Draw";
    }

 