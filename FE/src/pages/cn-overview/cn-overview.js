export default function CNOverview(data){
    return (
        `<section class="section3">
            <div class="section3__content">
                <div class="section3__content--text unbounded-500">${data.title}</div>
                    <img src="/FE/assets/images/section3/decor-item3.svg" alt="" class="section3__decor section3__decor1"> 
                    <img src="/FE/assets/images/section3/decor-item4.svg" alt="" class="section3__decor section3__decor2">
            </div>
            <div class="section3__frame">
                <div class="section3__frame--decor">
                    <img src="/FE/assets/images/section3/decor-item5.svg" alt="">
                </div>
                <div class="section3__logo">
                    <div class="section3__logo--row">
                        
                    </div>
                </div>
                <div class="section3__frame--decor">
                    <img src="/FE/assets/images/section3/decor-item6.svg" alt="">
                </div>
            </div>
        </section>`
    )
}