import BackFooter from "../../components/back-footer/back-footer.js";

export default function SLDC(data){
    return (
    `<div class="sdlc-container">
        <div class="sdlc-section1">
            <div class="sdlc-section1__layer1 sdlc-section1__layer"></div>
            <div class="sdlc-section1__layer2 sdlc-section1__layer"></div>
            <div class="sdlc-section1__layer3 sdlc-section1__layer">
                <img src="/FE/assets/images/pages/Vector-sdlc.svg" alt="">
                <div class="sdlc-section1__layer--text unbounded-400">${data.title}</div>
                <img src="/FE/assets/images/pages/Vector-sdlc.svg" alt="">
            </div>
        </div>
        <div class="sdlc-section2">
            <div class="sdlc-section2__child">
                <div class="sdlc-section2__child--layer sdlc-section2__child--layer1"></div>
                <div class="sdlc-section2__child--layer sdlc-section2__child--layer2"></div>
                <div class="sdlc-section2__child--layer sdlc-section2__child--layer3">
                    <div class="sdlc-section2__layer--text unbounded-400">${data.content.title1}</div>
                </div>
            </div>
            <div class="sdlc-section2__content">
                <div class="sdlc-section2__box sdlc-section2__box1">
                    <div class="sdlc-section2__box--detail sdlc-section2__box--detail1">
                        <div class="sdlc-section2__box--text sdlc-section2__box--text1 space-grotesk-500">
                            <ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="sdlc-section2__box sdlc-section2__box2">
                    <div class="sdlc-section2__box--detail sdlc-section2__box--detail2">
                        <div class="sdlc-section2__box--text sdlc-section2__box--text2 space-grotesk-500">
                            <ul>
                                <li>Text</li>
                                <ol type="1">

                                </ol>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src=${data.content.image} alt="" style="border-radius: 12px;">
            </div>
            
        </div>
        ${BackFooter("overview-cv")}
    </div>`
    )
}