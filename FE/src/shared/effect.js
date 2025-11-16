import Login from "../components/login/login.js";

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

function addEffectButtonHompage(){
    window.addEventListener('load', (e) => {
        const buttons = document.querySelectorAll('.section2__selection-ch');
        const image = document.querySelectorAll('.section2__selection-ch > img');
        const desc = document.querySelectorAll('.section2__selection-ch--desc');

        console.log(desc);

        buttons.forEach((button,index) => {
            button.addEventListener('mouseenter', (e) => {
                e.stopPropagation();
                desc[index].style.opacity = 1;
            })
            button.addEventListener("mouseleave",(e) => {
                e.stopPropagation();
                desc[index].style.opacity = 0;
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
}

main();

export default function effectFlipCard() {
    const allBoxes = document.querySelectorAll('.box-content');
    console.log(allBoxes);

    allBoxes.forEach(function (box) {

        box.addEventListener('click', function () {

            const cardContainer = box.querySelector('.card-container');

            if (cardContainer) {
                cardContainer.classList.toggle('is-flipped');
            }
        });
    });
}