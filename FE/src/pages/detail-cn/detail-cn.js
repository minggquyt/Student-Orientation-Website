export default function DetailsMajor(){
    const jobImages = {
        devops: "./assets/images/icon-devops.png",
        developer: "./assets/images/icon-developer.png",
        tester: "./assets/images/icon-tester.png",
        se: "./assets/images/icon-softwareEnginer.png",
        po: "./assets/images/icon-productOwner.png",
        da: "./assets/images/icon-systemsAnalyst.png"
    }

    const icon = {
        nextPage: "./assets/images/next-page.png",
        previousPage: "./assets/images/previous-page.png"
    }

    const jobDescription = {
        devops: "Info about devops",
        developer: "Info about developer",
        tester: "Info about Tester",
        se: "Info about SE",
        po: "Info about PO",
        da: "Info bout DA"
    }

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
            <div class="card">
                <div class="front">
                    <img src=${jobImages.devops} alt="" class="box-content-iamge">
                    <div class="box-content-title">Devops</div>
                </div>
                <div class="back">
                    <div class="box-content-info">${jobDescription.devops}</div>
                </div>
            </div>
        </div>
        <div class="box-content">
            <div class="card">
                <div class="front">
                    <img src=${jobImages.developer} alt="" class="box-content-iamge">
                    <div class="box-content-title">Developer</div>
                </div>
                <div class="back">
                    <div class="box-content-info">${jobDescription.developer}</div>
                </div>
            </div>
        </div>
        <div class="box-content">
            <div class="card">
                <div class="front">
                    <img src=${jobImages.tester} alt="" class="box-content-iamge">
                    <div class="box-content-title">Tester</div>
                </div>
                <div class="back">
                    <div class="box-content-info">${jobDescription.tester}</div>
                </div>
            </div>
        </div>
        <div class="box-content">
            <div class="card">
                <div class="front">
                    <img src=${jobImages.se} alt="" class="box-content-iamge">
                    <div class="box-content-title">Software Engineer</div>
                </div>
                <div class="back">
                    <div class="box-content-info">${jobDescription.se}</div>
                </div>
            </div>
        </div>
        <div class="box-content">
            <div class="card">
                <div class="front">
                    <img src=${jobImages.po} alt="" class="box-content-iamge">
                    <div class="box-content-title">Product Manager</div>
                </div>
                <div class="back">
                    <div class="box-content-info">${jobDescription.po}</div>
                </div>
            </div>
        </div>
        <div class="box-content">
            <div class="card">
                <div class="front">
                    <img src=${jobImages.da} alt="" class="box-content-iamge">
                    <div class="box-content-title">Data analyst</div>
                </div>
                <div class="back">
                    <div class="box-content-info">${jobDescription.da}</div>
                </div>
            </div>

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
        <div onclick="previousYear()" class="previous-page"><img src=${icon.previousPage} width="47" height="99.37"></div>
        <div class="page">
            <div id="year-text" class="page-number">Năm 1</div>
            <div class="line"></div>
            <div id="page-content" class="page-content"></div>
        </div>
        <div onclick="nextYear()" class="next-page"><img src=${icon.nextPage} width="47" height="99.37"></div>
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
    </div>
    `);
}