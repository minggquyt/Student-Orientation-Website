export default function postInfo(inputInfo){
        return fetch("http://localhost:3000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputInfo)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(err => console.log(`error occurs when fetch data: ${err}`))
}


