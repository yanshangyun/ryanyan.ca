//name change

function changeName(){
    var x = document.getElementById("name-change");
    if(x.innerHTML == "SHANGYUN"){
        x.innerHTML = "上耘";
    }
    else{
        x.innerHTML = "SHANGYUN";
    }
}

//bunny face change

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

//language change

// function changeCanada(){
//     var x = document.getElementById("canada");
//     if(x.innerHTML == "CANADA"){
//         x.innerHTML = "加拿大";
//     }
//     else{
//         x.innerHTML = "CANADA";
//     }
// }

// function changeDesign(){
//     var x = document.getElementById("design");
//     if(x.innerHTML == "DESIGN"){
//         x.innerHTML = "编码";
//     }
//     else{
//         x.innerHTML = "DESIGN";
//     }
// }

// function changeComputations(){
//     var x = document.getElementById("computations");
//     if(x.innerHTML == "COMPUTATIONS"){
//         x.innerHTML = "设计";
//     }
//     else{
//         x.innerHTML = "COMPUTATIONS";
//     }
// }

// function changeLinguistics(){
//     var x = document.getElementById("linguistics");
//     if(x.innerHTML == "LINGUISTICS"){
//         x.innerHTML = "语言学";
//     }
//     else{
//         x.innerHTML = "LINGUISTICS";
//     }
// }

//hire me

function hireMe(){
    var x = document.getElementById("hire");
    if(x.innerHTML == "???"){
        x.innerHTML = "HIRE ME! &#8599&#xFE0E";
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

//show extra

function showExtra(){
    var x = document.getElementById('extra');
    var y = document.getElementById('showPeople');
    if(x.style.display == 'none'){
        x.style.display = 'block';
        y.innerHTML = "(-)";
    }
    else{
        x.style.display = "none";
        y.innerHTML = "(+)";
    }
}

//resolution

function updateResolution() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    const resolutionElement = document.getElementById('resolution');
  
    resolutionElement.textContent = windowWidth + 'x' + windowHeight;
  }
  
  window.addEventListener('load', updateResolution);
  
  window.addEventListener('resize', updateResolution);
  