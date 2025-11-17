import BackFooter from "../../components/back-footer/back-footer.js";

export default function SLDC(){
    return (
    `<div class="sdlc-container">
        <div class="sdlc-section1">
            <div class="sdlc-section1__layer1 sdlc-section1__layer"></div>
            <div class="sdlc-section1__layer2 sdlc-section1__layer"></div>
            <div class="sdlc-section1__layer3 sdlc-section1__layer">
                <img src="/FE/assets/images/pages/Vector-sdlc.svg" alt="">
                <div class="sdlc-section1__layer--text unbounded-400">Vòng đời phát triển phần mềm (SDLC)</div>
                <img src="/FE/assets/images/pages/Vector-sdlc.svg" alt="">
            </div>
        </div>
        <div class="sdlc-section2">
            <div class="sdlc-section2__child">
                <div class="sdlc-section2__child--layer sdlc-section2__child--layer1"></div>
                <div class="sdlc-section2__child--layer sdlc-section2__child--layer2"></div>
                <div class="sdlc-section2__child--layer sdlc-section2__child--layer3">
                    <div class="sdlc-section2__layer--text unbounded-400">SDLC là gì?</div>
                </div>
            </div>
            <div class="sdlc-section2__content">
                <div class="sdlc-section2__box sdlc-section2__box1">
                    <div class="sdlc-section2__box--detail sdlc-section2__box--detail1">
                        <div class="sdlc-section2__box--text sdlc-section2__box--text1 space-grotesk-500">
                            <ul>
                                <li>Khi nhắc đến lập trình, nhiều bạn chỉ nghĩ ngay đến việc viết code. Nhưng trong thế giới chuyên nghiệp, code chỉ là một phần nhỏ của một bức tranh lớn hơn nhiều.</li>
                                <li>Trước khi một phần mềm xuất hiện trên điện thoại hay máy tính của bạn, nó phải trải qua một hành trình có trật tự, có kế hoạch rõ ràng — gọi là SDLC (Software Development Life Cycle), hay còn gọi là Vòng đời phát triển phần mềm.</li>
                                <li>Hãy tưởng tượng bạn muốn xây một ngôi nhà. Bạn không thể cứ cầm gạch và bắt đầu xây mà không biết nhà mình có mấy tầng, bao nhiêu phòng, cần vật liệu gì. Phần mềm cũng vậy: nó cần được hiểu rõ, thiết kế kỹ, kiểm thử cẩn thận và cải tiến liên tục.</li>
                                <li>SDLC chính là “bản đồ toàn diện” giúp mọi kỹ sư, từ nhà phân tích, lập trình viên đến tester, hiểu rõ mình đang ở đâu và cần làm gì tiếp theo.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="sdlc-section2__box sdlc-section2__box2">
                    <div class="sdlc-section2__box--detail sdlc-section2__box--detail2">
                        <div class="sdlc-section2__box--text sdlc-section2__box--text2 space-grotesk-500">
                            <ul>
                                <li>Quy trình SDLC gồm 7 giai đoạn nối tiếp nhau. Gồm:</li>
                                <ol type="1">
                                    <li>Phân tích yêu cầu</li>
                                    <li>Thiết kế hệ thống và giao diện</li>
                                    <li>Lập trình</li>
                                    <li>Kiểm thử</li>
                                    <li>Triển khai</li>
                                    <li>Giám sát và bảo trì</li>
                                    <li>Thu thập phản hồi và cải tiến</li>
                                </ol>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src="/FE/assets/images/pages/sdlc/content.svg" alt="" style="border-radius: 12px;">
            </div>
            
        </div>
        ${BackFooter("overview-cv")}
    </div>`
    )
}