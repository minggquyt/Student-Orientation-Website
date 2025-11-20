export default function renderOVCN(renderDiv, data) {
    data.majors.forEach((element) => {
        renderDiv.innerHTML += `
                <div data-link="details-major" data-id=${element.id} class="section3__logo--child ${element.id}">
                    <a href="" ><img src=${element.icon} alt=""></a>
                </div>                   `
    })
}

export function renderOVCV(renderDiv, data) {
    data.jobs.forEach((element, index) => {
        renderDiv.innerHTML +=
            `<div data-link="details-job" data-id=${element.id} class="section4__group--logo section4__group--logo${index + 1}">
                <a href="">
                <img src=${element.icon} alt="">
                </a>
            </div>`
    });
}