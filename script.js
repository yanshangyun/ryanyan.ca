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

//tooltip mouse follow

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.item').forEach(function(itemElem){
        itemElem.addEventListener('mousemove', function(e){
            var tooltip = this.querySelector('.tooltiptext');
            if (!tooltip) return; // Skip if there's no tooltip in this item

            var rect = this.getBoundingClientRect();

            var tooltipX = e.clientX - rect.left;
            var tooltipY = e.clientY - rect.top;

            var offsetX = 15;
            var offsetY = 15;

            tooltip.style.left = (tooltipX + offsetX) + 'px';
            tooltip.style.top = (tooltipY + offsetY) + 'px';
            tooltip.style.visibility = 'visible';
        });

        itemElem.addEventListener('mouseleave', function() {
            var tooltip = this.querySelector('.tooltiptext');
            if (tooltip) {
                tooltip.style.visibility = 'hidden';
            }
        });
    });
});

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

//dark light

function toggleMode() {

    var x = document.getElementById("toggleDark");
    if(x.innerHTML == "DARK MODE"){
        x.innerHTML = "LIGHT MODE";
    }
    else{
        x.innerHTML = "DARK MODE";
    }

    const root = document.documentElement;
    const currentMode = root.getAttribute('data-mode');

    const newMode = currentMode === 'light' ? 'dark' : 'light';
    root.setAttribute('data-mode', newMode);
    
    if (currentMode === 'light') {
        root.style.setProperty('--background-color', 'white');
        root.style.setProperty('--foreground-color', 'black');
        root.style.setProperty('--main-color', 'rgb(14, 92, 195)');
        root.setAttribute('data-mode', 'dark');
    }
    else {
        root.style.setProperty('--background-color', 'black');
        root.style.setProperty('--foreground-color', 'white');
        root.style.setProperty('--main-color', 'rgb(3, 194, 252)');
    }
}

//copy email

function copyEmail(){
    const email = document.getElementById("email");

    navigator.clipboard.writeText("hello@ryanyan.ca");
    email.innerHTML = "Copied!";

    setTimeout(() => {
        email.innerHTML = "Email";
    }, "1000");
}