const nameInput = document.getElementById('name');

function firstLetterUpperCase() {
  const originalValue = this.value;
  if (originalValue.length > 0) {
    const firstLetter = originalValue[0];
    const firstLetterUpperCase = firstLetter.toUpperCase();
    let replacement = firstLetterUpperCase + originalValue.substring(1);
    this.value = replacement;
  }
}

nameInput.addEventListener('input', firstLetterUpperCase);
