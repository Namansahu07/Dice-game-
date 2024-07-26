//For First number
var randomnumber1= Math.floor(Math.random()*6)+1;//Genrating any number between 1 and 6 
var randonmdiceimage="dice" +randomnumber1 + ".png";
var randomimagesource="images/" + randonmdiceimage; //Adding images with random number genrated by replacing the number which is between 1 to 6 by adding random number isntead 123456
var image1 = document.querySelectorAll("img")[0];//choosing the first img tag in html which is at index 0 
image1.setAttribute("src", randomimagesource); //setting the attiributes with random number genrated 
//For Second number 
var randomnumber2= Math.floor(Math.random()*6)+1;
 var randomimagesource2="images/dice" + randomnumber2 + ".png";
 var image2 = document.querySelectorAll("img")[1]
 image2.setAttribute("src",randomimagesource2);
 //For the headline 
if (randomnumber1>randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!!" ;
} 
else if(randomnumber2>randomnumber1) {
    document.querySelector("h1").innerHTML = "🚩Player2 Wins!!" ;
}
else {
    document.querySelector("h1").innerHTML = "Draw🤪" ;
}