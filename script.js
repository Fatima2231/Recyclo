// Navigation
document.getElementById("btn-jouer").addEventListener("click", () => {
  window.location.href = "jeu.html";
});

document.getElementById("btn-apprendre").addEventListener("click", () => {
  window.location.href = "apprendre.html";
});

// Ouvre popup
document.getElementById("btn-quitter").addEventListener("click", () => {
  document.getElementById("quitModal").style.display = "flex";
});

// Étape 1 -> Étape 2
document.getElementById("btn-oui").addEventListener("click", () => {
  document.getElementById("confirmBox").style.display = "none";
  document.getElementById("goodbyeBox").style.display = "block";
});

// Fermer popup si "Continuer"
document.getElementById("btn-non").addEventListener("click", () => {
  document.getElementById("quitModal").style.display = "none";
});

// Fermer message final
document.getElementById("btn-retour").addEventListener("click", () => {
  document.getElementById("quitModal").style.display = "none";
  document.getElementById("confirmBox").style.display = "block";
  document.getElementById("goodbyeBox").style.display = "none";
});