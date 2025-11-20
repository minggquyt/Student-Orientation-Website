import Homepage from "../pages/homepage/homepage.js";
import CNOverview from "../pages/cn-overview/cn-overview.js";
import CVOverview from "../pages/cv-overview/cv-overview.js";
import DetailsMajor from "../pages/detail-cn/detail-cn.js";
import DetailsJob from "../pages/detail-cv/detail-cv.js";
import SLDC from "../pages/sldc/sldc.js";
import Contact from "../pages/contact/contact.js";
import getJobsData, { getHeaderData } from "../services/data/fetchData.js";
import { getMajorsData,getSLDCData, getContactData, getHomePageData } from "../services/data/fetchData.js";
import renderOVCN from "../services/render/render-overview-cn.js";
import { renderOVCV } from "../services/render/render-overview-cn.js";
import effectFlipCard from "./effect.js";
import changeHeaderLang from "./main.js";
import { changeFooterLang } from "./main.js";


const divBody = document.querySelector('.body');

function renderPage(pageName, id = null) {

    const language = localStorage.getItem('currentLang');

    getHeaderData(language.toLowerCase())
        .then((data) => {
            changeHeaderLang(data);
        })

    changeFooterLang(language);


    switch (pageName) {
        case "details-major":
            getMajorsData(language.toLowerCase())
                .then((result) => {
                    const filteredData = result.majors.find((job) => job.id == id);
                    divBody.innerHTML = DetailsMajor(filteredData);

                    const renderJobs = document.querySelector(".cn-jobs-position");
                    filteredData.jobPositions.forEach((job) => {
                        renderJobs.innerHTML += `
                            <div class="box-content" data-link="details-job" data-id=${job.id} >
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
                    scriptElement.src = "./FE/src/pages/detail-cn/effect-detail-cn.js"
                    scriptElement.type = "module";

                    document.querySelector(".details-major").appendChild(scriptElement);

                    effectFlipCard();   
                })
            break;
        case "details-job":
            getJobsData(language.toLowerCase())
                .then((result) => {
                    const filteredData = result.jobs.find((job) => job.id == id);
                    divBody.innerHTML = DetailsJob(filteredData);
                })
            break;
        case "overview-cn":
            getMajorsData(language.toLowerCase())
                .then((result) => {
                    console.log(result);
                    divBody.innerHTML = CNOverview(result);
                    const renderDiv = document.querySelector(".section3__logo--row");
                    renderOVCN(renderDiv, result);
                });
            break;
        case "overview-cv":
            getJobsData(language.toLowerCase())
                .then((result) => {
                    divBody.innerHTML = CVOverview(result);
                    const renderDiv = document.querySelector('.section4__group-ch');
                    renderOVCV(renderDiv,result);
                })
            break;
        case "sldc":
            getSLDCData(language.toLowerCase())
                .then((data) => {
                    console.log(data);
                    divBody.innerHTML = SLDC(data);

                    const boxContent1 = document.querySelector(".sdlc-section2__box--text1 > ul");
                    data.content.boxContent1.forEach((e) => {
                        boxContent1.innerHTML += `<li>${e}</li>`;
                    })

                    const boxContent2 = document.querySelector('.sdlc-section2__box--text2 > ul');
                    
                    const li = document.createElement("li");
                    li.innerHTML += data.content.boxContent2.title;
                    boxContent2.replaceChild(li,boxContent2.childNodes[1]);

                    data.content.boxContent2.content.forEach((element) => {
                        boxContent2.childNodes[3].innerHTML += `<li>${element}</li>`;
                    })
                })
            break;
        case "contact":
            getContactData(language.toLowerCase())
                .then((data) => {
                    divBody.innerHTML = Contact(data);
                })
            break;
        default:
            const promise1 = getHomePageData(language.toLowerCase());
            const promise2 = getMajorsData(language.toLowerCase());
            const promise3 = getJobsData(language.toLowerCase());
            const promise4 = getContactData(language.toLowerCase());

            Promise.all([promise1,promise2,promise3,promise4])
                .then((result ) => {
                    console.log(result);
                    divBody.innerHTML = Homepage(...result);
                })
                .catch(err => console.log(err));

            getMajorsData(language.toLowerCase())
                .then((result) => {
                    console.log(result);
                    const renderDiv = document.querySelector(".section3__logo--row");
                    renderOVCN(renderDiv, result);
                });

            getJobsData(language.toLowerCase())
                .then((result) => {
                    const renderDiv = document.querySelector('.section4__group-ch');
                    renderOVCV(renderDiv,result);
                })
    }

    localStorage.setItem("currentPage", pageName);
    if (id) localStorage.setItem("currentId", id);
}

document.addEventListener("DOMContentLoaded", () => {
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

document.addEventListener("switchEffectActive",(e) => {
    e.stopPropagation();
    const savedPage = localStorage.getItem("currentPage") || "homepage";
    const savedID = localStorage.getItem("currentId") || null;

    renderPage(savedPage, savedID);
})

// Ý tưởng: 

// Làm state ngôn ngữ của button và lưu vào localStorage 

// 3 trường hợp cần lấy NN:
// 1. Khi refresh trang 
// 2. Khi click vào button switch NN
// + khi refresh trang -> lấy language từ loccalStorage:
// Có -> dùng || chưa có -> mặc định VN 
// + Khi click vào button ngôn ngữ -> lấy ngôn ngữ hiện tại trên button 


// Logic bên file routing để render ra ngôn ngữ 