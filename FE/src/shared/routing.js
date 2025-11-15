import Homepage from "../pages/homepage/homepage.js";
import CNOverview from "../pages/cn-overview/cn-overview.js";
import CVOverview from "../pages/cv-overview/cv-overview.js";
import DetailsMajor from "../pages/detail-cn/detail-cn.js";
import DetailsJob from "../pages/detail-cv/detail-cv.js";
import getJobsData from "../services/data/fetchData.js";
import { getMajorsData } from "../services/data/fetchData.js";
import renderOVCN from "../services/render/render-overview-cn.js";
import { renderOVCV } from "../services/render/render-overview-cn.js";
import effectFlipCard from "./effect.js";

const divBody = document.querySelector('.body');

function renderPage(pageName, id = null) {
    switch (pageName) {
        case "details-major":
            getMajorsData()
                .then((result) => {
                    const filteredData = result.find((job) => job.id == id);
                    divBody.innerHTML = DetailsMajor(filteredData);

                    const renderJobs = document.querySelector(".cn-jobs-position");
                    filteredData.jobPositions.forEach((job) => {
                        renderJobs.innerHTML += `
                            <div class="box-content">
                                <div class="card-container">
                                    <div class="front">
                                        <img src=${job.image} alt="" class="box-content-image" id="box-content-image-1">
                                        <div class="box-content-title" id="box-content-title-1">${job.title}</div>
                                    </div>
                                    <div class="back"></div>
                                </div>
                            </div>
                        `
                    })

                    const scriptElement = document.createElement("script");
                    scriptElement.src = "/FE/src/pages/detail-cn/effect-detail-cn.js"
                    scriptElement.type = "module";

                    document.querySelector(".details-major").appendChild(scriptElement);

                    effectFlipCard();   
                })
            break;
        case "details-job":
            getJobsData()
                .then((result) => {
                    const filteredData = result.find((job) => job.id == id);
                    divBody.innerHTML = DetailsJob(filteredData);
                })
            break;
        case "overview-cn":
            getMajorsData()
                .then((result) => {
                    divBody.innerHTML = CNOverview();
                    const renderDiv = document.querySelector(".section3__logo--row");
                    renderOVCN(renderDiv, result);
                });
            break;
        case "overview-cv":
            getJobsData()
                .then((result) => {
                    divBody.innerHTML = CVOverview();
                    const renderDiv = document.querySelector('.section4__group-ch');
                    renderOVCV(renderDiv,result);
                })
            break;
        case "contact":
            divBody.innerHTML = CNOverview();
            break;
        default:
            divBody.innerHTML = Homepage();
            getMajorsData()
                .then((result) => {
                    const renderDiv = document.querySelector(".section3__logo--row");
                    renderOVCN(renderDiv, result);
                });
            getJobsData()
                .then((result) => {
                    const renderDiv = document.querySelector('.section4__group-ch');
                    renderOVCV(renderDiv,result);
                })
    }

    localStorage.setItem("currentPage", pageName);
    if (id) localStorage.setItem("currentId", id);
}

window.addEventListener("load", () => {
    const savedPage = localStorage.getItem("currentPage") || "homepage";
    const savedID = localStorage.getItem("currentId") || null;

    renderPage(savedPage, savedID);
});

document.addEventListener("click", (e) => {
    const linkDiv = e.target.closest("[data-link]");

    if (linkDiv) {
        e.preventDefault();
        e.stopPropagation();
        const page = linkDiv.getAttribute("data-link");
        const id = linkDiv.getAttribute("data-id");

        renderPage(page, id);
    }
});