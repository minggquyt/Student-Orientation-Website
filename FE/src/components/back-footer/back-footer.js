export default function BackFooter(dataLink,language){
    const renderLang = language == 'vn' ? 'Trở về' : 'Back'
    return (
        `<div class="back-footer">
            <div data-link=${dataLink} class="back-footer__child">
                <img src="/FE/assets/images/pages/back.svg" alt="">
                &nbsp;
                <div class="back-footer__title space-grotesk-500">${renderLang}</div>
            </div>
        </div>`
    )
}