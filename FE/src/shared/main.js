import postInfoFromForm from "../services/login/form-login.js";

function main() {
    document.addEventListener('loginFormCreated', (e) => {
        postInfoFromForm(e.detail.form);
    })
    console.log("test");
}

main();




