// ========================= Student Orientation Page JS (fixed) =========================

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

  // KHÔNG gắn click cho mũi tên ở đây vì HTML đã có onclick=...
  // Nếu bạn bỏ onclick trong HTML, có thể bật 2 dòng dưới:
  // document.querySelector('.previous-page')?.addEventListener('click', previousYear);
  // document.querySelector('.next-page')?.addEventListener('click', nextYear);

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
}
function khmt() {
  setBoxItem(1, "./assets/images/page/KHMT/icon-1.svg", "AI Engineer");
  setBoxItem(2, "./assets/images/page/KHMT/icon-2.svg", "Cyber Security");
  setBoxItem(3, "./assets/images/page/KHMT/icon-3.svg", "Cloud Computing Specialist");
  setBoxItem(4, "./assets/images/page/KHMT/icon-4.svg", "Game Developer");
  setBoxItem(5, "./assets/images/page/KHMT/icon-5.svg", "Hardware Engineer");
  setBoxItem(6, "./assets/images/page/KHMT/icon-6.svg", "Systems Engineer");
}
function khdl() {
  setBoxItem(1, "./assets/images/page/KHDL/icon-1.svg", "Data Product Manager");
  setBoxItem(2, "./assets/images/page/KHDL/icon-2.svg", "Data Manager");
  setBoxItem(3, "./assets/images/page/KHDL/icon-3.svg", "Risk Analyst");
  setBoxItem(4, "./assets/images/page/KHDL/icon-4.svg", "Data Analyst");
  setBoxItem(5, "./assets/images/page/KHDL/icon-5.svg", "Data Scientist");
  setBoxItem(6, "./assets/images/page/KHDL/icon-6.svg", "Data Engineer");
}
function httt() {
  setBoxItem(1, "./assets/images/page/HTTT/icon-1.svg", "Data Product Manager");
  setBoxItem(2, "./assets/images/page/HTTT/icon-2.svg", "Big Data Engineer");
  setBoxItem(3, "./assets/images/page/HTTT/icon-3.svg", "Data Analyst");
  setBoxItem(4, "./assets/images/page/HTTT/icon-4.svg", "System Analyst");
  setBoxItem(5, "./assets/images/page/HTTT/icon-5.svg", "IT Auditor");
  setBoxItem(6, "./assets/images/page/HTTT/icon-6.svg", "Information Systems Manager");
}
function cntt() {
  setBoxItem(1, "./assets/images/page/CNTT/icon-1.svg", "Frontend Developer");
  setBoxItem(2, "./assets/images/page/CNTT/icon-2.svg", "Backend Developer");
  setBoxItem(3, "./assets/images/page/CNTT/icon-3.svg", "Fullstack Developer");
  setBoxItem(4, "./assets/images/page/CNTT/icon-4.svg", "Mobile Developer");
  setBoxItem(5, "./assets/images/page/CNTT/icon-5.svg", "Game Developer");
  setBoxItem(6, "./assets/images/page/CNTT/icon-6.svg", "Embedded Systems Developer");
}

// ---- Nội dung lộ trình theo ngành
const CONTENT_BY_MAJOR = {
  ktpm: [
    'Nội dung cho Năm 1 - Kỹ thuật phần mềm',
    'Nội dung cho Năm 2 - Kỹ thuật phần mềm',
    'Nội dung cho Năm 3 - Kỹ thuật phần mềm',
    'Nội dung cho Năm 4 - Kỹ thuật phần mềm',
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
  yearContent.textContent = list[currentYearIndex] || '';
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

  // Ưu tiên cuộn dọc, mình tự xử lý vuốt ngang
  pageEl.style.touchAction = 'pan-y';

  let tracking = false;
  let startX = 0, startY = 0;
  let activePointerId = null;

  const MIN_SWIPE = 60;      // px tối thiểu
  const MAX_SLOPE = Math.tan(30 * Math.PI / 180); // lệch dọc cho phép (<= 30°)

  pageEl.addEventListener('pointerdown', (e) => {
    // Chỉ xử lý cảm ứng (touch). Nếu muốn hỗ trợ chuột có thể bỏ điều kiện.
    if (e.pointerType !== 'touch') return;
    tracking = true;
    activePointerId = e.pointerId;
    startX = e.clientX;
    startY = e.clientY;
    pageEl.setPointerCapture(activePointerId);
  });

  pageEl.addEventListener('pointerup', (e) => {
    if (!tracking || e.pointerId !== activePointerId) return;

    const now = Date.now();
    if (now - lastSwipeTime < SWIPE_DEBOUNCE_MS) {
      // quá gần lần trước → bỏ qua
      tracking = false;
      pageEl.releasePointerCapture(activePointerId);
      activePointerId = null;
      return;
    }

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // Kiểm tra: vuốt ngang đủ dài và không chéo quá
    if (Math.abs(dx) >= MIN_SWIPE && Math.abs(dy) <= Math.abs(dx) * MAX_SLOPE) {
      lastSwipeTime = now;
      if (dx < 0) nextYear();      // trái → năm sau
      else        previousYear();  // phải → năm trước
    }

    tracking = false;
    pageEl.releasePointerCapture(activePointerId);
    activePointerId = null;
  });

  // Nếu pointer bị cancel (rời khỏi màn hình, v.v.)
  pageEl.addEventListener('pointercancel', () => {
    tracking = false;
    if (activePointerId != null) {
      try { pageEl.releasePointerCapture(activePointerId); } catch {}
      activePointerId = null;
    }
  });
}
