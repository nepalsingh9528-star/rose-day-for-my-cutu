// Add 20 falling roses
for(let i=0; i<20; i++){
    let rose = document.createElement('div');
    rose.className = 'rose';
    rose.innerText = '🌹';
    rose.style.left = Math.random()*100 + 'vw';
    rose.style.animationDuration = 3 + Math.random()*5 + 's';
    document.body.appendChild(rose);
}

