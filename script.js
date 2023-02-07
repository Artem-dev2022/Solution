const validate = new window.JustValidate('#form');

validate
.addField('#email', [
    {
    rule: 'required',
    errorMessage: 'Вы не ввели email',
    },
    {
    rule: 'email',
    errorMessage: 'Вы ввели неверный email',
    },
])
.addField('#control', [
    {
    rule: 'required',
    errorMessage: 'Вы не ввели контрольное слово',
    },
    {
    validator: (value) => {
        if (value !== 'secret') {
            return false;
        }
        return true;
        
    },
    errorMessage: 'Неверное контрольное слово',
      },
])
.addField('#new-password', [
    {
    rule: 'required',
    errorMessage: 'Вы не ввели пароль',
    },
    {
    rule: 'minLength',
    value: 6,
    errorMessage: 'Пароль должен быть не менее 6 символов ',
    },
])
.addField('#confirm-password', [
    {
    rule: 'required',
    errorMessage: 'Вы не ввели пароль',
    },{
      validator: (value, fields) => {
        if (
          fields['#new-password'] &&
          fields['#new-password'].elem
        ) {
          const repeatPasswordValue =
            fields['#new-password'].elem.value;

          return value === repeatPasswordValue;
        }

        return true;
      },
        errorMessage: 'Пароли не совпадают',
    },
])

const btn = document.querySelector('.form__button');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    if (!validate.isValid) {
        body.style.backgroundColor = 'rgba(215, 250, 255, 1)';
    } else {
        body.style.backgroundColor = 'white';
    }
})

validate.onSuccess()

///// placeholders \\\\\
const Email = document.querySelectorAll('.form__input')[0];
const Control = document.querySelectorAll('.form__input')[1];
const NewPassword = document.querySelectorAll('.form__input')[2];
const ConfirmPassword = document.querySelectorAll('.form__input')[3];

const placeholderEmail = document.querySelectorAll('.form__placeholder')[0];
const placeholderControl = document.querySelectorAll('.form__placeholder')[1];
const placeholderNewPassword = document.querySelectorAll('.form__placeholder')[2];
const placeholderConfirmPassword = document.querySelectorAll('.form__placeholder')[3];

Email.addEventListener('focus', () => {
    placeholderEmail.classList.add('active');
})
Email.addEventListener('blur', () => {
    Email.value == '' ? placeholderEmail.classList.remove('active') : null;
})

Control.addEventListener('focus', () => {
    placeholderControl.classList.add('active');
})
Control.addEventListener('blur', () => {
    Control.value == '' ? placeholderControl.classList.remove('active') : null;
})

NewPassword.addEventListener('focus', () => {
    placeholderNewPassword.classList.add('active');
})
NewPassword.addEventListener('blur', () => {
    NewPassword.value == '' ? placeholderNewPassword.classList.remove('active') : null;
})

ConfirmPassword.addEventListener('focus', () => {
    placeholderConfirmPassword.classList.add('active');
})
ConfirmPassword.addEventListener('blur', () => {
    ConfirmPassword.value == '' ? placeholderConfirmPassword.classList.remove('active') : null;
})

///// eye \\\\\
const eye = document.querySelector('.eye');

eye.addEventListener('click', () => {
    if (NewPassword.type == 'text'){
        NewPassword.type = 'password';
    } else {
        NewPassword.type = 'text';
    }
})