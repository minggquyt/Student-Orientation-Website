export default function DetailsMajor(data){
    return (
    `<div class="details-major">
        <div class="box">
        <div class="box-title" id="box-title">
        ${data.pageTitle}
        </div>
        <div class="box-content-description">
            <div class="box-content-description-text">
                <div class="box-content-description-text-child">${data.questions.questionsColumn1[0]}</div>
                <div class="box-content-description-text-child">${data.questions.questionsColumn1[1]}</div>
                <div class="box-content-description-text-child">${data.questions.questionsColumn1[2]}</div>
            </div>
            <div class="box-content-description-text">
                <div class="box-content-description-text-child">${data.questions.questionsColumn2[0]}</div>
                <div class="box-content-description-text-child">${data.questions.questionsColumn2[1]}</div>
                <div class="box-content-description-text-child">${data.questions.questionsColumn2[2]}</div>
            </div>
        </div>
    </div>
    <div class="title-container"><div class="title">Tổng quan chuyên ngành</div></div>
    <div class="box space-grotesk-500">
    ${data.overview}
    </div>
    <div class="title-container"><div class="title">Vị trí công việc</div></div>
    <div class="box cn-jobs-position">

    </div>
    <div class="title-container"><div class="title">Cơ hội việc làm</div></div>
    <div class="box space-grotesk-500">
    ${data.careerOpportunities}
    </div>
    <div class="title-container"><div class="title">Nhu cầu tuyển dụng</div></div>
    <div class="box space-grotesk-500">
    ${data.recruitmentNeeds}
    </div>
    <div class="title-container"><div class="title">Thông tin học tập</div></div>
    <div class="box">
        <div class="previous-page"><img src="/FE/assets/images/previous-page.png" width="47" height="99.37"></div>
        <div class="page">
            <div id="year-text" class="page-number">Năm 1</div>
            <div class="line"></div>
            <div class="text">Môn Học</div>
            <div id="page-content" class="page-content">
                <div class="page-content-item">Học kỳ 1
                    <div class="sub-item">Nhập môn tin học</div>
                    <div class="sub-item">Nhập môn lập trình</div>
                </div>
                <div class="page-content-item">Học kỳ 2
                    <div class="sub-item">Kĩ thuật lập trình</div>
                    <div class="sub-item">Hệ thống máy tính</div>
                </div>
            </div>
        </div>
        <div class="next-page"><img src="/FE/assets/images/next-page.png" width="47" height="99.37"></div>
    </div>
    </div>`
    )
}