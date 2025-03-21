let elementMonImage = document.getElementById('monImage');

function changeImage() {
  // Détecter l'image courante
  let srcCourante = this.src;
  if (srcCourante.endsWith('img2.png')) {
    // Modifier la source de l'image
    this.src = 'exo1-img1.png';
  } else {
    // Modifier la source de l'image
    this.src = 'exo1-img2.png';
  }
}

// Observer l'évènement
elementMonImage.addEventListener('click', changeImage);
