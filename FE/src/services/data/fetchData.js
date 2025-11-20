export default function getJobsData(language = 'VN') {
    return fetch("/FE/assets/data/jobs.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data.filter((e) => e.id == language)[0];
        })
        .catch((err) => {
            console.log(err);
        });
}

export function getMajorsData(language = 'vn') {
    return fetch("/FE/assets/data/majors.json")
        .then(response => response.json())
        .then((data) => {
            return data.filter((e) => e.id == language)[0];
        })
        .catch((err) => console.log(err))
}

export function getHomePageData(language) {
    return fetch("/FE/assets/data/hompage.json")
        .then(response => response.json())
        .then((data) => {
            return data.filter((e) => e.id == language)[0];
        })
        .catch((err) => console.log(err))
}

export function getContactData(language) {
    return fetch("/FE/assets/data/contact.json")
        .then((response) => response.json())
        .then((data) => {
            return data.filter((e) => e.id == language)[0];
        })
        .catch(err => console.log(err));
}

export function getSLDCData(language = 'vn') {
    return fetch("/FE/assets/data/sldc.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data.filter((e) => e.id == language)[0];
        })
        .catch((err) => console.log(err));
}

export function getHeaderData(language = 'vn') {
    return fetch("/FE/assets/data/header.json")
        .then((response) => response.json())
        .then((data) => {
            return data.filter((e) => e.id == language)[0];
        })
        .catch((err) => console.log(err));
}

export function getFooterData(language = 'vn'){
    return fetch("/FE/assets/data/footer.json")
        .then((response) => response.json())
        .then((data) => {
            return data.filter((e) => e.id == language)[0];
        })
        .catch((err) => console.log(err));
}