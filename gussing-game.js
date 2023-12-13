var lostNumber=0;
var winNumber=0;
for(var x=1;x<=6;x=x+1){
    var gussNumber=parseInt(prompt("enter the users gussnumber 1 to 6:"));
var randomNumber=Math.floor(Math.random()*6) +1;
if(gussNumber==randomNumber){
    document.write("you have won:"+gussNumber+"="+randomNumber+"<br>");
    winNumber++;}
    else{
    document.write("you have lost and my random number was:"+gussNumber+"!="+randomNumber+"<br>");
lostNumber++;
}
}
document.write("total win of number="+winNumber+"<br>");
document.write("total lost of number="+lostNumber+"<br>");

// var maximumWin=Math.max(winNumber,lostNumber);
// document.write(maximumWin);
if(winNumber>lostNumber){
    document.write("win the game ");
    
}
else {
    document.write("lost the game <br>");
}
document.write("thank you so much for  participate the game");