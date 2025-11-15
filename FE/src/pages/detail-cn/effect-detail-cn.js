// ---- State chung
let major = '';                         // 'ktpm' | 'khmt' | 'khdl' | 'httt' | 'cntt'
const YEARS = ['Năm 1', 'Năm 2', 'Năm 3', 'Năm 4'];
let currentYearIndex = 0;

// Chống gọi đúp khi vuốt/click
let isTransitioning = false;
let lastSwipeTime = 0;
const SWIPE_DEBOUNCE_MS = 350;

// ---- Khởi tạo
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  major = (params.get('major') || '').toLowerCase();

  switch (major) {
    case 'ktpm': ktpm(); break;
    case 'khmt': khmt(); break;
    case 'khdl': khdl(); break;
    case 'httt': httt(); break;
    case 'cntt': cntt(); break;
    default:     cntt(); break;
  }

  currentYearIndex = 0;
  renderYear();

  enableSwipeOnPage(); // Vuốt trái/phải chuyển năm
});

// ---- Helper gán icon + title
function setBoxItem(n, imgSrc, title) {
  const imgEl = document.getElementById(`box-content-image-${n}`);
  const titleEl = document.getElementById(`box-content-title-${n}`);
  if (imgEl)   imgEl.src = imgSrc;
  if (titleEl) titleEl.textContent = title;
}

// ---- Danh mục nghề theo ngành
function ktpm() {
  setBoxItem(1, "./assets/images/page/KTPM/icon-1.svg", "DevOps");
  setBoxItem(2, "./assets/images/page/KTPM/icon-2.svg", "Developer");
  setBoxItem(3, "./assets/images/page/KTPM/icon-3.svg", "Tester");
  setBoxItem(4, "./assets/images/page/KTPM/icon-4.svg", "Software Engineer");
  setBoxItem(5, "./assets/images/page/KTPM/icon-5.svg", "Product Owner");
  setBoxItem(6, "./assets/images/page/KTPM/icon-6.svg", "Systems Analyst");
  const boxTitleEl = document.getElementById('box-title');
  if (boxTitleEl) boxTitleEl.textContent = "CHUYÊN NGÀNH KĨ THUẬT PHẦN MỀM Ở IUH";
}
function khmt() {
  setBoxItem(1, "./assets/images/page/KHMT/icon-1.svg", "AI Engineer");
  setBoxItem(2, "./assets/images/page/KHMT/icon-2.svg", "Cyber Security");
  setBoxItem(3, "./assets/images/page/KHMT/icon-3.svg", "Cloud Computing Specialist");
  setBoxItem(4, "./assets/images/page/KHMT/icon-4.svg", "Game Developer");
  setBoxItem(5, "./assets/images/page/KHMT/icon-5.svg", "Hardware Engineer");
  setBoxItem(6, "./assets/images/page/KHMT/icon-6.svg", "Systems Engineer");
  const boxTitleEl = document.getElementById('box-title');
  if (boxTitleEl) boxTitleEl.textContent = "CHUYÊN NGÀNH KHOA HỌC MÁY TÍNH Ở IUH";
}
function khdl() {
  setBoxItem(1, "./assets/images/page/KHDL/icon-1.svg", "Data Product Manager");
  setBoxItem(2, "./assets/images/page/KHDL/icon-2.svg", "Data Manager");
  setBoxItem(3, "./assets/images/page/KHDL/icon-3.svg", "Risk Analyst");
  setBoxItem(4, "./assets/images/page/KHDL/icon-4.svg", "Data Analyst");
  setBoxItem(5, "./assets/images/page/KHDL/icon-5.svg", "Data Scientist");
  setBoxItem(6, "./assets/images/page/KHDL/icon-6.svg", "Data Engineer");
  const boxTitleEl = document.getElementById('box-title');
  if (boxTitleEl) boxTitleEl.textContent = "CHUYÊN NGÀNH KHOA HỌC DỮ LIỆU LỚN Ở IUH";
}
function httt() {
  setBoxItem(1, "./assets/images/page/HTTT/icon-1.svg", "Data Product Manager");
  setBoxItem(2, "./assets/images/page/HTTT/icon-2.svg", "Big Data Engineer");
  setBoxItem(3, "./assets/images/page/HTTT/icon-3.svg", "Data Analyst");
  setBoxItem(4, "./assets/images/page/HTTT/icon-4.svg", "System Analyst");
  setBoxItem(5, "./assets/images/page/HTTT/icon-5.svg", "IT Auditor");
  setBoxItem(6, "./assets/images/page/HTTT/icon-6.svg", "Information Systems Manager");
  const boxTitleEl = document.getElementById('box-title');
  if (boxTitleEl) boxTitleEl.textContent = "CHUYÊN NGÀNH HỆ THỐNG THÔNG TIN Ở IUH";
}
function cntt() {
  setBoxItem(1, "./assets/images/page/CNTT/icon-1.svg", "Frontend Developer");
  setBoxItem(2, "./assets/images/page/CNTT/icon-2.svg", "Backend Developer");
  setBoxItem(3, "./assets/images/page/CNTT/icon-3.svg", "Fullstack Developer");
  setBoxItem(4, "./assets/images/page/CNTT/icon-4.svg", "Mobile Developer");
  setBoxItem(5, "./assets/images/page/CNTT/icon-5.svg", "Game Developer");
  setBoxItem(6, "./assets/images/page/CNTT/icon-6.svg", "Embedded Systems Developer");
  const boxTitleEl = document.getElementById('box-title');
  if (boxTitleEl) boxTitleEl.textContent = "CHUYÊN NGÀNH CÔNG NGHỆ THÔNG TIN Ở IUH";
}

// ---- Nội dung lộ trình theo ngành
const CONTENT_BY_MAJOR = {
  ktpm: [
    // Năm 1
    `
    <div class="page-content-item">
      Học kỳ 1
      <div class="sub-item">Nhập môn tin học</div>
      <div class="sub-item">Nhập môn lập trình</div>
    </div>
    <div class="page-content-item">
      Học kỳ 2
      <div class="sub-item">Kĩ thuật lập trình</div>
      <div class="sub-item">Hệ thống máy tính</div>
    </div>
    <div class="page-current">
      <span class="page-1" style="background: linear-gradient(135deg, #00FFD0, #00C9FF)"></span>
      <span class="page-2"></span>
      <span class="page-3"></span>
      <span class="page-4"></span>
      <span class="page-5"></span>
    </div>
    `,
    // Năm 2
    `
    <div class="page-content-item">
      Học kỳ 3
      <div class="sub-item">Cấu trúc dữ liệu & Giải thuật</div>
      <div class="sub-item">Lập trình hướng đối tượng</div>
    </div>
    <div class="page-content-item">
      Học kỳ 4
      <div class="sub-item">Cơ sở dữ liệu</div>
      <div class="sub-item">Phân tích & Thiết kế phần mềm</div>
    </div>
    <div class="page-current">
      <span class="page-1""></span>
      <span class="page-2" style="background: linear-gradient(135deg, #00FFD0, #00C9FF)"></span>
      <span class="page-3"></span>
      <span class="page-4"></span>
      <span class="page-5"></span>
    </div>
    `,
    // Năm 3
    `
    <div class="page-content-item">
      Học kỳ 5
      <div class="sub-item">Công nghệ phần mềm</div>
      <div class="sub-item">Lập trình web</div>
    </div>
    <div class="page-content-item">
      Học kỳ 6
      <div class="sub-item">Kiểm thử phần mềm</div>
      <div class="sub-item">Phát triển ứng dụng di động</div>
    </div>
    <div class="page-current">
      <span class="page-1""></span>
      <span class="page-2"></span>
      <span class="page-3" style="background: linear-gradient(135deg, #00FFD0, #00C9FF)"></span>
      <span class="page-4"></span>
      <span class="page-5"></span>
    </div>
    `,
    // Năm 4
    `
    <div class="page-content-item">
      Học kỳ 7
      <div class="sub-item">Đồ án chuyên ngành</div>
      <div class="sub-item">Quản lý dự án phần mềm</div>
    </div>
    <div class="page-content-item">
      Học kỳ 8
      <div class="sub-item">Thực tập tốt nghiệp</div>
      <div class="sub-item">Khóa luận tốt nghiệp</div>
    </div>
    <div class="page-current">
      <span class="page-1""></span>
      <span class="page-2"></span>
      <span class="page-3"></span>
      <span class="page-4" style="background: linear-gradient(135deg, #00FFD0, #00C9FF)"></span>
      <span class="page-5"></span>
    </div>
    `,
  ],
  khmt: [
    'Nội dung cho Năm 1 - Khoa học máy tính',
    'Nội dung cho Năm 2 - Khoa học máy tính',
    'Nội dung cho Năm 3 - Khoa học máy tính',
    'Nội dung cho Năm 4 - Khoa học máy tính',
  ],
  khdl: [
    'Nội dung cho Năm 1 - Khoa học dữ liệu lớn',
    'Nội dung cho Năm 2 - Khoa học dữ liệu lớn',
    'Nội dung cho Năm 3 - Khoa học dữ liệu lớn',
    'Nội dung cho Năm 4 - Khoa học dữ liệu lớn',
  ],
  httt: [
    'Nội dung cho Năm 1 - Hệ thống thông tin',
    'Nội dung cho Năm 2 - Hệ thống thông tin',
    'Nội dung cho Năm 3 - Hệ thống thông tin',
    'Nội dung cho Năm 4 - Hệ thống thông tin',
  ],
  cntt: [
    'Nội dung cho Năm 1 - Công nghệ thông tin',
    'Nội dung cho Năm 2 - Công nghệ thông tin',
    'Nội dung cho Năm 3 - Công nghệ thông tin',
    'Nội dung cho Năm 4 - Công nghệ thông tin',
  ],

};

// ---- Render năm hiện tại
function renderYear() {
  const yearText = document.getElementById('year-text');
  const yearContent = document.getElementById('page-content');
  if (!yearText || !yearContent) return;

  yearText.textContent = YEARS[currentYearIndex];
  const list = CONTENT_BY_MAJOR[major] || CONTENT_BY_MAJOR['cntt'];
  yearContent.innerHTML = list[currentYearIndex] || '';
}

// ---- Chuyển năm (đã có khoá isTransitioning + debounce)
function nextYear() {
  if (isTransitioning) return;
  if (currentYearIndex < YEARS.length - 1) {
    isTransitioning = true;
    currentYearIndex++;
    renderYear();
    setTimeout(() => { isTransitioning = false; }, 250);
  }
}
function previousYear() {
  if (isTransitioning) return;
  if (currentYearIndex > 0) {
    isTransitioning = true;
    currentYearIndex--;
    renderYear();
    setTimeout(() => { isTransitioning = false; }, 250);
  }
}

// ---- Vuốt trái/phải: dùng Pointer Events để tránh sự kiện kép
function enableSwipeOnPage() {
  const pageEl = document.querySelector('.page');
  if (!pageEl) return;

  pageEl.style.touchAction = 'pan-y';

  let tracking = false;
  let startX = 0, startY = 0;
  let activePointerId = null;

  const MIN_SWIPE = 60;
  const MAX_SLOPE = Math.tan(30 * Math.PI / 180);

  pageEl.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'touch') return;
    tracking = true;
    activePointerId = e.pointerId;
    startX = e.clientX;
    startY = e.clientY;
    pageEl.setPointerCapture(activePointerId);

    if (window.innerWidth <= 600) {
      pageEl.classList.add('is-dragging');
    }
  });

  // 🔹 Vuốt mượt theo ngón tay
  pageEl.addEventListener('pointermove', (e) => {
    if (!tracking || e.pointerId !== activePointerId || window.innerWidth > 600) return;
    const dx = e.clientX - startX;
    pageEl.style.transform = `translateX(${dx * 0.4}px) scale(0.97)`; // trượt nhẹ theo tay
    pageEl.style.opacity = `${Math.max(0.6, 1 - Math.abs(dx) / 300)}`;
  });

  pageEl.addEventListener('pointerup', (e) => {
    if (!tracking || e.pointerId !== activePointerId) return;

    const now = Date.now();
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // reset transform về 0 nếu không vuốt đủ
    pageEl.style.transform = '';
    pageEl.style.opacity = '';

    if (now - lastSwipeTime < SWIPE_DEBOUNCE_MS) {
      tracking = false;
      pageEl.releasePointerCapture(activePointerId);
      activePointerId = null;
      pageEl.classList.remove('is-dragging');
      return;
    }

    if (Math.abs(dx) >= MIN_SWIPE && Math.abs(dy) <= Math.abs(dx) * MAX_SLOPE) {
      lastSwipeTime = now;

      // Thêm hiệu ứng mượt cho mobile
      if (window.innerWidth <= 600) {
        pageEl.classList.add('swipe-transition');
        setTimeout(() => pageEl.classList.remove('swipe-transition'), 450);
      }

      if (dx < 0) nextYear();
      else previousYear();
    }

    tracking = false;
    pageEl.releasePointerCapture(activePointerId);
    activePointerId = null;
    pageEl.classList.remove('is-dragging');
  });

  pageEl.addEventListener('pointercancel', () => {
    tracking = false;
    if (activePointerId != null) {
      try { pageEl.releasePointerCapture(activePointerId); } catch {}
      activePointerId = null;
    }
    pageEl.classList.remove('is-dragging');
  });
}

const nextPageIcon = document.querySelector('.next-page');
nextPageIcon.addEventListener('click',(e) => {
  e.stopPropagation();
  nextYear();
})

const previousPageIcon = document.querySelector('.previous-page');
previousPageIcon.addEventListener('click',(e) => {
  e.stopPropagation();
  previousYear();
})

