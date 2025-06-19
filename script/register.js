let usernameInput = document.querySelector("#usernameInput");
let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let confirmPasswordInput = document.querySelector("#confirmPasswordInput");
let form = document.querySelector("form");

form.onsubmit = function (event) {
  event.preventDefault();
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let usernameRegex = /^(?=.*[A-Z])(?=.*[a-z]).{5,}$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/;

  if (
    !usernameInput.value ||
    !emailInput.value ||
    !passwordInput.value ||
    !confirmPasswordInput.value
  ) {
    alert("Vui Lòng Nhập Đầy Đủ Thông Tin!");
    return;
  }

  if (!usernameRegex.test(usernameInput.value)) {
    alert("Vui Lòng Nhập Đúng Yêu Cầu!");
    return;
  }

  if (!emailRegex.test(emailInput.value)) {
    alert("Vui Lòng Nhập Tên Đúng Định Dạng Email!");
    return;
  }

  if (!passwordRegex.test(passwordInput.value)) {
    alert('Vui Lòng Nhập Mật Khẩu Gồm Số, Kí Tự Đặc Biệt Và Có Chữ In Hoa Và Thường!')
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Hai Mật Khẩu Không Giống Nhau!");
    return;
  }

  // Lấy Dữ Liệu Từ Local Storage
  let accounts = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];

  // Đưa Dữ Liệu Mới Vào
  accounts.push({
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  });

  //  Đẩy Dữ Liệu Mới Vào Local Storage
  localStorage.setItem("accounts", JSON.stringify(accounts));
  alert("Đăng Ký Thành Công!");
  //  Di Chuyển Tới Trang Main
  window.location.href = "./signIn.html";
};
