export default function DetailsJob(data) {
    return (
    `<div class="job-section1">
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
            <div class="job-section2__title--layer job-section2__layer1"></div>
            <div class="job-section2__title--layer job-section2__layer2"></div>
            <div class="job-section2__title--layer job-section2__layer3 unbounded-400">
                ${data.firsttitle} 
            </div>
        </div>
        <div class="job-section2__content">
            <div class="job-section2__box">
                <div class="job-section2__box--text">
                    ${data.firstdesc}
                </div>
            </div>
            <img src=${data.image} alt="">
        </div>
    </div>
    <div class="section__cloud">
        <img src=${data.seperator} alt="">
    </div>
    <div class="job-section2b">
        <div class="job-section2b__title ux__title">
            <div class="job-section2b__title--layer job-section2b__layer1 ux__title1"></div>
            <div class="job-section2b__title--layer job-section2b__layer2 ux__title2"></div>
            <div class="job-section2b__title--layer job-section2b__layer3 unbounded-400 ux__title3">
               ${data.secondtitle}
            </div>
        </div>
        <div class="job-section2b__content">
            <img src="/FE/assets/images/pages/ops-security/content2.svg" alt="">
            <div class="job-section2b__box">
                <div class="job-section2b__box--text">
                    ${data.seconddesc}
                </div>
            </div>
        </div>
    </div>
    <div class="section3">
        <div class="section3--child">
            <div class="section3__line"></div>
            <div class="section3__back space-grotesk-500">
                <img src="/FE/assets/images/pages/back.svg" alt="" class="section__back--icon">
                &nbsp;
                Trở về
            </div>
        </div>
    </div>`
    )
}