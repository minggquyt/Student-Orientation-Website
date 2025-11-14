import Homepage from "../pages/homepage/homepage.js";
import CNOverview from "../pages/cn-overview/cn-overview.js";
import CVOverview from "../pages/cv-overview/cv-overview.js";
import DetailsMajor from "../pages/detail-cn/detail-cn.js";
import DetailsJob from "../pages/detail-cv/detail-cv.js";
import getJobsData from "../services/data/fetchData.js";
import { getMajorsData } from "../services/data/fetchData.js";


const divBody = document.querySelector('.body');

function renderPage(pageName,id = null) {
    switch (pageName) {
        case "details-major":
            divBody.innerHTML = DetailsMajor();
            const script = document.createElement("script");
            script.src = "/FE/src/pages/detail-cn/effect-detail-cn.js";
            document.body.appendChild(script);
            break;
        case "details-job":
            getJobsData()
                .then((result)=> {
                    const filteredData = result.find((job) => job.id == id);
                    divBody.innerHTML = DetailsJob(filteredData);
                })
            break;
        case "overview-cn":
            getMajorsData()
                .then((result) => {
                    divBody.innerHTML = CNOverview();
                    console.log(result);
                });
            break;
        case "overview-cv":
            getJobsData()
                .then((result)=> {
                    divBody.innerHTML = CVOverview();
                    const div = document.querySelector('.section4__group-ch');
                    result.forEach((element,index) => {
                        div.innerHTML += 
                        `<div data-link="details-job" data-id=${element.id} class="section4__group--logo section4__group--logo${index+1}">
                            <a href="">
                                <img src=${element.icon} alt="">
                            </a>
                        </div>`
                    });
                })
            break;
        case "contact":
            divBody.innerHTML = CNOverview();
            break;
        default:
            divBody.innerHTML = Homepage();
    }

    localStorage.setItem("currentPage", pageName);
    if (id) localStorage.setItem("currentId", id);
}

window.addEventListener("load", () => {
    const savedPage = localStorage.getItem("currentPage") || "homepage";
    const savedID = localStorage.getItem("currentId") || null;

    renderPage(savedPage,savedID);
});

document.addEventListener("click", (e) => {
    const linkDiv = e.target.closest("[data-link]");

    if (linkDiv) {
        e.preventDefault(); 
        e.stopPropagation();
        const page = linkDiv.getAttribute("data-link");
        const id = linkDiv.getAttribute("data-id"); 

        renderPage(page,id);
    }
});