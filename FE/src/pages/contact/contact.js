export default function Contact(data){
    return (
        `<section class="section5">
            <div class="section5__container">
                <div class="section5__form">
                    <div class="section5__form--title unbounded-500">${data.title}</div>
                    <div class="section5__form--frame">
                        <div class="form">
                            <div class="form--title space-grotesk-500">${data.input1}</div>
                            <div class="form--input">
                                <input type="text" placeholder="Name">
                            </div>
                        </div>
                        <div class="form">
                            <div class="form--title space-grotesk-500">${data.input2}</div>
                            <div class="form--input">
                                <input type="text" placeholder="Email">
                            </div>
                        </div>
                        <div class="form">
                            <div class="form--title space-grotesk-500">${data.input3}</div>
                            <div class="form--input form__message--input">
                                <input type="text" placeholder="Message">
                            </div>
                        </div>
                    </div>
                    <button class="section5__form--button unbounded-500">${data.button}</button>
                </div>
                <img src="/FE/assets/images/section5/Illustration.svg" alt="">
            </div>
        </section>`
    )
}