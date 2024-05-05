let intro = document.getElementById('intro');
let experience = document.getElementById('experience');
let skill = document.getElementById('skill');
let contact = document.getElementById('contact');

let aHref = document.querySelectorAll('a');

let active = 'intro';
let zIndex = 2;

aHref.forEach(a => {
    a.addEventListener('click', function(event){
        let tab = a.dataset.tab;
        if(tab !== null && tab !== active){

            let activeOld = document.querySelector('.tab.active');
            if(activeOld) activeOld.classList.remove('active');
            active = tab;

            let tabActive = document.getElementById(active);
            zIndex++;
            tabActive.style.zIndex = zIndex;
            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            tabActive.classList.add('active');
        }
    })
})

const typedName = document.getElementById('typed-name');
const nameToType = 'Nguyễn Trọng Phúc'; // Replace with your desired name
let charIndex = 0;

function typeChar() {
  if (charIndex < nameToType.length) {
    typedName.textContent += nameToType[charIndex];
    charIndex++;
  } else {
    charIndex = 0;
    typedName.textContent = '';
  }
}

setInterval(typeChar, 80); // Adjust the typing speed here