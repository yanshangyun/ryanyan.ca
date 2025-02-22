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
        root.style.setProperty('--bar', 'rgb(234, 234, 234)');
        root.setAttribute('data-mode', 'dark');
    }
    else {
        root.style.setProperty('--background-color', 'black');
        root.style.setProperty('--foreground-color', 'white');
        root.style.setProperty('--bar', 'rgb(56, 56, 56');
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

//duplicate marquee content
document.addEventListener("DOMContentLoaded", function() {
    const marquee = document.querySelector('.marquee-content');
    if (marquee) {
        marquee.innerHTML += marquee.innerHTML; // Duplicate the content
    }
});

//page transition
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("transition-overlay");

    setTimeout(() => {
        overlay.classList.add("hidden");
    }, 300);

    //internal links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", event => {
            if (link.href.startsWith(window.location.origin)) {
                event.preventDefault();
                overlay.classList.remove("hidden");
                overlay.classList.add("active");
                setTimeout(() => {
                    window.location.href = link.href;
                }, 500);
            }
        });
    });

    //back-forward
    history.pushState({page: 'current'}, '');

    window.addEventListener("popstate", (event) => {
        overlay.classList.remove("hidden");
        overlay.classList.add("active");
        
        setTimeout(() => {
            history.back();
        }, 500);
    });
});

//particles
const characters = [
    '✽', '✾', '✿', '❀', '❁', '❃', '❊', '❋', '✣', '✤', '■', '□', '▪', '▫', '◼', '◻', '●', '○', '◉', '◌', '◎', '◍', '◕', '◖', '◗', '◆', '◇', '◈', '◊', '⬟', '⬠', '⬢', '⬣', '⬤', '⬥', '★', '☆', '✦', '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '☼', '☽', '☾', '✶', '✷', '✹', '✺', '✻', '❂', '❖', '⌘', '☙', '⚘', '❧', '❦', '⚜', '✵', '✴', '✳', '✵', '❂', '❖', '❊', '⭑', '⭒', '⭓', '⬮', '⬯', '◐', '◑', '◒', '◓', '♠', '♣', '♥', '♦', '❥', '❣', '✿', '✽', '✾', '❋', '⚝', '⚞', '⚟', '⧫', '⬠', '⬢', '⬥', '❉', '❆', '❄', '⛆', '☁', '☂', '☃', '⚘', '⯀', '⌖', '⌑', '⌕', '✶', '✷', '✸', '✹', '✺', '✻', '✼', '❈', '❇', '❋', '❊', '❅', '❆', '❄'
];
let lastParticleTime = 0;
const particleInterval = 30;

const colors = ['rgb(17, 179, 17)','rgb(69, 189, 208)','rgb(85, 148, 255)','rgb(168, 137, 255)','red','orange','rgb(255, 225, 0)','rgb(197, 246, 83)'];

let colorIndex = 0;

document.addEventListener('mousemove', (e) => {
    const currentTime = Date.now();

    if(currentTime - lastParticleTime >= particleInterval){
        //new particle
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        //follow cursor location
        particle.style.left = `${e.pageX}px`;
        particle.style.top = `${e.pageY}px`;

        //randomize text content
        particle.textContent = characters[Math.floor(Math.random() * characters.length)]; //choose random
        particle.style.fontSize = `${Math.random() * 10 + 5}px`;

        //color in order
        const particleColor = colors[colorIndex];
        particle.style.color = particleColor;
        particle.style.textShadow = `0 0 2px ${particleColor}`;

        //increment color index
        colorIndex = (colorIndex + 1) % colors.length;

        //rotate
        particle.style.setProperty('--rotate', `${Math.random() * 360 - 180}deg`);

        //delete particle
        setTimeout(() => {
            particle.remove();
            particle.style.textShadow = 'none';
        }, 1500); // Match the animation duration in CSS

        lastParticleTime = currentTime;
    }
});

//text appear
let colorIndex1 = 0;

document.addEventListener('DOMContentLoaded', () => {
    const startDelay = 700; //delay

    document.querySelectorAll('.project-desc').forEach(element => {
        let totalChars = 0;
        function countCharacters(node) {
            node.childNodes.forEach(child => {
                if (child.nodeType === Node.TEXT_NODE) {
                    totalChars += child.textContent.length;
                }
                else {
                    countCharacters(child);
                }
            });
        }
    
        countCharacters(element);

        if (totalChars === 0) return;

        const delayPerChar = 0.2;
        let charIndex = 0; //global counter for this element

        function wrapTextNodes(node) {
            const children = Array.from(node.childNodes);
            children.forEach(child => {
                if (child.nodeType === Node.TEXT_NODE) {
                    const text = child.textContent;
                    const fragment = document.createDocumentFragment();

                for (let i = 0; i < text.length; i++) {
                    const span = document.createElement('span');
                    span.textContent = text[i];

                    span.style.opacity = '0';
                    span.style.transition = 'opacity 0.5s cubic-bezier(.33,0,.2,1), color 1s cubic-bezier(.33,0,.2,1)';

                    span.style.transitionDelay = `${charIndex * delayPerChar}ms`;

                    const revealColor = colors[colorIndex1];
                    span.style.color = revealColor;
                    colorIndex1 = (colorIndex1 + 1) % colors.length;

                    setTimeout(() => {
                        if (span.closest('a')) {
                            span.style.color = '';
                        } else {
                            span.style.color = 'black';
                        }
                    }, startDelay + charIndex * delayPerChar);

                    fragment.appendChild(span);
                    charIndex++;
                }

                child.parentNode.replaceChild(fragment, child);
                }
                else if (child.nodeType === Node.ELEMENT_NODE) {
                    wrapTextNodes(child);   //recursively process element nodes.
                }
            });
        }
        wrapTextNodes(element);

        setTimeout(() => {
            element.querySelectorAll('span').forEach(span => {
                span.style.opacity = '1';
            });
        }, startDelay);
    });
});