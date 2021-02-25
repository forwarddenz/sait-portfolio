const inputName = document.querySelector('.form__inner-name');
      inputNameLength = document.querySelector('.form__lenght-name');
      innerEmail = document.querySelector('.form__inner-email');
      innerEmailLength = document.querySelector('.form__lenght-email');
      innerMessage = document.querySelector('.form__inner-message');
      innerMessageLength = document.querySelector('.form__lenght-message');

window.oninput = function() {
    inputNameLength.textContent = inputName.value.length + '/20';
    innerEmailLength.textContent = innerEmail.value.length + '/30';
    innerMessageLength.textContent = innerMessage.value.length + '/500';
}
