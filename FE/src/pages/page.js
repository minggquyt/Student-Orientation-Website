
let major = '';
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const major = params.get('major');
    if (major === 'ktpm') {
        ktpm();
    }
    else if (major === 'khmt') {
        khmt();
    }
    else if (major === 'khdl') {
        khdl();
    }
    else if (major === 'httt') {
        httt();
    }
    else if (major === 'cntt') {
        cntt();
    }
    contentYearOne();
});

function ktpm() {
    major = 'ktpm';
    const icon1 = document.getElementById('box-content-image-1');
    icon1.src = "./assets/images/page/KTPM/icon-1.svg";
    const title1 = document.getElementById('box-content-title-1');
    title1.textContent = "DevOps";
    const icon2 = document.getElementById('box-content-image-2');
    icon2.src = "./assets/images/page/KTPM/icon-2.svg";
    const title2 = document.getElementById('box-content-title-2');
    title2.textContent = "Developer";  
    const icon3 = document.getElementById('box-content-image-3');
    icon3.src = "./assets/images/page/KTPM/icon-3.svg";
    const title3 = document.getElementById('box-content-title-3');
    title3.textContent = "Tester";  
    const icon4 = document.getElementById('box-content-image-4');
    icon4.src = "./assets/images/page/KTPM/icon-4.svg";
    const title4 = document.getElementById('box-content-title-4');
    title4.textContent = "Software Enginer";
    const icon5 = document.getElementById('box-content-image-5');
    icon5.src = "./assets/images/page/KTPM/icon-5.svg";
    const title5 = document.getElementById('box-content-title-5');
    title5.textContent = "Product Owner";
    const icon6 = document.getElementById('box-content-image-6');
    icon6.src = "./assets/images/page/KTPM/icon-6.svg";
    const title6 = document.getElementById('box-content-title-6');
    title6.textContent = "Systems Analyst";
}
function khmt() {
    const icon1 = document.getElementById('box-content-image-1');
    icon1.src = "./assets/images/page/KHMT/icon-1.svg";
    const title1 = document.getElementById('box-content-title-1');
    title1.textContent = "AI Engineer";
    const icon2 = document.getElementById('box-content-image-2');
    icon2.src = "./assets/images/page/KHMT/icon-2.svg";
    const title2 = document.getElementById('box-content-title-2');
    title2.textContent = "Cyber Security";  
    const icon3 = document.getElementById('box-content-image-3');
    icon3.src = "./assets/images/page/KHMT/icon-3.svg";
    const title3 = document.getElementById('box-content-title-3');
    title3.textContent = "Cloud Computing Specialist";  
    const icon4 = document.getElementById('box-content-image-4');
    icon4.src = "./assets/images/page/KHMT/icon-4.svg";
    const title4 = document.getElementById('box-content-title-4');
    title4.textContent = "Game Developer";
    const icon5 = document.getElementById('box-content-image-5');
    icon5.src = "./assets/images/page/KHMT/icon-5.svg";
    const title5 = document.getElementById('box-content-title-5');
    title5.textContent = "Hardware Engineer";
    const icon6 = document.getElementById('box-content-image-6');
    icon6.src = "./assets/images/page/KHMT/icon-6.svg";
    const title6 = document.getElementById('box-content-title-6');
    title6.textContent = "Systems Engineer";
}
function khdl() {
    const icon1 = document.getElementById('box-content-image-1');
    icon1.src = "./assets/images/page/KHDL/icon-1.svg";
    const title1 = document.getElementById('box-content-title-1');
    title1.textContent = "Data Product Manager";
    const icon2 = document.getElementById('box-content-image-2');
    icon2.src = "./assets/images/page/KHDL/icon-2.svg";
    const title2 = document.getElementById('box-content-title-2');
    title2.textContent = "Data Manager";  
    const icon3 = document.getElementById('box-content-image-3');
    icon3.src = "./assets/images/page/KHDL/icon-3.svg";
    const title3 = document.getElementById('box-content-title-3');
    title3.textContent = "Risk Analyst";  
    const icon4 = document.getElementById('box-content-image-4');
    icon4.src = "./assets/images/page/KHDL/icon-4.svg";
    const title4 = document.getElementById('box-content-title-4');
    title4.textContent = "Data Analyst";
    const icon5 = document.getElementById('box-content-image-5');
    icon5.src = "./assets/images/page/KHDL/icon-5.svg";
    const title5 = document.getElementById('box-content-title-5');
    title5.textContent = "Data Scientist";
    const icon6 = document.getElementById('box-content-image-6');
    icon6.src = "./assets/images/page/KHDL/icon-6.svg";
    const title6 = document.getElementById('box-content-title-6');
    title6.textContent = "Data Engineer";
}

// Chưa sửa
function httt() {
    const icon1 = document.getElementById('box-content-image-1');
    icon1.src = "./assets/images/page/HTTT/icon-1.svg";
    const title1 = document.getElementById('box-content-title-1');
    title1.textContent = "Data Product Manager";
    const icon2 = document.getElementById('box-content-image-2');
    icon2.src = "./assets/images/page/HTTT/icon-2.svg";
    const title2 = document.getElementById('box-content-title-2');
    title2.textContent = "Big Data Engineer";
    const icon3 = document.getElementById('box-content-image-3');
    icon3.src = "./assets/images/page/HTTT/icon-3.svg";
    const title3 = document.getElementById('box-content-title-3');
    title3.textContent = "Data Analyst";  
    const icon4 = document.getElementById('box-content-image-4');
    icon4.src = "./assets/images/page/HTTT/icon-4.svg";
    const title4 = document.getElementById('box-content-title-4');
    title4.textContent = "System Analyst";
    const icon5 = document.getElementById('box-content-image-5');
    icon5.src = "./assets/images/page/HTTT/icon-5.svg";
    const title5 = document.getElementById('box-content-title-5');
    title5.textContent = "IT Auditor";
    const icon6 = document.getElementById('box-content-image-6');
    icon6.src = "./assets/images/page/HTTT/icon-6.svg";
    const title6 = document.getElementById('box-content-title-6');
    title6.textContent = "Information Systems Manager";
}
function cntt() {
    const icon1 = document.getElementById('box-content-image-1');
    icon1.src = "./assets/images/page/CNTT/icon-1.svg";
    const title1 = document.getElementById('box-content-title-1');
    title1.textContent = "Frontend Developer";
    const icon2 = document.getElementById('box-content-image-2');
    icon2.src = "./assets/images/page/CNTT/icon-2.svg";
    const title2 = document.getElementById('box-content-title-2');
    title2.textContent = "Backend Developer";
    const icon3 = document.getElementById('box-content-image-3');
    icon3.src = "./assets/images/page/CNTT/icon-3.svg";
    const title3 = document.getElementById('box-content-title-3');
    title3.textContent = "Fullstack Developer";  
    const icon4 = document.getElementById('box-content-image-4');
    icon4.src = "./assets/images/page/CNTT/icon-4.svg";
    const title4 = document.getElementById('box-content-title-4');
    title4.textContent = "Mobile Developer";
    const icon5 = document.getElementById('box-content-image-5');
    icon5.src = "./assets/images/page/CNTT/icon-5.svg";
    const title5 = document.getElementById('box-content-title-5');
    title5.textContent = "Game Developer";
    const icon6 = document.getElementById('box-content-image-6');
    icon6.src = "./assets/images/page/CNTT/icon-6.svg";
    const title6 = document.getElementById('box-content-title-6');
    title6.textContent = "Embedded Systems Developer";
}

// lộ trình năm học
function contentYearOne() {
    const yearText = document.getElementById('year-text');
    const yearContent = document.getElementById('page-content');
    if (major === 'ktpm') {
        yearContent.textContent = 'Nội dung cho Năm 1 - Kỹ thuật phần mềm';
    }
    else if (major === 'khmt') {
        yearContent.textContent = 'Nội dung cho Năm 1 - Khoa học máy tính';
    }
    else if (major === 'khdl') {
        yearContent.textContent = 'Nội dung cho Năm 1 - Khoa học dữ liệu lớn';
    }
    else if (major === 'httt') {
        yearContent.textContent = 'Nội dung cho Năm 1 - Hệ thống thông tin';
    }
    else if (major === 'cntt') {
        yearContent.textContent = 'Nội dung cho Năm 1 - Công nghệ thông tin';
    }
}

function nextYear() {
    const yearText = document.getElementById('year-text');
    const yearContent = document.getElementById('page-content');
    if (yearText.textContent.trim() === 'Năm 1') {
        yearText.textContent = 'Năm 2';
        yearContent.textContent = 'Nội dung cho Năm 2';
    } else if (yearText.textContent.trim() === 'Năm 2') {
        yearText.textContent = 'Năm 3';
        yearContent.textContent = 'Nội dung cho Năm 3';
    } else if (yearText.textContent.trim() === 'Năm 3') {
        yearText.textContent = 'Năm 4';
        yearContent.textContent = 'Nội dung cho Năm 4';
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
