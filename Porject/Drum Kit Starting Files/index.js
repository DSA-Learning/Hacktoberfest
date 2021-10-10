//This is a comment
var drums=document.querySelectorAll(".drum").length;

for(var i=0; i<drums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var character=this.innerHTML;
        switch(character){
            case 'w':var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
            case 'a':var audio = new Audio('sounds/kick-bass.mp3');
            audio.play()
            break;
            case 's':var audio = new Audio('sounds/snare.mp3');
            audio.play()
            break;
            case 'd':var audio = new Audio('sounds/tom-1.mp3');
            audio.play()
            break;
            case 'j':var audio = new Audio('sounds/tom-2.mp3');
            audio.play()
            break;
            case 'k':var audio = new Audio('sounds/tom-3.mp3');
            audio.play()
            break;
            case 'l':var audio = new Audio('sounds/tom-4.mp3');
            audio.play()
            break;
            default:console.log("nothing");
        }
        var activebutton=document.querySelector("."+character);
        activebutton.classList.add("pressed");
        setTimeout(function(){
            activebutton.classList.remove("pressed");
        },100);
    });
    
}

document.addEventListener("keypress",function(event){
    var key=event.key;
    switch(key){
        case 'w':var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
        case 'a':var audio = new Audio('sounds/kick-bass.mp3');
        audio.play()
        break;
        case 's':var audio = new Audio('sounds/snare.mp3');
        audio.play()
        break;
        case 'd':var audio = new Audio('sounds/tom-1.mp3');
        audio.play()
        break;
        case 'j':var audio = new Audio('sounds/tom-2.mp3');
        audio.play()
        break;
        case 'k':var audio = new Audio('sounds/tom-3.mp3');
        audio.play()
        break;
        case 'l':var audio = new Audio('sounds/tom-4.mp3');
        audio.play()
        break;
        default:console.log("nothing");
    }
    var activekey=document.querySelector("."+key);
        activekey.classList.add("pressed");
        setTimeout(function(){
            activekey.classList.remove("pressed");
        },100);
})