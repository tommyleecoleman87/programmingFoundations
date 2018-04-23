function bingBong() {
    for(let i = 1; i <= 100; i++) {
        if(i % 5 === 0 && i % 3 === 0){
            disBB(`Bing Bong`);
        } else if(i % 5 === 0) {
            disBB(`Bong`);
        } else if(i % 3 === 0) {
            disBB(`Bing`);
        } else {
            disBB(i);
        }
    }
}


function disBB(arg) {
    let newEl = document.createElement('p');
    newEl.innerHTML = arg;
    document.getElementById('container').appendChild(newEl);
}