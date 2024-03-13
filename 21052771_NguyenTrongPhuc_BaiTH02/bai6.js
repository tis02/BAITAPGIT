const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

   
    if (username === 'trongphuc' && password === 'depchaiso1') {
        confirm('Đăng nhập thành công')
        window.location.href = 'bai6.html';
    } else {
        
        alert('Tên đăng nhập hoặc mật khẩu không chính xác');
    }
});
