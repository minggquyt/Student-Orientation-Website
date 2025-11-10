import postInfo from "../services/login/authenLogin.js";
import Homepage from "../pages/homepage/homepage.js";
import Header from "../components/login/header/header.js";
import Footer from "../components/footer/footer.js";
import CNOverview from "../pages/cn-overview/cn-overview.js";
import CVOverview from "../pages/cv-overview/cv-overview.js";
import DetailsMajor from "../pages/detail-cn/detail-cn.js";

function renderHeader(bodyElement){
    const header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = Header();
    bodyElement.appendChild(header);
}

function renderBody(bodyElement){
    const body = document.createElement("div");
    body.classList.add("body");
    body.innerHTML = Homepage();
    bodyElement.appendChild(body);
}   

function renderFooter(bodyElement){
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.innerHTML = Footer();
    bodyElement.appendChild(footer);
}

function renderApp(bodyElement){
    renderHeader(bodyElement);
    renderBody(bodyElement);
    renderFooter(bodyElement);
}

function postInfoFromForm(formElement){
    formElement.addEventListener('submit',(e) => {
        e.preventDefault();
        e.stopPropagation();
        const username = document.querySelector('input[name="username"]').value; 
        const password  = document.querySelector('input[name="password"]').value;
        const inputInfo = {
            username:  username,
            password: password
        }

        postInfo(inputInfo)
        .then((result) => {
            if(result.token){
                localStorage.setItem('token',result.token);
                
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
            else if(result.message == "User not found"){
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

function rerenderBody(renderFuncComponent){
    const rootElement = document.querySelector('.body');
    rootElement.innerHTML = renderFuncComponent();
}

function addEventNavMenu(navbar){

    const list = [Homepage,CNOverview,CVOverview,CNOverview];
    const navElements = navbar.children;
    for(let i = 0; i < 4; i++){
        navElements[i].addEventListener("click",(e) => {
            e.stopPropagation();
            e.preventDefault();
            rerenderBody(list[i]);
        })
    }
}

function addEventRenderMajorDetailPage(){
    const KTPM = document.querySelector("#KTPM");
    KTPM.addEventListener('click',(e) => {
        e.stopPropagation();
        e.preventDefault();
        rerenderBody(DetailsMajor);
    }) 
}

function addEventRenderJobDetailPage(){
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

    document.addEventListener("CNOverviewRendered",(e) => {
        e.stopPropagation();
        addEventRenderMajorDetailPage();
    })

    document.addEventListener("CVOverviewRendered",(e) => {
        e.stopPropagation();
        addEventRenderJobDetailPage();
    })

    const body = document.querySelector('body');
    renderApp(body);   

    const navbar = document.querySelector('.header > nav');
    addEventNavMenu(navbar);

    document.addEventListener('loginFormCreated', (e) => {
        postInfoFromForm(e.detail.form);
    })
}

main();

// 1. Làm tính năng client-side rendering cho web ( link đủ các trang theo yêu cầu )
// 2. Cấu hình lại các trang để tái sử dụng về nội dung 
// - MERGE lại code
// - Chỉnh sửa lại giao diện 
// - Cấu hình lại các trang để truyền data vào
// 3. Tạo file nội dung giả về truyền data vào các function 
// 4. Đưa data lên database 
// 5. Thực hiện tính năng CRUD cho admin thao tác trên nội dung của web 

// 10/11/2025
// 1. Ôn lại được sự khác nhau giữa callback của hàm event mặc định và event custom 