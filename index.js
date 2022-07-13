var len=document.querySelectorAll(".drum").length;

for(var i=0;i<len;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
var button=this.innerHTML;
  sound(button);
  buttonAnimation(button);
})
}

document.addEventListener("keypress",function(event){
  var choose=event.key;
  sound(choose);
  buttonAnimation(choose);
})
function sound(key){
    switch(key){
        case "w":{
            var audio=new Audio("sounds/crash.mp3")
            audio.play();
            break;
        }
        case "a":{
            var audio=new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
        }
        case "s":{
            var audio=new Audio("sounds/snare.mp3")
            audio.play();
            break;
        }
        case "d":{
            var audio=new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        }
        case "j":{
            var audio=new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        }
        case "k":{
            var audio=new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        }
        case "l":{
            var audio=new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        }
    }
}
   
function buttonAnimation(key){
 var animation=document.querySelector("."+key)
 animation.classList.add("pressed");

 setTimeout(function(){
    animation.classList.remove("pressed");
 },100)

}
















// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();