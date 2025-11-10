export default function CVOverview(){
    const event = new CustomEvent("CVOverviewRendered");
    setTimeout(() => document.dispatchEvent(event),0);
    return (
        `<section class="section4">
            <div class="section4__content">
                <div class="section4__content--text unbounded-500">Vị Trí Công Việc</div>
                <!-- <img src="./assets/images/section4/decor-item7.svg" alt="" class="section4__decor section4__decor1"> -->
                <img src="./assets/images/section4/decor-item9.svg" alt="" class="section4__decor section4__decor4">
                <img src="./assets/images/section4/decor-item10.svg" alt="" class="section4__decor section4__decor5">
            </div>
            <div class="section4__container">
                <div class="section4__decor2">
                    <img src="./assets/images/section4/decor-left.svg" alt="">
                </div>
                <div class="section4__group">
                    <div class="section4__group-ch">
                        <div class="section4__group--center"></div>
                        <img src="./assets/images/section4/center.svg" alt="" style="position: absolute;">
                        <div class="section4__group--logo section4__group--logo1">
                            <a href="#">
                                <img src="./assets/images/section4/logo1.svg" alt="">
                            </a>
                        </div>
                        <div class="section4__group--logo section4__group--logo2">
                            <a href="#">
                                <img src="./assets/images/section4/logo2.svg" alt="">
                            </a>
                        </div>
                        <div class="section4__group--logo section4__group--logo3">
                            <a href="#">
                                <img src="./assets/images/section4/logo3.svg" alt="">
                            </a>
                        </div>
                        <div class="section4__group--logo section4__group--logo4">
                            <a href="#">
                                <img src="./assets/images/section4/logo4.svg" alt="">
                            </a>
                        </div>
                        <div class="section4__group--logo section4__group--logo5">
                            <a href="#">
                                <img src="./assets/images/section4/logo5.svg" alt="">
                            </a>
                        </div>
                        <div class="section4__group--logo section4__group--logo6">
                            <a href="#">
                                <img src="./assets/images/section4/logo6.svg" alt="">
                            </a>
                        </div>
                        <div class="section4__group--logo section4__group--logo7">
                            <a href="#">
                                <img src="./assets/images/section4/logo7.svg" alt="">
                            </a>
                        </div>
                    </div>
                    <img src="./assets/images/section4/decor-item8.svg" alt="" class="section4__decor section4__decor3">
                </div>
                <div class="section4__decor2">
                    <img src="./assets/images/section4/decor-right.svg" alt="">
                </div>
            </div>
        </section>`
    )
}