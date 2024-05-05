var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.right');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;
var autoChange;

function showGallery() {
    gallery.classList.add('show'); // Hiển thị gallery khi click vào hình ảnh

    if (currentIndex === 0) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
        if (currentIndex === images.length - 1) {
            next.classList.add('hide');
        } else {
            next.classList.remove('hide');
        }
    }

    updateImage();

clearInterval(autoChange);
autoChange = setInterval(nextImage, 4000); 
}


function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    } else {
        currentIndex = 0;
        showGallery();
    }
}

images.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        clearInterval(autoChange); 
        setTimeout(function() {
            autoChange = setInterval(nextImage, 3000); 
        }, 3000);
        currentIndex = index;
        showGallery();
        e.stopPropagation();
    });
});

function updateImage() {
    galleryImg.src = images[currentIndex].src;
}

images.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        currentIndex = index;
        showGallery();
        e.stopPropagation();
    });
});

close.addEventListener('click', function (e) {
    e.stopPropagation();
    gallery.classList.remove('show'); 
    currentIndex = 0;
});

prev.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
});


next.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    }
});
