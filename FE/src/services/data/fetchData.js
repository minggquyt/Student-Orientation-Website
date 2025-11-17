export default function getJobsData() {
    return fetch("/FE/assets/data/jobs.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err);
        });
}

export function getMajorsData(){
    return fetch("/FE/assets/data/majors.json")
        .then(response => response.json())
        .then(data => data)
        .catch((err) => console.log(err))
}