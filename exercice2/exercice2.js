const quantityInput = document.getElementById('quantité');
const pluralText = document.getElementById('pluriel');
const totalText = document.getElementById('total');
const unitPriceText = document.getElementById('prixUnitaire');
const unitPrice = parseFloat(unitPriceText.textContent);

function adaptTotal() {
  const quantity = quantityInput.value;
  let total = unitPrice * quantity;
  totalText.textContent = total.toFixed(2);
  if (quantity > 1) {
    pluralText.textContent = 's';
  } else {
    pluralText.textContent = '';
  }
}

quantityInput.addEventListener('change', adaptTotal);
document.addEventListener('DOMContentLoaded', adaptTotal);
