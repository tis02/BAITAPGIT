const iconElement = document.querySelector('.bi-key-fill');
const inputElement = document.querySelector('#password');
iconElement .addEventListener('click', () => {
  if(confirm('Bạn muốn hiện mật khẩu không')){
    passwordInput.type='text';
  }else{
  }
});

