// ========================= Student Orientation Page JS (Required / Optional toggle) =========================

// ---- State chung
let major = ''; // 'ktpm' | 'khmt' | 'khdl' | 'httt' | 'cntt'

// 8 học kì + 1 tổng kết
const SEMESTERS = [
  'Năm 1 - Học kì 1',
  'Năm 1 - Học kì 2',
  'Năm 2 - Học kì 3',
  'Năm 2 - Học kì 4',
  'Năm 3 - Học kì 5',
  'Năm 3 - Học kì 6',
  'Năm 4 - Học kì 7',
  'Năm 4 - Học kì 8',
  'Tổng kết 4 năm',
];

let currentSemesterIndex = 0;
// true = Bắt buộc, false = Tự chọn
let isRequiredMode = true;

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

  currentSemesterIndex = 0;
  isRequiredMode = true;
  renderSemester();

  enableSwipeOnPage(); // Vuốt trái/phải
});

// ---- Helper gán icon + title
function setBoxItem(n, imgSrc, title) {
  const imgEl = document.getElementById(`box-content-image-${n}`);
  const titleEl = document.getElementById(`box-content-title-${n}`);
  if (imgEl)   imgEl.src = imgSrc;
  if (titleEl) titleEl.textContent = title;
}

// ---- Danh mục nghề / mô tả trên
function ktpm() {
  setBoxItem(1, "./assets/images/page/KTPM/icon-1.svg", "DevOps");
  setBoxItem(2, "./assets/images/page/KTPM/icon-2.svg", "Developer");
  setBoxItem(3, "./assets/images/page/KTPM/icon-3.svg", "Tester");
  setBoxItem(4, "./assets/images/page/KTPM/icon-4.svg", "Software Engineer");
  setBoxItem(5, "./assets/images/page/KTPM/icon-5.svg", "Product Owner");
  setBoxItem(6, "./assets/images/page/KTPM/icon-6.svg", "Systems Analyst");
  const boxTitleEl = document.getElementById('box-title');
  if (boxTitleEl) boxTitleEl.textContent = "CHUYÊN NGÀNH KĨ THUẬT PHẦN MỀM Ở IUH";

  const boxContentE1 = document.getElementById('box-content-1');
  if (boxContentE1) boxContentE1.innerHTML = `
  - Kỹ thuật Phần mềm (Software Engineering) là ngành học chuyên sâu về thiết kế, phát triển, triển khai và bảo trì các hệ thống phần mềm. Đây là một lĩnh vực quan trọng trong Công nghệ Thông tin, kết hợp giữa tư duy kỹ thuật, khoa học máy tính và quy trình quản lý dự án để tạo ra những sản phẩm phần mềm chất lượng, ổn định và đáp ứng nhu cầu người dùng.<br>
  - Ngành này đặc biệt phù hợp với những bạn yêu thích lập trình và muốn trực tiếp tham gia vào quá trình xây dựng các ứng dụng, chương trình hoặc hệ thống thực tế. Từ việc phân tích yêu cầu, thiết kế kiến trúc, viết mã, đến kiểm thử và bảo trì, kỹ sư phần mềm là người biến ý tưởng thành sản phẩm công nghệ có giá trị.<br>
  - Thực tế, phần mềm hiện diện ở khắp mọi nơi trong đời sống hiện đại: từ các ứng dụng văn phòng như Word, Excel, PowerPoint đến trình duyệt web như Chrome, Firefox, hay thậm chí hệ điều hành như Windows, macOS, Linux đều là kết quả của kỹ thuật phần mềm.
  `;
  const boxContentE2 = document.getElementById('box-content-2');
  if (boxContentE2) boxContentE2.innerHTML = `
  Theo báo cáo của Tổ chức Lao động Quốc tế (ILO), Việt Nam là quốc gia có con số thấp nhất về lực lượng Kỹ thuật 
  phần mềm so với nhu cầu của thị trường. Năm 2025, dự kiến số lượng nhân viên Kỹ thuật phần mềm tại Việt Nam sẽ 
  đạt khoảng 400.000 người. Điều này cho thấy rõ tiềm năng và cơ hội việc làm của ngành này. Ngoài ra, các doanh 
  nghiệp công nghệ lớn đang đầu tư vào Việt Nam và tuyển dụng nhân viên Kỹ thuật phần mềm. Ví dụ, tập đoàn Samsung 
  đã thành lập Trung tâm Nghiên cứu và Phát triển Tài nguyên Mở (SRVI) tại Việt Nam và tuyển dụng hàng trăm kỹ sư 
  phần mềm. Các công ty khác như FPT, VinGroup và VNG cũng đang tuyển dụng nhân viên Kỹ thuật phần mềm với số lượng 
  lớn.
  `;
  const boxContentE3 = document.getElementById('box-content-3');
  if (boxContentE3) boxContentE3.innerHTML = `
  Hiện nay ngành kỹ thuật phần mềm đang trên đà phát triển và sẽ còn tiến xa hơn trong tương lai, thế nên nhu cầu 
  tuyển dụng của ngành nghề này là rất lớn. Các sinh viên theo học kỹ thuật phần mềm sau khi ra trường có thể dễ 
  dàng tham gia vào các dự án vừa và lớn cho các doanh nghiệp. Hoặc tiếp tục học lên bậc cao hơn như thạc sĩ hay 
  tiến sĩ để mở ra nhiều cơ hội tốt hơn, hay đi theo con đường nghiên cứu khoa học để góp phần mang lại nhiều công 
  nghệ phần mềm mới cho đất nước.
  `;
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

// ---- Lộ trình: mỗi học kì = { required, optional }.
// HTML bên trong chỉ dùng class: text, page-content-item, sub-item (giống code cũ).

const CONTENT_BY_MAJOR = {
  ktpm: [
    // 0: N1 - HK1 (chỉ bắt buộc)
    {
      required: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[0]}</b></div>
          <div class="sub-item"><i>Bắt buộc</i></div>
          <div class="sub-item">Nhập môn tin học</div>
          <div class="sub-item">Nhập môn lập trình</div>
          <div class="sub-item">Toán cao cấp A1</div>
          <div class="sub-item">Kỹ năng mềm cơ bản</div>
          <div class="sub-item">Pháp luật đại cương / Giáo dục thể chất</div>
        </div>
      `,
      optional: null,
    },

    // 1: N1 - HK2
    {
      required: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[1]}</b></div>
          <div class="sub-item"><i>Bắt buộc</i></div>
          <div class="sub-item">Kỹ thuật lập trình</div>
          <div class="sub-item">Hệ thống máy tính</div>
          <div class="sub-item">Cấu trúc rời rạc</div>
          <div class="sub-item">Tiếng Anh cơ bản cho CNTT</div>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[1]}</b></div>
          <div class="sub-item"><i>Tự chọn</i></div>
          <div class="sub-item">Phương pháp tính</div>
          <div class="sub-item">Hàm phức và phép biến đổi Laplace</div>
          <div class="sub-item">Logic học</div>
        </div>
      `,
    },

    // 2: N2 - HK3
    {
      required: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[2]}</b></div>
          <div class="sub-item"><i>Bắt buộc</i></div>
          <div class="sub-item">Cấu trúc dữ liệu & Giải thuật</div>
          <div class="sub-item">Lập trình hướng đối tượng</div>
          <div class="sub-item">Hệ điều hành</div>
          <div class="sub-item">Toán ứng dụng cho CNTT</div>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[2]}</b></div>
          <div class="sub-item"><i>Tự chọn</i></div>
          <div class="sub-item">Lập trình Java cơ bản</div>
          <div class="sub-item">Lập trình C++ nâng cao</div>
          <div class="sub-item">Kỹ năng đọc tài liệu tiếng Anh</div>
        </div>
      `,
    },

    // 3: N2 - HK4
    {
      required: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[3]}</b></div>
          <div class="sub-item"><i>Bắt buộc</i></div>
          <div class="sub-item">Cơ sở dữ liệu</div>
          <div class="sub-item">Mạng máy tính</div>
          <div class="sub-item">Phân tích & Thiết kế hệ thống</div>
          <div class="sub-item">Kiến trúc máy tính</div>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[3]}</b></div>
          <div class="sub-item"><i>Tự chọn</i></div>
          <div class="sub-item">SQL nâng cao & tối ưu truy vấn</div>
          <div class="sub-item">Thực hành quản trị cơ sở dữ liệu</div>
          <div class="sub-item">Nhập môn An toàn thông tin</div>
        </div>
      `,
    },

    // 4: N3 - HK5
    {
      required: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[4]}</b></div>
          <div class="sub-item"><i>Bắt buộc</i></div>
          <div class="sub-item">Công nghệ phần mềm</div>
          <div class="sub-item">Lập trình web</div>
          <div class="sub-item">Quản lý dự án phần mềm (cơ bản)</div>
          <div class="sub-item">Mô hình hóa UML & thiết kế hệ thống</div>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[4]}</b></div>
          <div class="sub-item"><i>Tự chọn</i></div>
          <div class="sub-item">Lập trình web với JavaScript/TypeScript</div>
          <div class="sub-item">Thiết kế UI/UX cơ bản</div>
          <div class="sub-item">Phát triển web với framework (VD: React, Spring Boot)</div>
        </div>
      `,
    },

    // 5: N3 - HK6
    {
      required: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[5]}</b></div>
          <div class="sub-item"><i>Bắt buộc</i></div>
          <div class="sub-item">Kiểm thử phần mềm</div>
          <div class="sub-item">Phát triển ứng dụng di động</div>
          <div class="sub-item">Công nghệ mới trong phát triển phần mềm</div>
          <div class="sub-item">Quy trình & chất lượng phần mềm</div>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[5]}</b></div>
          <div class="sub-item"><i>Tự chọn</i></div>
          <div class="sub-item">Kiểm thử tự động (Automation Testing)</div>
          <div class="sub-item">Ứng dụng di động đa nền tảng</div>
          <div class="sub-item">DevOps cơ bản (Git, CI/CD, Docker)</div>
        </div>
      `,
    },

    // 6: N4 - HK7
    {
      required: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[6]}</b></div>
          <div class="sub-item"><i>Bắt buộc</i></div>
          <div class="sub-item">Đồ án chuyên ngành Kỹ thuật phần mềm</div>
          <div class="sub-item">Quản lý dự án phần mềm (nâng cao)</div>
          <div class="sub-item">Phân tích yêu cầu nâng cao</div>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[6]}</b></div>
          <div class="sub-item"><i>Tự chọn</i></div>
          <div class="sub-item">Chuyên đề Công nghệ web nâng cao</div>
          <div class="sub-item">Chuyên đề Lập trình hướng dịch vụ (Microservices)</div>
          <div class="sub-item">Khởi nghiệp CNTT & kỹ năng nghề nghiệp</div>
        </div>
      `,
    },

    // 7: N4 - HK8
    {
      required: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[7]}</b></div>
          <div class="sub-item"><i>Bắt buộc</i></div>
          <div class="sub-item">Thực tập tốt nghiệp tại doanh nghiệp</div>
          <div class="sub-item">Khóa luận / Đồ án tốt nghiệp</div>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="page-content-item">
          <div class="sub-item"><b>${SEMESTERS[7]}</b></div>
          <div class="sub-item"><i>Tự chọn</i></div>
          <div class="sub-item">Chuyên đề kỹ năng phỏng vấn & CV IT</div>
          <div class="sub-item">Chuyên đề định hướng nghề nghiệp (Dev, Tester, BA, DevOps...)</div>
          <div class="sub-item">Chuyên đề nghiên cứu khoa học sinh viên</div>
        </div>
      `,
    },

    // 8: Tổng kết 4 năm
    {
      required: `
        <div class="text">Tổng kết 4 năm Kỹ thuật Phần mềm</div>
        <div class="page-content-item">
          <div class="sub-item">✔ Nền tảng vững về lập trình, cấu trúc dữ liệu, giải thuật, HĐH, mạng, CSDL.</div>
          <div class="sub-item">✔ Hiểu quy trình phát triển phần mềm, phân tích & thiết kế hệ thống (UML).</div>
          <div class="sub-item">✔ Có sản phẩm thực tế từ đồ án / khóa luận để đưa vào CV.</div>
          <div class="sub-item">✔ Sẵn sàng ứng tuyển Software Engineer, Web/Mobile Dev, QA/Tester, DevOps junior, BA junior,...</div>
        </div>
      `,
      optional: null,
    },
  ],

  // Các ngành khác: placeholder cho đúng cấu trúc (em chỉnh sau)
  khmt: Array.from({ length: 9 }, (_, i) => ({
    required: `
      <div class="text">Môn học</div>
      <div class="page-content-item">
        <div class="sub-item"><b>${SEMESTERS[i]}</b></div>
        <div class="sub-item"><i>Bắt buộc</i></div>
        <div class="sub-item">Nội dung bắt buộc KHMT - Học kì ${i + 1}</div>
      </div>
    `,
    optional: i === 0 || i === 8 ? null : `
      <div class="text">Môn học</div>
      <div class="page-content-item">
        <div class="sub-item"><b>${SEMESTERS[i]}</b></div>
        <div class="sub-item"><i>Tự chọn</i></div>
        <div class="sub-item">Nội dung tự chọn KHMT - Học kì ${i + 1}</div>
      </div>
    `,
  })),

  khdl: Array.from({ length: 9 }, (_, i) => ({
    required: `
      <div class="text">Môn học</div>
      <div class="page-content-item">
        <div class="sub-item"><b>${SEMESTERS[i]}</b></div>
        <div class="sub-item"><i>Bắt buộc</i></div>
        <div class="sub-item">Nội dung bắt buộc KHDL - Học kì ${i + 1}</div>
      </div>
    `,
    optional: i === 0 || i === 8 ? null : `
      <div class="text">Môn học</div>
      <div class="page-content-item">
        <div class="sub-item"><b>${SEMESTERS[i]}</b></div>
        <div class="sub-item"><i>Tự chọn</i></div>
        <div class="sub-item">Nội dung tự chọn KHDL - Học kì ${i + 1}</div>
      </div>
    `,
  })),

  httt: Array.from({ length: 9 }, (_, i) => ({
    required: `
      <div class="text">Môn học</div>
      <div class="page-content-item">
        <div class="sub-item"><b>${SEMESTERS[i]}</b></div>
        <div class="sub-item"><i>Bắt buộc</i></div>
        <div class="sub-item">Nội dung bắt buộc HTTT - Học kì ${i + 1}</div>
      </div>
    `,
    optional: i === 0 || i === 8 ? null : `
      <div class="text">Môn học</div>
      <div class="page-content-item">
        <div class="sub-item"><b>${SEMESTERS[i]}</b></div>
        <div class="sub-item"><i>Tự chọn</i></div>
        <div class="sub-item">Nội dung tự chọn HTTT - Học kì ${i + 1}</div>
      </div>
    `,
  })),

  cntt: Array.from({ length: 9 }, (_, i) => ({
    required: `
      <div class="text">Môn học</div>
      <div class="page-content-item">
        <div class="sub-item"><b>${SEMESTERS[i]}</b></div>
        <div class="sub-item"><i>Bắt buộc</i></div>
        <div class="sub-item">Nội dung bắt buộc CNTT - Học kì ${i + 1}</div>
      </div>
    `,
    optional: i === 0 || i === 8 ? null : `
      <div class="text">Môn học</div>
      <div class="page-content-item">
        <div class="sub-item"><b>${SEMESTERS[i]}</b></div>
        <div class="sub-item"><i>Tự chọn</i></div>
        <div class="sub-item">Nội dung tự chọn CNTT - Học kì ${i + 1}</div>
      </div>
    `,
  })),
};

// ---- Render học kì hiện tại
function renderSemester() {
  const yearText = document.getElementById('year-text');
  const yearContent = document.getElementById('page-content');
  if (!yearText || !yearContent) return;

  const list = CONTENT_BY_MAJOR[major] || CONTENT_BY_MAJOR['cntt'];
  const sem = list[currentSemesterIndex];

  yearText.textContent = SEMESTERS[currentSemesterIndex];

  const html = (isRequiredMode || !sem.optional) ? sem.required : sem.optional;
  yearContent.innerHTML = html || '';
}

// ---- Điều khiển next / prev (mũi tên + vuốt)
function nextYear() {
  if (isTransitioning) return;

  const list = CONTENT_BY_MAJOR[major] || CONTENT_BY_MAJOR['cntt'];
  const sem = list[currentSemesterIndex];

  isTransitioning = true;

  // đang Bắt buộc + có Tự chọn -> chuyển sang Tự chọn cùng kì
  if (isRequiredMode && sem.optional) {
    isRequiredMode = false;
  } else {
    // sang học kì tiếp, về Bắt buộc
    if (currentSemesterIndex < list.length - 1) {
      currentSemesterIndex++;
      isRequiredMode = true;
    }
  }

  renderSemester();
  setTimeout(() => { isTransitioning = false; }, 250);
}

function previousYear() {
  if (isTransitioning) return;

  const list = CONTENT_BY_MAJOR[major] || CONTENT_BY_MAJOR['cntt'];
  const sem = list[currentSemesterIndex];

  isTransitioning = true;

  // đang Tự chọn + kì này có Tự chọn -> quay về Bắt buộc cùng kì
  if (!isRequiredMode && sem.optional) {
    isRequiredMode = true;
  } else {
    // lùi về kì trước
    if (currentSemesterIndex > 0) {
      currentSemesterIndex--;
      const prevSem = list[currentSemesterIndex];
      // đi lùi: nếu kì trước có tự chọn → vào luôn tự chọn (cho mượt)
      isRequiredMode = prevSem.optional ? false : true;
    }
  }

  renderSemester();
  setTimeout(() => { isTransitioning = false; }, 250);
}

// ---- Vuốt trái/phải: Pointer Events
// ---- Vuốt trái/phải: hỗ trợ cả Pointer Events và Touch Events
function enableSwipeOnPage() {
  const pageEl = document.querySelector('.page');
  if (!pageEl) return;

  const MIN_SWIPE = 60;
  const MAX_SLOPE = Math.tan(30 * Math.PI / 180); // ~tan(30deg)

  let tracking = false;
  let startX = 0, startY = 0;

  // ====== 1. Dùng Pointer Events nếu trình duyệt hỗ trợ ======
  if (window.PointerEvent) {
    let activePointerId = null;

    // cho phép vuốt ngang nhưng vẫn scroll dọc
    pageEl.style.touchAction = 'pan-y';

    pageEl.addEventListener('pointerdown', (e) => {
      // Chỉ bỏ qua mouse/pen, còn lại (touch hoặc rỗng) đều nhận
      if (e.pointerType === 'mouse' || e.pointerType === 'pen') return;

      tracking = true;
      activePointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      pageEl.setPointerCapture(activePointerId);

      if (window.innerWidth <= 600) {
        pageEl.classList.add('is-dragging');
      }
    });

    pageEl.addEventListener('pointermove', (e) => {
      if (!tracking || e.pointerId !== activePointerId || window.innerWidth > 600) return;
      const dx = e.clientX - startX;
      pageEl.style.transform = `translateX(${dx * 0.4}px) scale(0.97)`;
      pageEl.style.opacity = `${Math.max(0.6, 1 - Math.abs(dx) / 300)}`;
    });

    pageEl.addEventListener('pointerup', (e) => {
      if (!tracking || e.pointerId !== activePointerId) return;

      const now = Date.now();
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      // reset effect
      pageEl.style.transform = '';
      pageEl.style.opacity = '';

      if (now - lastSwipeTime >= SWIPE_DEBOUNCE_MS &&
          Math.abs(dx) >= MIN_SWIPE &&
          Math.abs(dy) <= Math.abs(dx) * MAX_SLOPE) {

        lastSwipeTime = now;

        if (window.innerWidth <= 600) {
          pageEl.classList.add('swipe-transition');
          setTimeout(() => pageEl.classList.remove('swipe-transition'), 450);
        }

        if (dx < 0) nextYear();
        else previousYear();
      }

      tracking = false;
      try { pageEl.releasePointerCapture(activePointerId); } catch {}
      activePointerId = null;
      pageEl.classList.remove('is-dragging');
    });

    pageEl.addEventListener('pointercancel', () => {
      tracking = false;
      activePointerId = null;
      pageEl.style.transform = '';
      pageEl.style.opacity = '';
      pageEl.classList.remove('is-dragging');
    });

    return; // đã set xong Pointer Events, khỏi set touch nữa
  }

  // ====== 2. Fallback: dùng Touch Events (iOS rất cũ) ======
  pageEl.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    const t = e.touches[0];
    tracking = true;
    startX = t.clientX;
    startY = t.clientY;

    if (window.innerWidth <= 600) {
      pageEl.classList.add('is-dragging');
    }
  }, { passive: true });

  pageEl.addEventListener('touchmove', (e) => {
    if (!tracking || window.innerWidth > 600) return;
    const t = e.touches[0];
    const dx = t.clientX - startX;
    pageEl.style.transform = `translateX(${dx * 0.4}px) scale(0.97)`;
    pageEl.style.opacity = `${Math.max(0.6, 1 - Math.abs(dx) / 300)}`;
  }, { passive: true });

  pageEl.addEventListener('touchend', (e) => {
    if (!tracking) return;

    const now = Date.now();
    const t = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;

    pageEl.style.transform = '';
    pageEl.style.opacity = '';

    if (now - lastSwipeTime >= SWIPE_DEBOUNCE_MS &&
        Math.abs(dx) >= MIN_SWIPE &&
        Math.abs(dy) <= Math.abs(dx) * MAX_SLOPE) {

      lastSwipeTime = now;

      if (window.innerWidth <= 600) {
        pageEl.classList.add('swipe-transition');
        setTimeout(() => pageEl.classList.remove('swipe-transition'), 450);
      }

      if (dx < 0) nextYear();
      else previousYear();
    }

    tracking = false;
    pageEl.classList.remove('is-dragging');
  }, { passive: true });

  pageEl.addEventListener('touchcancel', () => {
    tracking = false;
    pageEl.style.transform = '';
    pageEl.style.opacity = '';
    pageEl.classList.remove('is-dragging');
  });
}
