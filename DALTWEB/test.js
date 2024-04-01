const header = document.querySelector('.menu');
const headerHeight = header.offsetHeight;

const scrollHandler = () => {
  if (window.scrollY >= headerHeight) {
    header.classList.add('is-sticky');
  } else {
    header.classList.remove('is-sticky');
  }
};

window.addEventListener('scroll', scrollHandler);
window.addEventListener('resize', () => {
  headerHeight = header.offsetHeight;
});

document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guests = document.getElementById('guests').value;

    

    // Hiển thị thông báo
    var message = document.getElementById('message');
    message.innerHTML = '<p>Cảm ơn bạn. Bạn đã đặt bàn thành công!</p>';
    message.style.color = 'green';
});
document.getElementById('submitButton').addEventListener('click', function(event) {
  event.preventDefault();

  // Validation and other reservation logic go here

  // Redirect to confirmation page
  window.location.href = 'thank.html';
});
