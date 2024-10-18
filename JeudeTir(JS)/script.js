//selectionner les éléments html
let container = document.querySelector('.container')
let btn = document.querySelector('.start_btn')
let scoreContainer = document.querySelector('.score')
let timeContainer = document.querySelector('.time')

btn.onclick = function(){
    let score = 0;
    let time = 10;
    container.innerHTML="";

    let interval = setInterval(function showTarget(){
        //creation de la cible
        let target = document.createElement('img')
        target.id="target";
        target.src="silly.png"
        container.appendChild(target);
        target.style.top = Math.random() * (500 - target.offsetHeight) +'px'
        target.style.left = Math.random() * (600 - target.offsetWidth) +'px'

        //faire disparaitre la cible
        setTimeout(function(){
            target.remove();
        }, 2000)


        //quand on clique sur le target
        target.onclick = function(){
            score += 1;
            target.style.display = 'none';
        }
        time-=1;

        //afficher les infos
        scoreContainer.innerHTML = `Score : ${score}`
        timeContainer.innerHTML = `Temps : ${time}`

        //fin du jeu quand le temps est écoulé
        if(time==0){
            clearInterval(interval);
            container.innerHTML = "le jeu est terminé"
        }
    }, 1000);
}