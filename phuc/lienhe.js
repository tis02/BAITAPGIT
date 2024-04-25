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
              } else {
                  $('.menu1').css('background-color', '');//có thể thêm tranferrency
                  $('.menu a').css('color', 'white');
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
const scriptURL = 'https://script.google.com/macros/s/AKfycbzMtJKG4nTmMs0dlPkgZvYmJ4CWa0e7P9T3ol83lT7318uZvlLm5PD75E8ntf5AAsvlWA/exec'

const form = document.forms['form-lh']

form.addEventListener('submit', e => {
 e.preventDefault()
 const formData = new FormData(form)
 if (formData.get('name') === '' || formData.get('email') === '' || formData.get('message') === '') {
     alert('Vui lòng điền đủ thông tin!')
     return
 }
 const phone = formData.get('your-number')
 const phoneRegex = /^0\d{9}$/
 if (!phoneRegex.test(phone)) {
     alert('Vui lòng nhập đúng số điện thoại! Số điện thoại phải có 10 chữ số và bắt đầu bằng số 0.')
     return
 }
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Cảm ơn bạn đã phản hồi với chúng tôi!" ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
