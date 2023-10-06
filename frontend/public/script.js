const loadText = document.querySelector('.loading-text');
const backg = document.querySelector('.bg');

let int = setInterval(blurring, 30);

var load = 0;
function blurring() {
    backg.style.filter = ('blur(' + (((100 - load) * 70) / 100) + 'px)');
    load++;
    loadText.innerHTML = load + "%";
    loadText.style.opacity=scale(load,0,100,1,0);
    if (load > 99) {
        clearInterval(int);
    }
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
} 
