function confirmFormsubmit() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var customertype = document.getElementById("customertype").value;
    var mathe = document.getElementById("mathe").value;
    var email = document.getElementById("email").value;
    var mahoadon = document.getElementById("mahoadon").value;
    var noidung = document.getElementById("noidung").value;

    var confirmMessage = "Thông tin góp ý:\n\nHọ và tên: " + name + "\nSố điện thoại: " + phone + "\nLoại khách hàng: " + customertype + "\nMã thẻ: " + mathe + "\nEmail: " + email + "\nMã hóa đơn: " + mahoadon + "\nNội dung: " + noidung;

    return confirm(confirmMessage);
}