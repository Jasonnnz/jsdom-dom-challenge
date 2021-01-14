const minusBtn = document.querySelector('button#minus');
const plusBtn = document.querySelector('button#plus');
const timer = document.querySelector('h1#counter');
const likeBtn = document.querySelector('button#heart');
const pauseBtn = document.querySelector('button#pause');
const mainPage = document.body; 

let timesLiked = 0;
let paused = false;

setInterval(() => {
    increaseCounter();
}, 1000)

function increaseCounter() {
    if (!paused){
        timer.textContent = parseInt(timer.textContent) + 1;
    }
}


function pausedCounter(){
    paused = !paused;
    if (paused){
        minusBtn.disabled = true;
        plusBtn.disabled = true;
        likeBtn.disabled = true;
        pauseBtn.textContent = "resume";
    } else {
        minusBtn.disabled = false;
        plusBtn.disabled = false;
        likeBtn.disabled = false;
        pauseBtn.innerText = "pause";
    }
}

mainPage.addEventListener('click', function(e) {
    e.preventDefault();
    const btnClicked = e.target;
    const time = parseInt(timer.textContent); 
    const ul = document.querySelector('ul.likes');

    if (btnClicked === minusBtn) {
        timer.textContent = time-1;
    } else if (btnClicked === plusBtn) {
        timer.textContent = time+1;
    } else if (btnClicked === likeBtn) {  
        const li = document.createElement('li');
        li.textContent = `${time} Liked!`;
        ul.append(li);
    } else if (btnClicked === pauseBtn) {
        pausedCounter();
    } else if (btnClicked.matches('#submit')) {
        const form = document.querySelector('form#comment-form');
        const comment = document.querySelector('input[type="text"]');
        const h3 = document.querySelector('div#list');
        const li = document.createElement('li');
        li.textContent = comment.value;
        h3.append(li);
        form.reset();
        // comment.value = "";
    }

})
