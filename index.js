var randomPattern=[];
var userPattern=[];
var col=["red","blue","yellow","green"];
var start=false;
var j=0;
var i=1;
$(document).keypress(function(){
    if(start==false)
    {
        start=true;
    nextSequence();
    }
});
function nextSequence(){
    var ran=Math.floor(Math.random()*4);
    var rcolor=col[ran];
    randomPattern.push(rcolor);
    $("#"+rcolor).fadeOut(200).fadeIn(200);
    playSound(rcolor);
    $("h1").text("Level "+i++);
}
$(".btn").on("click",function(){
    var userChosenColour=this.id;
    userPattern.push(userChosenColour)
    playSound(userChosenColour);
    animate(userChosenColour);
    checkAnswer(j++);
});
function playSound(name)
{
    var aud=new Audio("sounds/"+name+".mp3");
    aud.play();
}
function animate(name)
{
    $("#"+name).addClass("pressed");
    setTimeout(function(){
        $("#"+name).removeClass("pressed");
    },100);
}
function checkAnswer(ind){
  if(userPattern[ind]==randomPattern[ind])
  {
    if(ind+1==randomPattern.length)
    {
        userPattern=[];
        j=0;
        setTimeout(function()
        {
            nextSequence();
        },1000);
    }
  }
  else
  {
    $("body").addClass("game-over");
    var aa=new Audio("sounds/wrong.mp3");
    aa.play();
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}
function startOver(){
  i=1;
  start=false;
  j=0;
  randomPattern=[];
  userPattern=[];
}