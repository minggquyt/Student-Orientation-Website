import postInfo from "../services/login/authenLogin.js";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";

function renderHeader(app) {
    const header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = Header();
    app.appendChild(header);
}

function renderBody(app) {
    const body = document.createElement("div");
    body.classList.add("body");
    app.appendChild(body);
}

function renderFooter(app) {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.innerHTML = Footer();
    app.appendChild(footer);
}

function renderApp(app) {
    renderHeader(app);
    renderBody(app);
    renderFooter(app);
}

function postInfoFromForm(formElement) {
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const inputInfo = {
            username: username,
            password: password
        }

        postInfo(inputInfo)
            .then((result) => {
                if (result.token) {
                    localStorage.setItem('token', result.token);

                    const event = new CustomEvent("LoginSucceed", {
                        detail: {
                            loginButton: document.querySelector('.header__navbar > button'),
                            settingButton: document.querySelector('.header__navbar > img'),
                            renderElement: 'body',
                            loginClass: '.login-container'
                        }
                    });
                    document.dispatchEvent(event);
                }
                else if (result.message == "User not found") {
                    alert("User not found !");
                }
                else
                    alert("Wrong pasword !");
            })
            .catch((error) => {
                console.log(`error: ${error}`);
            })
    });
}

function main() {

    const app = document.querySelector('.app');
    renderApp(app)

    document.addEventListener('loginFormCreated', (e) => {
        postInfoFromForm(e.detail.form);
    })


}

main();

// Công việc của ngày hôm nay:
// 3. Làm hiệu ứng carousel ở trang chủ  + merge code
// 4. Làm CRUD cho admin 
// 5. Deploy BE + fix bug liên quan 

// Lỗi 1: Khi gắn script để render bằng String -> trình duyệt sẽ không load script JS như việc trả về bằng file HTML 
// Lỗi 2: Khi import bằngJS module -> function chạy trong scope module của JS, không phải global scope của window
// -> JS khi load file bình thường -> không có module scope -> tự gắn vào windows
// -> JS khi load file với type="module" => chạy trong scope module riêng -> không gắn vào windows -> gạy ra lỗi khi gọi các hàm JS inline