export default function BackFooter(dataLink){
    return (
        `<div class="back-footer">
            <div data-link=${dataLink} class="back-footer__child">
                <img src="/FE/assets/images/pages/back.svg" alt="">
                &nbsp;
                <div class="back-footer__title space-grotesk-500">Trở về</div>
            </div>
        </div>`
    )
}