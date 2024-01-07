const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.elements.email.value = localStorage.getItem(localStorageKey.email) ?? '';
form.elements.message.value =
  localStorage.getItem(localStorageKey.message) ?? '';

form.addEventListener('input', evt => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const { email, message } = evt.target;
  const trimmedMail = email.value.trim();
  const trimmedMessage = message.value.trim();
  const formData = {
    email: trimmedMail,
    message: trimmedMessage,
  };

  if (trimmedMail === '' || trimmedMessage === '') {
    return alert('Please, fill in all fields!');
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
