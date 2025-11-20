import Login from "../components/login/login.js";
import MenuBar from "../components/menubar/menubar.js";

function addEffectLogin(triggerElement, renderElement, loginFunction) {
    const triggerE = document.querySelector(triggerElement);
    const renderE = document.querySelector(renderElement);

    triggerE.addEventListener('click', (e) => {
        e.stopPropagation();
        const div = document.createElement('div');
        div.classList.add("login-container")
        div.innerHTML += loginFunction();
        renderE.append(div);
        addSmokeEffect(renderE);
        removeEffectLogin(renderElement, '.login-container');
        const event = new CustomEvent('loginFormCreated', {
            detail: {
                form: document.querySelector('.login-box__input > form')
            }
        });
        document.dispatchEvent(event);

    });

}

function removeEffectLogin(renderElement, loginClass) {
    const renderE = document.querySelector(renderElement);

    const removeBox = (e) => {
        const loginBox = document.querySelector(loginClass);

        if (loginBox.contains(e.target) == false) {
            loginBox.remove();
            renderE.removeEventListener('click', removeBox);
            removeSmokeEffect(renderE);
        }
    }

    renderE.addEventListener('click', removeBox);
}

function addSmokeEffect(element) {
    element.classList.add('smoke-effect');
}

function removeSmokeEffect(element) {
    element.classList.remove('smoke-effect');
}

function createEffectLogin(triggerElement, renderElement, loginFunction) {
    addEffectLogin(triggerElement, renderElement, loginFunction);
}

function handleEventLoginSucceed(settingButton, loginButton) {
    settingButton.classList.remove('unactive');
    settingButton.classList.add("active");
    loginButton.classList.remove("active");
    loginButton.classList.add('unactive');
}

function addEffectButtonHompage() {
    window.addEventListener('load', (e) => {
        const buttons = document.querySelectorAll('.section2__selection-ch');
        const image = document.querySelectorAll('.section2__selection-ch > img');
        const desc = document.querySelectorAll('.section2__selection-ch--desc');

        buttons.forEach((button, index) => {
            button.addEventListener('mouseenter', (e) => {
                e.stopPropagation();
                desc[index].style.opacity = 1;
            })
            button.addEventListener("mouseleave", (e) => {
                e.stopPropagation();
                desc[index].style.opacity = 0;
            })
        })
    })
}

function switchLangEffect() {
    const currentLang = localStorage.getItem("currentLang") || "VN";
    const switchButton = document.querySelector(".language");

    // logic render button 
    const img = document.createElement("img");
    img.width = 48
    img.height = 29
    if (currentLang == 'VN') {
        console.log("render ra thành công ")
        img.src = '/FE/assets/images/header/vn.png';
        switchButton.replaceChild(img, switchButton.childNodes[0]);
        switchButton.childNodes[1].nodeValue = 'VN';
    }
    else {
        img.src = '/FE/assets/images/header/en.jpg';
        switchButton.replaceChild(img, switchButton.childNodes[0]);
        switchButton.childNodes[1].nodeValue = 'EN';
    }

    // onclick logic
    switchButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.currentTarget.childNodes[1].nodeValue == 'VN') {
            img.src = '/FE/assets/images/header/en.jpg';
            e.currentTarget.replaceChild(img, e.currentTarget.childNodes[0]);
            e.currentTarget.childNodes[1].nodeValue = 'EN';
        }
        else {
            img.src = '/FE/assets/images/header/vn.png';
            e.currentTarget.replaceChild(img, e.currentTarget.childNodes[0]);
            e.currentTarget.childNodes[1].nodeValue = 'VN';
        }

        // logic lưu vào local storage 
        localStorage.setItem("currentLang",e.currentTarget.childNodes[1].nodeValue);

        // Dispatch event để render lại trang 
        const event = new CustomEvent("switchEffectActive");
        document.dispatchEvent(event);
    })
}

function menuBarEffect() {
    const menuIcon = document.querySelector('.header__menu-bar');
    menuIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();

        const body = document.querySelector("body");
        const divMenuEffect = document.createElement('div');
        divMenuEffect.classList.add("menu-effect");
        divMenuEffect.innerHTML += MenuBar();
        body.appendChild(divMenuEffect);

        const closeIcon = document.querySelector('.menu_title--close');
        closeIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            body.removeChild(divMenuEffect);
        })

        document.querySelector('.fade_container').addEventListener('click', (e) => {
            e.stopPropagation();
            body.removeChild(divMenuEffect);
        })

        const elements = document.querySelectorAll('.menu_list > a');
        elements.forEach((element) => {
            element.addEventListener("click", () => {
                e.stopPropagation();
                body.removeChild(divMenuEffect);
            })
        })
    })
}

function main() {
    createEffectLogin('.header__navbar > button', 'body', Login);

    document.addEventListener("LoginSucceed", (e) => {
        handleEventLoginSucceed(e.detail.settingButton, e.detail.loginButton);
        removeEffectLogin(e.detail.renderElement, e.detail.loginClass);
    });

    addEffectButtonHompage();

    switchLangEffect();


    menuBarEffect();
}

main();

export default function effectFlipCard() {
    const allBoxes = document.querySelectorAll('.box-content');

    allBoxes.forEach(function (box) {

        box.addEventListener('click', function () {

            const cardContainer = box.querySelector('.card-container');

            if (cardContainer) {
                cardContainer.classList.toggle('is-flipped');
            }
        });
    });
}



