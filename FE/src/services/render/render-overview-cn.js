import getJobsData from "../data/fetchData.js";
import CVOverview from "../../pages/cv-overview/cv-overview.js";

export default function renderOVCN(renderDiv, data) {
    data.forEach((element) => {
        renderDiv.innerHTML += `
            <div data-link="details-major" data-id=${element.id} class="section3__logo--child ${element.id}">
                <a href="" ><img src=${element.icon} alt=""></a>
            </div>
                                        `
    })
}

export function renderOVCV(renderDiv, data) {
    data.forEach((element, index) => {
        renderDiv.innerHTML +=
            `<div data-link="details-job" data-id=${element.id} class="section4__group--logo section4__group--logo${index + 1}">
                <a href="">
                <img src=${element.icon} alt="">
                </a>
            </div>`
    });
}