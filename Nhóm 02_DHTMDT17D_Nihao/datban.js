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
  // scroll thì đổi màu
    window.onscroll = function() {
        var header = document.getElementById("menu1");
        if (window.pageYOffset > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }};

        $(document).ready(function() {
          $(window).scroll(function() {
              if($(this).scrollTop() > 100) {
                  $('.menu1').css('background-color', 'white');
                  $('.menu a').css('color', 'red');
                  $('.bi-person-circle').css('color', 'red');

              } else {
                  $('.menu1').css('background-color', '');//có thể thêm tranferrency
                  $('.menu a').css('color', 'white');
                  $('.bi-person-circle').css('color', 'white');
              }
          });
      });


      $(document).ready(function() {
        $(".logo img").attr("src", "images/logo1-removebg-preview.png");
      
        var headerHeight = $("#menu1").outerHeight();
      
        function isScrolled() {
          if ($(window).scrollTop() > headerHeight) {
            $("#menu1").addClass("scrolled");
          } else {
            $("#menu1").removeClass("scrolled");
          }
        }
        isScrolled();
        $(window).scroll(function() {
          isScrolled();
        });
      });
//xuất ra sheets
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwR6a8GRyxszekq-ndiLhxC-X7VRYfegv3MNQCQvuUo4Txem2KlXqCjUni8b57Wgm85/exec'

const form = document.forms['contact-form']
const nameInput = form['your-name']
const phoneInput = form['your-phone']
const emailInput = form['your-email']
form.addEventListener('submit', e => {
  e.preventDefault()
 // báo lỗi khi không nhập tên
  if (!validateName(nameInput.value)) {
    Swal.fire({
      icon: "error",
      title: "Lỗi",
      text: "Vui lòng nhập tên",
    });
    return;
  }
  // báo lỗi khi nhập số
  if (!validatePhone(phoneInput.value)) {
    Swal.fire({
      icon: "error",
      title: "Lỗi",
      text: "Vui lòng nhập đúng định dạng số điện thoại",
    });
    return;
  }
  if (!validateEmail(emailInput.value)) {
    Swal.fire({
      icon: "error",
      title: "Lỗi",
      text: "Vui lòng nhập email",
    });
    return;
  }
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    // Your validation code here
    Swal.fire({
        title: 'Xác nhận thành công',
        text: 'Nihao restaurant cảm ơn quý khách!!',
        icon: 'success'
      }).then(() => {
        const form = document.querySelector('form');
        form.reset();
      });
    })
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))

  })

function validateName(name) {
  return name.length > 0;
}
function validatePhone(phone) {
  const regex = /^\d{10}$/;
  return regex.test(phone);
}
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
