import CNOverview from "../cn-overview/cn-overview.js"
import CVOverview from "../cv-overview/cv-overview.js"

export default function Homepage(){
    return (
        `<section class="section1">
            <div class="section1__content">
                <img src="./assets/images/section1/decor-item1.svg" alt="" class="section1__decor section1__decor1">
                <div class="section1__content--text space-grotesk-500">Hãy để chúng mình giúp bạn tìm hướng đi trong ngành CNTT!</div>
                <img src="./assets/images/section1/decor-item2.svg" alt="" class="section1__decor section1__decor2">
            </div>
        </section>
        <section class="section2">
            <div class="section2__text unbounded-400">Mỗi sinh viên đều có hành trình khác nhau.<br>Mức độ định hướng hiện tại của bạn như thế nào? </div>
            <div class="section2__selection">
                <div class="section2__selection-ch">
                    <img src="/FE/assets/images/section2/vector-2.png" alt="" class="section2__selection-ch--icon">
                    <div>
                        <div class="section2__selection-ch--text unbounded-400">Tôi chưa rõ mình hợp với công việc nào</div>
                        <div class="section2__selection-ch--desc unbounded-400">
                            <img src="/FE/assets/images/section2/star.png" width="13px" height="13px" alt="">
                            Tìm hiểu thêm ...
                        </div>
                    </div>
                </div>
                <div class="section2__selection-ch">
                    <img src="/FE/assets/images/section2/vector-2.png" alt="" class="section2__selection-ch--icon">
                    <div>
                        <div class="section2__selection-ch--text unbounded-400">Tôi đã có ý tưởng sơ bộ về hướng đi</div>
                        <div class="section2__selection-ch--desc unbounded-400">
                            <img src="/FE/assets/images/section2/star.png" width="13px" height="13px" alt="">
                            Tìm hiểu thêm ...
                        </div>
                    </div>
                </div>
                <div class="section2__selection-ch">
                    <img src="/FE/assets/images/section2/vector-2.png" alt="" class="section2__selection-ch--icon">
                    <div>
                        <div class="section2__selection-ch--text unbounded-400">Tôi đã xác định được mục tiêu nghề nghiệp</div>
                        <div class="section2__selection-ch--desc unbounded-400">
                            <img src="/FE/assets/images/section2/star.png" width="13px" height="13px" alt="">
                            Tìm hiểu thêm ...
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
        <hr>
        ${CNOverview()}
        <hr>
        ${CVOverview()}
        <hr>
        <section class="section5">
            <div class="section5__container">
                <div class="section5__form">
                    <div class="section5__form--title unbounded-500">Phản hồi để được hỗ trợ</div>
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
                <img src="./assets/images/section5/Illustration.svg" alt="">
            </div>
        </section>`
    )
}