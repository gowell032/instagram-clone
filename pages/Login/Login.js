const userId = document.getElementById('loginId');
const userPw = document.getElementById('loginPw');
const acctiveLoginBtn = document.getElementById('loginBtn');

userId.addEventListener('keyup', validate);
userPw.addEventListener('keyup', validate);

function validate() {
    userId.value && userPw.value.length >= 6 ?
        acctiveLoginBtn.style.backgroundColor = '#0195f6' : acctiveLoginBtn.style.backgroundColor = '#5fb5f8'
};

function checkIdPw() {
    userId.value.includes('@') && userPw.value.length >= 6 ? 
    window.location.href='http://127.0.0.1:5502/pages/Main/Main.html' : alert('아이디와 비밀번호를 확인해주세요');
};
