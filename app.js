const list          = document.getElementById('list');
const number        = document.querySelectorAll('.rating__item');
const submit        = document.getElementById('submit');
const raitingCard   = document.getElementById('raiting');

const thxCard   = document.getElementById('thx-card');
const newValor  = document.getElementById('new-valor');
const rateAgain = document.getElementById('rate-again');

number.forEach(e=>{
    e.addEventListener('click',(a)=>{
        removeRait()
        newValor.append(a.target.textContent);
    })
})
const removeRait =()=>{
    while(newValor.firstChild){
        newValor.removeChild(newValor.firstChild);
    }
}
const showCard =(e)=>{
    if(e.target === submit){
        thxCard.classList.remove('hidden')
        raitingCard.classList.add('hidden')
    }else{
        raitingCard.classList.remove('hidden')
        thxCard.classList.add('hidden')
    }
}

submit.addEventListener('click',showCard)
rateAgain.addEventListener('click',showCard)