import Login from "../components/login/login.js";

function addEffectLogin(triggerElement,renderElement,loginFunction){
    const triggerE = document.querySelector(triggerElement);
    const renderE = document.querySelector(renderElement);

    triggerE.addEventListener('click',(e) => {
        e.stopPropagation();
        const div = document.createElement('div');
        div.classList.add("login-container")
        div.innerHTML += loginFunction();   
        renderE.append(div);
        addSmokeEffect(renderE);
        removeEffectLogin(renderElement,'.login-container');

        // custom event
        const event = new CustomEvent('loginFormCreated',{
            detail: {
                form: document.querySelector('.login-box__input > form')
            }
        });
        document.dispatchEvent(event); 

    });
    
}

function removeEffectLogin(renderElement,loginClass){
    const renderE = document.querySelector(renderElement);

    const removeBox = (e) => { 
        const loginBox = document.querySelector(loginClass); 
        if(loginBox.contains(e.target) == false){
            loginBox.remove();
            renderE.removeEventListener('click',removeBox); 
            removeSmokeEffect(renderE);
        }
    }

    renderE.addEventListener('click',removeBox);
}

function addSmokeEffect(element){
    element.classList.add('smoke-effect');
}

function removeSmokeEffect(element){
    element.classList.remove('smoke-effect');
}

function createEffectLogin(triggerElement,renderElement,loginFunction){
    addEffectLogin(triggerElement,renderElement,loginFunction);
}   

function main(){
    createEffectLogin('.header__navbar > button','body',Login); 
}
main();
