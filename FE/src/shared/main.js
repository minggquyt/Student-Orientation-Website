import Login from "../components/login/login.js";

function addEffectLogin(triggerElement,renderElement,loginFunction,loginClass){
    const triggerE = document.querySelector(triggerElement);
    const renderE = document.querySelector(renderElement);
    triggerE.addEventListener('click',(e) => {
        console.log("add event occurs")
        renderE.innerHTML += loginFunction();
        removeEffectLogin(renderElement,loginClass);
    });
}

function removeEffectLogin(renderElement,loginClass){
    const con = document.querySelector('.container');
    const loginBox = document.querySelector('.login-box');
    con.addEventListener('click',(e) => {
        if(loginBox.contains(e.target) == false)
            con.remove()
    })
}

// Ý tưởng: 
// dùng eventTarget để lấy class của thẻ con dc click
// kiểm tra xem class do981 có phải là con của ligin box hya không 

function createEffectLogin(triggerElement,renderElement,loginFunction,loginClass){
    addEffectLogin(triggerElement,renderElement,loginFunction,loginClass);
}   

function main(){
    createEffectLogin('.header__navbar > button','body',Login,'.login-box'); // true
}
main();

// CLick lần 1  vào button thì hiện thẻ lên  - DONE 
// CLick lần 2  ra ngoài box thì hủy 


// làm thế nào đẻ remove DOM element trong HTML ? -> remove()

// Task: 
// 1. Làm effect Login - chức năng tắt box login
// 2. Responsive 
// 3. Làm chức năng login   

// Canh giữa Box bằng position 
// Test xem click vào body có delete dc bx k

// sự khác nhau giữa event.target và evnt.currentTarget 
// event.target: trả về phần tử thấp nhất mà người dủng thực sự click vào trong cây DOM


