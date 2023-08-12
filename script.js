function changeName(){
    var x = document.getElementById("name-change");
    if(x.innerHTML == "SHANGYUN"){
        x.innerHTML = "上耘";
    }
    else{
        x.innerHTML = "SHANGYUN";
    }
}

function changeFace(){
    var x = document.getElementById("face-change");
    if(x.innerHTML == "• - •"){
        x.innerHTML = "• ω •";
    }
    else if(x.innerHTML == "• ω •"){
        x.innerHTML = "´ ∀ `";
    }
    else if(x.innerHTML == "´ ∀ `"){
        x.innerHTML = "｡• ᵕ •｡";
    }
    else if(x.innerHTML == "｡• ᵕ •｡"){
        x.innerHTML = "◕‿◕";
    }
    else if(x.innerHTML == "◕‿◕"){
        x.innerHTML = "￣Д￣";
    }
    else if(x.innerHTML == "￣Д￣"){
        x.innerHTML = "???";
    }
    else{
        x.innerHTML = "• - •";
    }
}

function hireMe(){
    var x = document.getElementById("hire");
    if(x.innerHTML == "???"){
        x.innerHTML = "HIRE ME! &#8599";
    }
    else{
        x.innerHTML = "???";
    }
}

function resetHireMe(){
    var x = document.getElementById("hire");
    if(x.innerHTML !== "???"){
        x.innerHTML = "???";
    }
}

//user input text

function clearPlaceholder(element) {
    if (element.textContent.trim() === 'Click to type'){
      element.textContent = '';
    }
}