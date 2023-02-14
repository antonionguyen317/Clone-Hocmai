let users = [{
    "full_name": "Phạm Văn A",
    "phone_number": "0123456789",
    "email": "phamvana@gmail.com.vn",
    "password": "12345678",
    "confirm_password": "12345678"
}, {
    "full_name": "Phạm Văn B",
    "phone_number": "0123456789",
    "email": "phamvanb@gmail.com.vn",
    "password": "12345678",
    "confirm_password": "12345678"
}, {
    "full_name": "Phạm Văn C",
    "phone_number": "0123456789",
    "email": "phamvanc@gmail.com.vn",
    "password": "12345678",
    "confirm_password": "12345678"
}, {
    "full_name": "Phạm Văn D",
    "phone_number": "0123456789",
    "email": "phamvand@gmail.com.vn",
    "password": "12345678",
    "confirm_password": "12345678"
}, {
    "full_name": "Phạm Văn E",
    "phone_number": "0123456789",
    "email": "phamvane@gmail.com.vn",
    "password": "12345678",
    "confirm_password": "12345678"
}, {
    "full_name": "Phạm Văn F",
    "phone_number": "0123456789",
    "email": "phamvanf@gmail.com.vn",
    "password": "12345678",
    "confirm_password": "12345678"
}, {
    "full_name": "Phạm Văn G",
    "phone_number": "0123456789",
    "email": "phamvang@gmail.com.vn",
    "password": "12345678",
    "confirm_password": "12345678"
}, {
    "full_name": "Phạm Văn H",
    "phone_number": "0123456789",
    "email": "phamvanh@gmail.com.vn",
    "password": "12345678",
    "confirm_password": "12345678"
}, {
    "full_name": "Phạm Văn I",
    "phone_number": "0123456789",
    "email": "phamvani@gmail.com.vn",
    "password": "12345678",
    "confirm_password": "12345678"
}, {
    "full_name": "Phạm Văn J",
    "phone_number": "0123456789",
    "email": "phamvanj@gmail.com.vn",
    "password": "12345678",
    "confirm_password": "12345678"
}];

const $inputEmail = document.getElementById('input-email');
const $inputPassword = document.getElementById('input-password');
const $loginBtn = document.getElementById('login-btn');

let $email = document.createElement('p');
let $password = document.createElement('p');

$inputEmail.addEventListener('change',function(){
    $email.innerHTML = $inputEmail.value;
});

$inputPassword.addEventListener('change',function(){
    $password.innerHTML = $inputPassword.value;
});

$loginBtn.addEventListener('click',function(){
    if(
        $email.innerHTML == '' ||
        $password.innerHTML == ''
    ) {
        alert('Hãy nhập đầy đủ thông tin!');
    } else {
        let temp = false;
        for(const user of users){
            if(user.email == $email.innerHTML && user.password == $password.innerHTML){
                temp = true;
                break;
            } else {
                temp = false;
            }
        }
        if(temp == true){
            alert('Đăng nhập thành công!')
        } else {
            alert('Sai mật khẩu hoặc email. Hãy nhập lại!')
        }
    }
});