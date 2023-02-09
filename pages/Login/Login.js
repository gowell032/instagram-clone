const inputId = document.getElementById('userId'); //@가 포함 되어 있는지
const inputPw = document.getElementById('userPw'); // 패스워드가 6글자 이상인지
const acctiveLoginBtn = document.getElementById('loginBtn'); // 위에 값을 충족시 버튼 색 변경

function checkIdPw() {
    inputId.value.includes('@') && inputPw.value.length >= 6 ? 
    window.location.href='http://127.0.0.1:5500/pages/Main/Main.html' : alert('아이디와 비밀번호를 확인해주세요');
    }