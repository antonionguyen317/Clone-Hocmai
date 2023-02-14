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

const $inputName = document.getElementById('input-name');
const $inputEmail = document.getElementById('input-email');
const $inputPhoneNumber = document.getElementById('phone-number');
const $inputPassword = document.getElementById('input-password');
const $inputConfirmPassword = document.getElementById('input-confirm-password');
const $clickRegisterButton = document.getElementById('click-register-button');

const $errorInputName = document.getElementById('error-input-name');
const $errorInputEmail = document.getElementById('error-input-email');
const $errorInputPhone = document.getElementById('error-input-phone');
const $errorInputPassword = document.getElementById('error-input-password');
const $errorInputConfirmPassword = document.getElementById('error-input-confirm-password');

let $name = document.createElement('p');
let $email = document.createElement('p');
let $phone = document.createElement('p');
let $pass = document.createElement('p');
let $confirmPass = document.createElement('p');

$inputName.addEventListener('change',function(){
    $name.innerHTML = $inputName.value;
    if($name.innerHTML == ''){
        $errorInputName.innerHTML = 'Họ và tên không được để trống.';
    } else if ($name.innerHTML.length < 4){
        $errorInputName.innerHTML = 'Họ và tên phải có ít nhất 4 kí tự';
    } else if (
        !$name.innerHTML.includes(' ') ||
        $name.innerHTML.includes('0') ||
        $name.innerHTML.includes('1') ||
        $name.innerHTML.includes('2') ||
        $name.innerHTML.includes('3') ||
        $name.innerHTML.includes('4') ||
        $name.innerHTML.includes('5') ||
        $name.innerHTML.includes('6') ||
        $name.innerHTML.includes('7') ||
        $name.innerHTML.includes('8') ||
        $name.innerHTML.includes('9')
    ){
        $errorInputName.innerHTML = 'Họ và tên chỉ bao gồm chữ (viết hoa, viết thường) và có ít nhất hai từ tách biệt.';
    } else {
        $errorInputName.innerHTML = '';
    }
});

$inputEmail.addEventListener('change',function(){
    $email.innerHTML = $inputEmail.value;
    if($email.innerHTML == ''){
        $errorInputEmail.innerHTML = 'Email không được để trống.';
    } else if (
        !$email.innerHTML.includes('@gmail.com') &&
        !$email.innerHTML.includes('@yahoo.com')
    ){
        $errorInputEmail.innerHTML = 'Định dạng mail không hợp lệ.';
    } else {
        $errorInputEmail.innerHTML = '';
    }
});

$inputPhoneNumber.addEventListener('change',function(){
    $phone.innerHTML = $inputPhoneNumber.value;
    let temp = '';
    temp = $phone.innerHTML.substring(0,3);
    if($phone.innerHTML == ''){
        $errorInputPhone.innerHTML = 'Số điện thoại không được để trống.';
    } else if (
        $phone.innerHTML.length != 10 ||
        (temp != '086' &&
        temp != '096' &&
        temp != '097' &&
        temp != '098' &&
        temp != '032' &&
        temp != '033' &&
        temp != '034' &&
        temp != '035' &&
        temp != '036' &&
        temp != '037' &&
        temp != '038' &&
        temp != '039' &&
        temp != '088' &&
        temp != '091' &&
        temp != '094' &&
        temp != '083' &&
        temp != '084' &&
        temp != '085' &&
        temp != '081' &&
        temp != '082' &&
        temp != '089' &&
        temp != '090' &&
        temp != '093' &&
        temp != '070' &&
        temp != '079' &&
        temp != '077' &&
        temp != '076' &&
        temp != '078')

    ) {
        $errorInputPhone.innerHTML = 'Định dạng số điện thoại không hợp lệ.';
    } else {
        $errorInputPhone.innerHTML = '';
    }
});

$inputPassword.addEventListener('change',function(){
    $pass.innerHTML = $inputPassword.value;
    t = $inputPassword.value;
    if($pass.innerHTML == ''){
        $errorInputPassword.innerHTML = 'Mật khẩu không được để trống.';
    } else if( $pass.innerHTML.length < 8){
        $errorInputPassword.innerHTML = 'Mật khẩu phải có ít nhất 8 kí tự.';
    } else {
        $errorInputPassword.innerHTML = '';
    }
});

$inputConfirmPassword.addEventListener('change',function(){
    $confirmPass.innerHTML = $inputConfirmPassword.value;
    if($confirmPass.innerHTML != t){
        $errorInputConfirmPassword = 'Xác nhận mật khẩu không khớp. Vui lòng nhập lại.';
    } else {
        $errorInputConfirmPassword = '';
    }
});

$clickRegisterButton.addEventListener('click',function(){
    if(
        $name.innerHTML == '' ||
        $email.innerHTML == '' ||
        $phone.innerHTML == '' ||
        $pass.innerHTML == '' ||
        $confirmPass.innerHTML == ''
    ) {
        alert('Hãy nhập đầy đủ thông tin!');
    } else {
        let temp = true;
        for(const user of users){
            if(user.email == $email.innerHTML){
                temp = false;
                break;
            } else {
                temp = true;
            }
        }
        if(temp == false){
            alert('Email này đã tồn tại. Hãy nhập lại!');
        } else {
            users.push({
                full_name: $name.innerHTML,
                phone_number: $phone.innerHTML,
                email: $email.innerHTML,
                password: $pass.innerHTML,
                confirm_password: $confirmPass.innerHTML
            });
            console.log(users);
            alert('Đăng ký thành công!')
        }
    }
});
