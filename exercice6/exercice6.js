const supplementsRadioList = document.querySelectorAll(
  'input[name=supplement]',
);

const avecSupplementRadio = document.getElementById('supplement-avec');

function traiterChangementSupplements() {
  if (avecSupplementRadio.checked) {
    const divList = document.querySelectorAll('.type-supplement');
    divList.forEach((element) => {
      element.style.display = 'block';
    });
  } else {
    const divList = document.querySelectorAll('.type-supplement');
    divList.forEach((element) => {
      element.style.display = 'none';
    });
  }
}

supplementsRadioList.forEach((element) => {
  element.addEventListener('change', traiterChangementSupplements);
});

const formulaire = document.querySelector('form');

function calculerPrix() {
  const pizzaSelect = document.getElementById('pizza');
  const pizzaPrice = parseFloat(pizzaSelect.value);
  let supplementPrice = 0;
  if (avecSupplementRadio.checked) {
    const supplementTypeCheckboxList = document.querySelectorAll(
      'input[name=type-supplement]',
    );
    supplementTypeCheckboxList.forEach((element) => {
      if (element.checked) {
        supplementPrice += 0.5;
      }
    });
  }
  let paymentPrice = 0;
  const visaPaymentRadio = document.getElementById('payement-visa');
  if (visaPaymentRadio.checked) {
    paymentPrice += 2;
  }
  const total = pizzaPrice + supplementPrice + paymentPrice;
  let totalSpan = document.getElementById('total');
  totalSpan.textContent = total.toFixed(2);
}

formulaire.addEventListener('change', calculerPrix);
calculerPrix();
