const DECHETS = [
  {id:'d1', label:'Journaux', emoji:'📰', type:'paper'},
  {id:'d2', label:'Bouteille plastique', emoji:'🧴', type:'plastic'},
  {id:'d3', label:'Bocal verre', emoji:'🥫', type:'glass'},
  {id:'d4', label:'Pomme', emoji:'🍎', type:'compost'},
  {id:'d5', label:'Carton', emoji:'📦', type:'paper'},
  {id:'d6', label:'Canette', emoji:'🥤', type:'plastic'},
  {id:'d7', label:'Banane', emoji:'🍌', type:'compost'}
];

const MESSAGES = {
  correct: ["Bravo 🎉", "Excellent 🌟", "Génial 💚"],
  wrong: ["Oh non 😅", "Attention 🧐", "Essayer encore 🤔"]
};

let stars = 0;

function startGame(){
  document.getElementById('popupWin').style.display = "none";
  document.getElementById('middleButtons').style.display = "none";
  document.getElementById('recycloMessage').textContent = "Aide-moi à trier les déchets 🚮";
  document.getElementById('recyclo').src = "images/image1.png";
  
  const container = document.getElementById('dechetsContainer');
  container.innerHTML = "";

  // Choisir 4 déchets aléatoires
  const choix = [...DECHETS].sort(() => Math.random() - 0.5).slice(0,4);

  choix.forEach((d, i) => {
    const div = document.createElement('div');
    div.className = 'dechet';
    div.id = d.id;
    div.draggable = true;
    div.dataset.type = d.type;
    div.textContent = d.emoji;
    div.title = d.label;
    container.appendChild(div);

    // Animation apparition
    setTimeout(() => div.style.opacity = '1', i * 300);

    div.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', d.id);
      div.classList.add('hide');
    });

    div.addEventListener('dragend', () => {
      div.classList.remove('hide');
    });
  });
}

// Configuration poubelles
document.querySelectorAll('.bin').forEach(bin => {
  bin.addEventListener('dragover', e => e.preventDefault());
  
  bin.addEventListener('drop', e => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const dechet = document.getElementById(id);
    if(!dechet) return;

    if(dechet.dataset.type === bin.dataset.type){
      dechet.classList.add('correct');
      document.getElementById('recycloMessage').textContent = MESSAGES.correct[Math.floor(Math.random() * 3)];
      document.getElementById('recyclo').src = 'images/image2.png';
      setTimeout(() => {
        dechet.remove();
        if(document.getElementById('dechetsContainer').children.length === 0){
          document.getElementById('popupWin').style.display = "block";
          document.getElementById('middleButtons').style.display = "flex";
          addStar();
        }
      }, 600);
    } else {
      dechet.classList.add('wrong');
      document.getElementById('recycloMessage').textContent = MESSAGES.wrong[Math.floor(Math.random() * 3)];
      document.getElementById('recyclo').src = 'images/image3.png';
      setTimeout(() => dechet.classList.remove('wrong'), 400);
    }
  });
});

function addStar(){
  stars++;
  document.getElementById('starsBar').textContent = "⭐ " + stars;
}

// BOUTONS
document.getElementById('newGameBtn').addEventListener('click', startGame);

// BOUTON QUITTER MODIFIÉ - retour à la page d'accueil
document.getElementById('quitBtn').addEventListener('click', () => {
  
    window.location.href = 'index.html'; // Retour à la page d'accueil
  
});



// Démarrer le jeu
startGame();







