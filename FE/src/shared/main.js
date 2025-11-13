import postInfo from "../services/login/authenLogin.js";
import Homepage from "../pages/homepage/homepage.js";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import CNOverview from "../pages/cn-overview/cn-overview.js";
import CVOverview from "../pages/cv-overview/cv-overview.js";
import DetailsMajor from "../pages/detail-cn/detail-cn.js";

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

function rerenderBody(renderFuncComponent) {
    const rootElement = document.querySelector('.body');
    rootElement.innerHTML = renderFuncComponent();
}

function addEventRenderMajorDetailPage() {
    const KTPM = document.querySelector("#KTPM");
    KTPM.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        rerenderBody(DetailsMajor);
    })
}

function addEventRenderJobDetailPage() {
    const jobs = document.querySelectorAll(".section4__group--logo");
    jobs.forEach((job) => {
        job.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            rerenderBody(DetailsMajor);
        })
    })
}

function main() {

    const app = document.querySelector('.app');
    renderApp(app)

    document.addEventListener('loginFormCreated', (e) => {
        postInfoFromForm(e.detail.form);
    })


}

main();



