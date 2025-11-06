import postInfoFromForm from "../services/login/form-login.js";

function main() {
    document.addEventListener('loginFormCreated', (e) => {
        postInfoFromForm(e.detail.form);
    })
    console.log("test");
}

main();

// Lỗi CSP ( Content Security Policy ): giới hạn nguồn tài nguyên truy cập 



