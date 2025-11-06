export default function postInfoFromForm(formElement){
    formElement.addEventListener('submit',(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Onsubmit in form !");
        const username = document.querySelector('input[name="username"]').value; 
        const password  = document.querySelector('input[name="password"]').value;
        const inputInfo = {
            username:  username,
            password: password
        }

        postInfo(inputInfo)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(`error: ${error}`);
        })
    });
}

function postInfo(inputInfo){
        return fetch("http://localhost:3000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputInfo)
        })
        .then(result => {
            console.log("fetch data succeed !"); 
            return result.json();
        })
        .then(data => {
            return data;
        })
        .catch(err => console.log(`error occurs when fetch data: ${err}`))
}


