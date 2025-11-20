import CNOverview from "../cn-overview/cn-overview.js"
import CVOverview from "../cv-overview/cv-overview.js"
import Contact from "../contact/contact.js"

export default function Homepage(homepageData,cnData,cvData,contactData){
    return (
        `<section class="section1">
            <div class="section1__content">
                <img src="/FE/assets/images/section1/decor-item1.svg" alt="" class="section1__decor section1__decor1">
                <div class="section1__content--text space-grotesk-500">${homepageData.section1.title}</div>
                <img src="/FE/assets/images/section1/decor-item2.svg" alt="" class="section1__decor section1__decor2">
            </div>
        </section>
        <section class="section2">
            <div class="section2__text unbounded-400">${homepageData.section2.desc}<br>Mức độ định hướng hiện tại của bạn như thế nào? </div>
            <div class="section2__selection">
                <div data-link="overview-cn" class="section2__selection-ch">
                    <img src="/FE/assets/images/section2/vector-2.png" alt="" class="section2__selection-ch--icon">
                    <div>
                        <div class="section2__selection-ch--text unbounded-400">${homepageData.section2.buttonDesc1}</div>
                        <div class="section2__selection-ch--desc unbounded-400">
                            <img src="/FE/assets/images/section2/star.png" width="13px" height="13px" alt="">
                            Tìm hiểu thêm ...
                        </div>
                    </div>
                </div>
                <div data-link="overview-cv" class="section2__selection-ch">
                    <img src="/FE/assets/images/section2/vector-2.png" alt="" class="section2__selection-ch--icon">
                    <div>
                        <div class="section2__selection-ch--text unbounded-400">${homepageData.section2.buttonDesc2}</div>
                        <div class="section2__selection-ch--desc unbounded-400">
                            <img src="/FE/assets/images/section2/star.png" width="13px" height="13px" alt="">
                            Tìm hiểu thêm ...
                        </div>
                    </div>
                </div>
                <div data-link="overview-cv" class="section2__selection-ch">
                    <img src="/FE/assets/images/section2/vector-2.png" alt="" class="section2__selection-ch--icon">
                    <div>
                        <div class="section2__selection-ch--text unbounded-400">${homepageData.section2.buttonDesc3}</div>
                        <div class="section2__selection-ch--desc unbounded-400">
                            <img src="/FE/assets/images/section2/star.png" width="13px" height="13px" alt="">
                            Tìm hiểu thêm ...
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
        <hr>
        ${CNOverview(cnData)}
        <hr>
        ${CVOverview(cvData)}
        <hr>
        ${Contact(contactData)}`
    )
}