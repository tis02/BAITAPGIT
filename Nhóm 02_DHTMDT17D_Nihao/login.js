const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginBtn = document.querySelector('.loginBtn');


// Thêm sự kiện click vào nút đăng nhập
loginBtn.addEventListener('click', (e) => {
  // Ngăn việc chuyển hướng trang
  e.preventDefault();

  // Lấy giá trị của trường mật khẩu
  const password = document.querySelector('#loginForm input[type="password"]').value;

  // Kiểm tra xem password có được nhập hay không
  if (password.length === 0) {
    alert('Vui lòng nhập mật khẩu!');
    return;
  }

  // Tạo element div để hiển thị thông báo
  const successMessage = document.createElement('div');
  successMessage.classList.add('success-message'); // Thêm class cho div
  successMessage.innerHTML = 'Bạn đã đăng nhập thành công! <i class="bi bi-check-circle"></i>'; // Nội dung thông báo với icon

  
  // Hiển thị thông báo trên trang
  document.body.appendChild(successMessage);

  // Xóa thông báo sau 2 giây
  setTimeout(() => {
    document.body.removeChild(successMessage);
  }, 2000);

  // Xóa class 'active' khỏi wrapper (có thể dùng để ẩn form)
  wrapper.classList.remove('active');

  // Chuyển hướng đến Index.html sau 2 giây
  setTimeout(() => {
    window.location.href = 'Index.html'; // Thay thế bằng URL Index.html của bạn
  }, 2000);
});

// Thêm sự kiện click vào liên kết đăng ký (nếu có)
registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});