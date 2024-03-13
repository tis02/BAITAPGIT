function confirmSubmission()
        {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var subject = document.getElementById("subject").value;
            var message = document.getElementById("message").value;
            return confirm("Nhập họ và tên: " + name + "\nNhập e-mail: " + email + "\nNhập tiêu đề bài viết: " + subject + "\nNhập nội dung cần gửi: " + message);
            return false;
        }