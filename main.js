window.addEventListener("keypress",(e) => {
    if (e.code == "KeyB") {
        playB();
    } else if (e.code == "KeyC") {
        playC();
    } else if (e.code == "KeyD") {
        playD();
    }  else if (e.code == "KeyE") {
        playE();
    }  else if (e.code == "KeyF") {
        playF();
    }  
});

let playB = () => new Audio("audio/B.mp3").play();
let playC = () => new Audio("audio/C.mp3").play();
let playD = () => new Audio("audio/D.mp3").play();
let playE = () => new Audio("audio/E.mp3").play();
let playF = () => new Audio("audio/F.mp3").play();