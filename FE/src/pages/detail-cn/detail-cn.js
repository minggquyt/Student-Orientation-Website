export default function DetailsMajor(){
    return (
    `<div class="details-majors">
        <div class="box">
    </div>
    <div class="title">Tổng quan chuyên ngành</div>
    <div class="box">
    </div>
    <div class="title">Vị trí công việc</div>
    <div class="box">
        <div class="box-content">
            <img src="../../assets/images/icon-devops.png" alt="" class="box-content-iamge">
            <div class="box-content-title">DevOps</div>
        </div>
        <div class="box-content">
            <img src="../../assets/images/icon-developer.png" alt="" class="box-content-iamge">
            <div class="box-content-title">Developer</div>
        </div>
        <div class="box-content">
            <img src="../../assets/images/icon-tester.png" alt="" class="box-content-iamge">
            <div class="box-content-title">Tester</div>
        </div>
        <div class="box-content">
            <img src="../../assets/images/icon-softwareEnginer.png" alt="" class="box-content-iamge">
            <div class="box-content-title">Software Enginer</div>
        </div>
        <div class="box-content">
            <img src="../../assets/images/icon-productOwner.png" alt="" class="box-content-iamge">
            <div class="box-content-title">Product Owner</div>
        </div>
        <div class="box-content">
            <img src="../../assets/images/icon-systemsAnalyst.png" alt="" class="box-content-iamge">
            <div class="box-content-title">Systems Analyst</div>
        </div>
    </div>
    <div class="title">Cơ hội việc làm</div>
    <div class="box">
    </div>
    <div class="title">Nhu cầu tuyển dụng</div>
    <div class="box">
    </div>
    <div class="title">Thông tin đào tạo</div>
    <div class="box">
        <div onclick="previousYear()" class="previous-page"><img src="../../assets/images/previous-page.png" width="47" height="99.37"></div>
        <div class="page">
            <div id="year-text" class="page-number">Năm 1</div>
            <div class="line"></div>
            <div id="page-content" class="page-content"></div>
        </div>
        <div onclick="nextYear()" class="next-page"><img src="../../assets/images/next-page.png" width="47" height="99.37"></div>
    </div>
    <script>
        function nextYear() {
            const yearText = document.getElementById('year-text');
            if (yearText.textContent.trim() === 'Năm 1') {
                yearText.textContent = 'Năm 2';
            } else if (yearText.textContent.trim() === 'Năm 2') {
                yearText.textContent = 'Năm 3';
            } else if (yearText.textContent.trim() === 'Năm 3') {
                yearText.textContent = 'Năm 4';
            }
        }
        function previousYear() {
            const yearText = document.getElementById('year-text');
            if (yearText.textContent.trim() === 'Năm 4') {
                yearText.textContent = 'Năm 3';
            } else if (yearText.textContent.trim() === 'Năm 3') {
                yearText.textContent = 'Năm 2';
            } else if (yearText.textContent.trim() === 'Năm 2') {
                yearText.textContent = 'Năm 1';
            } 
        }
    </script>
    </div>`
    )
}