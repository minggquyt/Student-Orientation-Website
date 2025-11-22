import BackFooter from "../../components/back-footer/back-footer.js"

export default function DetailsJob(data, currentLang) {
    const status = data.secondtitle == '#';
    const section1 = `<div class="job-section1">
        <div class="job-section1--child">
            <div class="job-section1__layer job-section1__layer1"></div>
            <div class="job-section1__layer job-section1__layer2"></div>
            <div class="job-section1__layer job-section1__layer3">
                <img src=${data.icon} alt="" class="job-section1__layer--logo">
                <div class="job-section1__layer--title unbounded-400">${data.title}</div>
            </div>
        </div>
    </div>
    <div class="job-section2">
        <div class="job-section2__title">
            <div class="job-section2__title--layer job-section2__layer3 unbounded-400">
                ${data.firsttitle} 
            </div>
        </div>
        <div class="job-section2__content">
            <div class="job-section2__box">
                <div class="job-section2__box--text space-grotesk-500">
                    ${data.firstdesc}
                </div>
            </div>
            <img src=${data.image} alt="">
        </div>
    </div>
    <div class="section__cloud">
        <img src=${data.seperator} alt="">
    </div>`
    const section2 = ` <div class="job-section2b">
        <div class="job-section2b__title ">
            <div class="job-section2b__title--layer job-section2b__layer3 unbounded-400 ">
               ${data.secondtitle}
            </div>
        </div>
        <div class="job-section2b__content">
            <img src="/FE/assets/images/pages/ops-security/content2.svg" alt="">
            <div class="job-section2b__box">
                <div class="job-section2b__box--text space-grotesk-500">
                    ${data.seconddesc}
                </div>
            </div>
        </div>
    </div>`
    const section3 = `<div class="job-section3">
        <div class="job-section3--child">
            ${BackFooter("overview-cv", currentLang)}
        </div>
    </div>`

    if(status){
        return (
            `${section1}
            ${section3}
            `
        )
    }
    else {
        return (
        `${section1}
        ${section2}
        ${section3}`
        )
    }
}