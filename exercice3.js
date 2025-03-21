const passwordInput = document.getElementById('password');
const strengthMeter = document.getElementById('passwordStrength');
const viewCheckBox = document.getElementById('view');
const weakPasswords = [
  '123456',
  '12345',
  '1234',
  'abc123',
  'abc',
  'pwd',
  'password',
  'mypassword',
  'dragon',
  'monkey',
  'shadow',
  'master',
  'superman',
  'spiderman',
];

function adaptMeter() {
  const password = passwordInput.value;
  if (weakPasswords.includes(password)) {
    strengthMeter.value = 1;
  } else {
    const passwordLength = password.length;
    strengthMeter.value = passwordLength;
  }
}

function adaptPasswordInput() {
  const viewChecked = viewCheckBox.checked;
  if (viewChecked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

passwordInput.addEventListener('input', adaptMeter);
viewCheckBox.addEventListener('change', adaptPasswordInput);
