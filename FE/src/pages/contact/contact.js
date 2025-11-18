export default function Contact(){
    return (
        `<section class="section5">
            <div class="section5__container">
                <div class="section5__form">
                    <div class="section5__form--title unbounded-500">Liên hệ với chúng tôi ngay</div>
                    <div class="section5__form--frame">
                        <div class="form">
                            <div class="form--title space-grotesk-500">Tên tài khoản:</div>
                            <div class="form--input">
                                <input type="text" placeholder="Name">
                            </div>
                        </div>
                        <div class="form">
                            <div class="form--title space-grotesk-500">Email:</div>
                            <div class="form--input">
                                <input type="text" placeholder="Email">
                            </div>
                        </div>
                        <div class="form">
                            <div class="form--title space-grotesk-500">Tin nhắn:</div>
                            <div class="form--input form__message--input">
                                <input type="text" placeholder="Message">
                            </div>
                        </div>
                    </div>
                    <button class="section5__form--button unbounded-500">Gửi</button>
                </div>
                <img src="/FE/assets/images/section5/Illustration.svg" alt="">
            </div>
        </section>`
    )
}