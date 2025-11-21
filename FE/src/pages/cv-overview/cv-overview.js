export default function CVOverview(data){

    return (
        `<section class="section4">
            <div class="section4__content">
                <div class="section4__content--text unbounded-500">${data.title}</div>
                <img src="/FE/assets/images/section4/decor-item9.svg" alt="" class="section4__decor section4__decor4">
                <img src="/FE/assets/images/section4/decor-item10.svg" alt="" class="section4__decor section4__decor5">
            </div>
            <div class="section4__container">
                <div class="section4__decor2">
                    <img src="/FE/assets/images/section4/decor-left.svg" alt="">
                </div>
                <div class="section4__group">
                    <div class="section4__group-ch">
                        <div class="section4__group--center"></div>
                        <a data-link="sldc" class="section4__group--sldc unbounded-400">
                            <h1>SOFTWARE</h1>
                            <h1>DEVELOPMENT</h1>
                            <div class="section4__group--sldc--sub">
                                <div class="section4__group--sldc--sub_content">
                                    <h1>LIFE</h1>
                                    <h1>CYCLE</h1>
                                </div>
                                <div class="section4__group--sldc--sub_button">
                                    <img src="/FE/assets/images/section4/star.png" width="18px" height="18px" alt="">
                                    <p>${data.titleSLDCButton}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <img src="/FE/assets/images/section4/decor-item8.svg" alt="" class="section4__decor section4__decor3">
                </div>
                <div class="section4__decor2">
                    <img src="/FE/assets/images/section4/decor-right.svg" alt="">
                </div>
            </div>
        </section>`
    );
}