// Lấy input

let usernameInput = document.querySelector("#usernameInput");
let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let form = document.querySelector("form");

// Sự Kiện Click Vào Submit

form.onsubmit = function(event) {

    // Câu Lệnh Không Cho Load Lại Khi Ấn

    event.preventDefault();

    // Kiểm Tra Input Người Dùng Nhập Vào

        // Lấy Ra Dữ Liệu Từ Local Storage
    
    let accountsStr = localStorage.getItem("accounts");
    let accounts = JSON.parse(accountsStr);

        // Thêm Biến isLoginSuccess để kiểm tra có đăng nhập thành công không
    let isLoginSuccess = false;

        // Kiểm Tra Có Khớp Với Lại Dữ Liệu Không

    for (let i in accounts) {
        if (usernameInput.value == accounts[i].username && passwordInput.value == accounts[i].password) {
            isLoginSuccess = true;
        }

    };

    console.log(isLoginSuccess)
    if (isLoginSuccess) {
        alert("Thành Công!");
    
        // Di Chuyển Sang Trang Main
        window.location.href = "./Main.html"
    } else {
        alert("Vui Lòng Kiểm Tra Lại Tài Khoản!");
    }

}