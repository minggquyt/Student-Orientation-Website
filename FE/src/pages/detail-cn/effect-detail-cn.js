<<<<<<< HEAD:FE/src/pages/detail-cn/effect-detail-cn.js
=======
// ========================= Student Orientation Page JS (Required / Optional toggle) =========================

>>>>>>> c723d8c9816a61a03a42b463ca82b0d940c35949:FE/src/pages/page.js
// ---- State chung
let major = ''; // 'ktpm' | 'khmt' | 'khdl' | 'httt' | 'cntt'

// 8 học kì + 1 tổng kết
const SEMESTERS = [
  'Năm 1',
  'Năm 1',
  'Năm 2',
  'Năm 2',
  'Năm 3',
  'Năm 3',
  'Năm 4',
  'Năm 4',
  'Tổng kết 4 năm',
];
const SEMESTERS_DETAIL = [
  'Học Kỳ 1',
  'Học Kỳ 2',
  'Học Kỳ 3',
  'Học Kỳ 4',
  'Học Kỳ 5',
  'Học Kỳ 6',
  'Học Kỳ 7',
  'Học Kỳ 8',
  '',
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

<<<<<<< HEAD:FE/src/pages/detail-cn/effect-detail-cn.js
  enableSwipeOnPage(); // Vuốt trái/phải chuyển năm
=======
  enableSwipeOnPage(); // Vuốt trái/phải
>>>>>>> c723d8c9816a61a03a42b463ca82b0d940c35949:FE/src/pages/page.js
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
  const boxContentE1 = document.getElementById('box-content-1');
  if (boxContentE1) boxContentE1.innerHTML = `
  - Khoa học máy tính (Computer Science) là ngành học nghiên cứu toàn diện về cấu trúc, nguyên lý hoạt động và ứng dụng của hệ thống máy tính. Ngành này bao gồm cả các lý thuyết nền tảng về tính toán, thông tin, thuật toán cho đến những khía cạnh thực hành trong việc xây dựng và vận hành hệ thống máy tính.<br>
  - Bên cạnh đó, Khoa học máy tính còn mở rộng sang các lĩnh vực như hệ điều hành, xử lý dữ liệu, ngôn ngữ lập trình, và thiết kế – phát triển phần mềm. Ở mức độ cao hơn, ngành cũng nghiên cứu trí tuệ nhân tạo (AI), an toàn và bảo mật thông tin, công nghệ web và môi trường mạng.<br>
  - Tại IUH, ngành Khoa học máy tính hiện đang đào tạo thêm 2 chuyên ngành: Trí tuệ nhân tạo và Khoa học dữ liệu.
  `;

  const boxContentE2 = document.getElementById('box-content-2');
  if (boxContentE2) boxContentE2.innerHTML = `
  Ngành Khoa học máy tính đang bùng nổ với nhu cầu cao, dự kiến tăng trưởng 15–20% trong thập kỷ tới, tạo ra hàng triệu cơ hội việc làm với mức lương khởi điểm trung bình 70–150 triệu VND/tháng.
  Các vai trò phổ biến bao gồm lập trình viên, kỹ sư dữ liệu, chuyên gia AI, chuyên gia an ninh mạng, kỹ sư đám mây và giảng viên — đặc biệt trong các lĩnh vực IT, fintech, y tế, giáo dục, chính phủ và startup.
  Xu hướng như AI, big data và điện toán đám mây đang thúc đẩy mạnh sự phát triển của ngành, nhất là tại Việt Nam với mục tiêu đạt 500.000 lao động IT vào năm 2025.
  `;

  const boxContentE3 = document.getElementById('box-content-3');
  if (boxContentE3) boxContentE3.innerHTML = `
  Ngành Khoa học máy tính đang đối mặt với nhu cầu tuyển dụng cực kỳ cao, với dự báo tăng trưởng việc làm 15–20% toàn cầu trong thập kỷ tới theo Bureau of Labor Statistics. Tại Việt Nam, Bộ Thông tin và Truyền thông ước tính cần thêm 500.000 lao động IT vào năm 2025 để đáp ứng quá trình số hóa và phát triển công nghệ.
  Các vị trí nổi bật như lập trình viên, kỹ sư dữ liệu, chuyên gia AI, an ninh mạng và kỹ sư đám mây được tuyển dụng mạnh trong các lĩnh vực IT, fintech, y tế, giáo dục và chính phủ, với mức lương khởi điểm 70–150 triệu VND/tháng.
  Sự bùng nổ của AI, big data và cloud khiến nhiều công ty như Google, FPT và các startup Việt Nam liên tục mở vị trí tuyển dụng, đòi hỏi ứng viên có kỹ năng cập nhật như Python, Java và các chứng chỉ điện toán đám mây.
  `;

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
  const boxContentE1 = document.getElementById('box-content-1');
  if (boxContentE1) boxContentE1.innerHTML = `
  - Hệ thống Thông tin (Information Systems – IS) là ngành học nghiên cứu cách kết hợp giữa con người, công nghệ và quy trình để thu thập, xử lý, lưu trữ và phân phối thông tin phục vụ cho hoạt động quản lý và ra quyết định trong các tổ chức. Có thể xem hệ thống thông tin như “bộ não” giúp doanh nghiệp hiểu rõ tình hình, tối ưu vận hành và nâng cao hiệu quả kinh doanh.<br>
  - Trong mỗi doanh nghiệp, hệ thống thông tin đóng vai trò quan trọng trong việc quản lý nhân sự, tài chính, dữ liệu khách hàng và chuỗi cung ứng, đồng thời cung cấp các báo cáo và phản hồi kịp thời để nhà quản lý đưa ra quyết định chính xác hơn.
  `;

  const boxContentE2 = document.getElementById('box-content-2');
  if (boxContentE2) boxContentE2.innerHTML = `
  Ngành Hệ thống Thông tin (Information Systems) đang phát triển mạnh mẽ với nhu cầu tích hợp công nghệ vào quản lý doanh nghiệp, dự kiến tăng trưởng 10–15% trong thập kỷ tới. Ngành mang lại nhiều cơ hội việc làm với mức lương khởi điểm trung bình 60–120 triệu VND/tháng.<br>
  Các vai trò phổ biến bao gồm quản trị viên hệ thống, phân tích viên kinh doanh (BA), quản lý dự án IT, chuyên gia ERP và tư vấn viên CNTT, đặc biệt trong các lĩnh vực ngân hàng, y tế, bán lẻ, chính phủ và các công ty công nghệ.<br>
  Xu hướng số hóa doanh nghiệp, big data và điện toán đám mây đang thúc đẩy mạnh mẽ sự phát triển của ngành, nhất là tại Việt Nam khi nền kinh tế số đang bùng nổ.
  `;

  const boxContentE3 = document.getElementById('box-content-3');
  if (boxContentE3) boxContentE3.innerHTML = `
  Ngành Hệ thống Thông tin (Information Systems – IS) đang ghi nhận nhu cầu tuyển dụng tăng mạnh với mức tăng trưởng dự kiến 10–15% trong thập kỷ tới, tập trung vào việc quản lý và ứng dụng công nghệ để tối ưu hóa hoạt động doanh nghiệp.
  Các vị trí nổi bật gồm quản trị viên hệ thống, phân tích viên nghiệp vụ (BA), chuyên gia ERP/SAP, kỹ sư tích hợp dữ liệu và quản lý dự án IT — đặc biệt được săn đón trong ngân hàng, logistics, bán lẻ và sản xuất (Vietcombank, VinGroup,…).
  Tại Việt Nam, ngành cần thêm hàng chục nghìn nhân lực nhằm đáp ứng quá trình số hóa, với mức lương phổ biến 80–200 triệu VND/tháng tùy kinh nghiệm. Xu hướng như điện toán đám mây, IoT và an toàn thông tin tiếp tục thúc đẩy nhu cầu tuyển dụng, đòi hỏi kỹ năng như SQL, Agile và các chứng chỉ bảo mật như CISSP.
  `;

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
  const boxContentE1 = document.getElementById('box-content-1');
  if (boxContentE1) boxContentE1.innerHTML = `
  - Công nghệ Thông tin (Information Technology – IT) là ngành học nghiên cứu và ứng dụng các hệ thống máy tính, phần mềm và mạng truyền thông nhằm thu thập, xử lý, lưu trữ và trao đổi thông tin một cách hiệu quả. Đây là nền tảng quan trọng giúp kết nối con người, dữ liệu và công nghệ trong kỷ nguyên số.<br>
  - Ngành IT tập trung vào việc ứng dụng máy tính và phần mềm để giải quyết các vấn đề trong thực tiễn, bao gồm quản lý thông tin, tự động hóa quy trình và phát triển các giải pháp số cho tổ chức và doanh nghiệp.
  `;

  const boxContentE2 = document.getElementById('box-content-2');
  if (boxContentE2) boxContentE2.innerHTML = `
  Ngành Công nghệ Thông tin (IT) đang bùng nổ với nhu cầu lao động rất cao, dự kiến tăng trưởng 15–20% trong thập kỷ tới, tạo ra hàng triệu cơ hội việc làm với mức lương khởi điểm trung bình 70–150 triệu VND/tháng.
  Các vai trò phổ biến bao gồm lập trình viên, kỹ sư phần mềm, quản trị mạng, chuyên gia an ninh mạng, kỹ sư đám mây và chuyên viên hỗ trợ kỹ thuật — đặc biệt trong các lĩnh vực IT, fintech, e-commerce, y tế và chính phủ.
  Xu hướng như trí tuệ nhân tạo (AI), dữ liệu lớn (big data) và chuyển đổi số đang thúc đẩy mạnh mẽ sự phát triển của ngành, nhất là tại Việt Nam với mục tiêu đạt 500.000 lao động IT vào năm 2025.
  `;

  const boxContentE3 = document.getElementById('box-content-3');
  if (boxContentE3) boxContentE3.innerHTML = `
  Ngành Công nghệ Thông tin (CNTT) đang đối mặt với nhu cầu tuyển dụng khổng lồ. Riêng tại Việt Nam, Bộ Thông tin và Truyền thông dự báo cần khoảng 500.000 lao động IT đến năm 2025 để đáp ứng mục tiêu số hóa.
  Các vị trí hot nhất hiện nay gồm lập trình viên, kỹ sư phần mềm, chuyên gia an ninh mạng, kỹ sư dữ liệu và AI, đặc biệt trong các lĩnh vực fintech, e-commerce, y tế và chính phủ.
  Thị trường tuyển dụng tiếp tục tăng nhanh nhờ sự bùng nổ của AI, big data và điện toán đám mây, với mức lương hấp dẫn từ 70–200 triệu VND/tháng. Nhiều cơ hội đang đến từ các doanh nghiệp lớn như FPT, Viettel, VNPT và hệ sinh thái startup công nghệ.
  `;

}

// ---- Lộ trình: mỗi học kì = { required, optional }.
// HTML bên trong chỉ dùng class: text, page-content-item, sub-item (giống code cũ).

const CONTENT_BY_MAJOR = {
  ktpm: [
    // 0: N1 - HK1
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[0]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Nhập môn tin học</li>
            <li>Nhập môn lập trình</li>
          </ul>
        </div>
      `,
      optional: null,
    },

    // 1: N1 - HK2
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[1]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Kỹ thuật lập trình</li>
            <li>Hệ thống máy tính</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[1]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Phương pháp tính</li>
            <li>Hàm phức và phép biến đổi Laplace</li>
            <li>Logic học</li>
          </ul>
        </div>
      `,
    },

    // 2: N2 - HK3
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[2]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Cấu trúc rời rạc</li>
            <li>Cấu trúc dữ liệu và giải thuật</li>
            <li>Hệ cơ sở dữ liệu</li>
            <li>Lập trình hướng đối tượng</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[2]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Công nghệ thông tin trong chuyển đổi số</li>
          </ul>
        </div>
      `,
    },

    // 3: N2 - HK4
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[3]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Mạng máy tính</li>
            <li>Hệ thống và Công nghệ Web</li>
            <li>Phân tích thiết kế hệ thống</li>
            <li>Hệ quản trị cơ sở dữ liệu NoSQL MongoDB</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[3]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Lập trình hướng sự kiện với công nghệ .NET</li>
            <li>Lập trình hướng sự kiện với công nghệ Java</li>
            <li>Lập trình GUI với Qt Framework</li>
          </ul>
        </div>
      `,
    },

    // 4: N3 - HK5
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[4]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Lý thuyết đồ thị</li>
            <li>Phát triển ứng dụng</li>
            <li>Mô hình hóa dữ liệu NoSQL MongoDB</li>
            <li>Tư duy thiết kế và Trải nghiệm người dùng</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[4]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Khai thác dữ liệu và ứng dụng </li>
            <li>Kỹ thuật điện tử</li>
            <li>Nhập môn phân tích dữ liệu và AI</li>
            <li>Hệ quản trị cơ sở dữ liệu</li>
            <li>Tương tác người máy</li>
            <li>Bảo mật cơ sở dữ liệu</li>
          </ul>
        </div>
      `,
    },

    // 5: N3 - HK6
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[5]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Nhập môn an toàn thông tin</li>
            <li>Công nghệ phần mềm</li>
            <li>Thống kê máy tính và ứng dụng</li>
            <li>Phát triển giao diện ứng dụng</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[5]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Lập trình phân tán với công nghệ .NET</li>
            <li>Lập trình phân tán với công nghệ Java</li>
            <li>Lập trình mạng với Qt Framework</li>
          </ul>
        </div>
      `,
    },

    // 6: N4 - HK7
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[6]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Lập trình cho thiết bị di động</li>
            <li>Đảm bảo chất lượng và Kiểm thử phần mềm</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[6]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Lập trình IoTs </li>
            <li>Lập trình WWW (.Net)</li>
            <li>Phát triển ứng dụng Web với Qt Engine</li>
            <li>Lập trình Web (Java)</li>
          </ul>
        </div>
      `,
    },

    // 7: N4 - HK8
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[7]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Kiến trúc và Thiết kế Phần mềm</li>
            <li>Công nghệ mới trong phát triển ứng dụng CNTT</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[7]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Automat & Ngôn ngữ hình thức</li>
            <li>Nhập môn Dữ liệu lớn</li>
            <li>Lập trình Di động nâng cao</li>
            <li>Quản lý Dự án CNTT</li>
            <li>Kiến trúc Dịch vụ & Điện toán Đám mây</li>
            <li>Phát triển Ứng dụng AI</li>
          </ul>
        </div>
      `,
    },

    // 8: Tổng kết 4 năm
    {
      required: `
        <div class="text">Số tín chỉ, học phí</div>
        <div class="page-content-item">
          <div class="sub-item big">Số tín chỉ:</div>
          <div class="sub-item">163 tín chỉ gồm:</div>
          <ul class="subject-list">
            <li>145 tín chỉ bắt buộc</li>
            <li>18 tín chỉ tự chọn</li>
          </ul>
          <div class="sub-item big">Học phí:</div>
          <ul class="subject-list">
            <li>Khoảng 35,000,000 – 35,500,000 VNĐ</li>
          </ul>
        </div>
      `,
      optional: null,
    },
  ],

  // Các ngành khác: placeholder cho đúng cấu trúc
  khmt: [
    // 0: Năm 1 - Học kì 1
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[0]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Nhập môn Tin học</li>
            <li>Nhập môn lập trình</li>
          </ul>
        </div>
      `,
      optional: null,
    },

    // 1: Năm 1 - Học kì 2 (Bắt buộc)
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[1]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Kỹ thuật lập trình</li>
            <li>Hệ thống máy tính</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[1]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Phương pháp tính</li>
            <li>Hàm phức và phép biến đổi Laplace</li>
            <li>Logic học</li>
          </ul>
        </div>
      `,
    },

    // 2: Năm 2 - Học kì 3 (Bắt buộc)
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[2]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Cấu trúc rời rạc</li>
            <li>Cấu trúc dữ liệu và giải thuật</li>
            <li>Hệ cơ sở dữ liệu</li>
            <li>Lập trình hướng đối tượng</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[2]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Tính toán số & Matlab</li>
            <li>Ngôn ngữ Python</li>
            <li>Ngôn ngữ R</li>
          </ul>
        </div>
      `,
    },

    // 3: Năm 2 - Học kì 4 (Bắt buộc)
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[3]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Lý thuyết đồ thị</li>
            <li>Trí tuệ nhân tạo</li>
            <li>Hệ thống và Công nghệ Web</li>
            <li>Phân tích thiết kế hệ thống</li>
          </ul>
        </div>
      `,
      optional: null,
    },

    // 4: Năm 3 - Học kì 5 (Bắt buộc)
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[4]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Thống kê máy tính và ứng dụng</li>
            <li>Mạng máy tính</li>
            <li>Xử lý ảnh</li>
            <li>Máy học</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[4]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Lập trình hướng đối tượng (.NET)</li>
            <li>Lập trình hướng sự kiện (JAVA)</li>
            <li>Lập trình GUI với Qt Framework</li>
          </ul>
        </div>
      `,
    },

    // 5: Năm 3 - Học kì 6
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[5]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Nhận dạng mẫu</li>
            <li>Khai thác dữ liệu và ứng dụng</li>
            <li>Học sâu</li>
            <li>Phát triển ứng dụng</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[5]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Tương tác người–máy</li>
            <li>Quản lý dự án CNTT</li>
            <li>Đồ họa máy tính</li>
          </ul>
        </div>
      `,
    },

    // 6: Năm 4 - Học kì 7
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[6]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Công nghệ mới trong phát triển ứng dụng CNTT</li>
            <li>Xử lý ngôn ngữ tự nhiên</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[6]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Automat & Ngôn ngữ hình thức</li>
            <li>CSDL NoSQL MongoDB nâng cao</li>
            <li>Công nghệ phần mềm</li>
            <li>Lập trình Phân tán (.NET)</li>
            <li>Lập trình Phân tán (JAVA)</li>
            <li>Kiến trúc Dịch vụ & Điện toán Đám mây</li>
            <li>Phát triển Ứng dụng AI</li>
          </ul>
        </div>
      `,
    },

    // 7: Năm 4 - Học kì 8
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[7]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Thị giác máy tính và ứng dụng</li>
            <li>Công nghệ IoT hiện đại</li>
            <li>Phân tích thiết kế giải thuật</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[7]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Đảm bảo chất lượng & Kiểm thử phần mềm</li>
            <li>Ngôn ngữ lập trình</li>
            <li>Phân tích & Quản lý yêu cầu</li>
            <li>Phát triển giao diện ứng dụng</li>
          </ul>
        </div>
      `,
    },

    // 8: Tổng kết
    {
      required: `
        <div class="text">Số tín chỉ, học phí</div>
        <div class="page-content-item">
          <div class="sub-item big">Số tín chỉ:</div>
          <div class="sub-item">163 tín chỉ gồm:</div>
          <ul class="subject-list">
            <li>145 tín chỉ bắt buộc</li>
            <li>18 tín chỉ tự chọn</li>
          </ul>

          <div class="sub-item big">Học phí:</div>
          <ul class="subject-list">
            <li>Khoảng 34,500,000 – 35,000,000 VNĐ</li>
          </ul>
        </div>
      `,
      optional: null,
    }
  ],


  httt: [
    // 0: Năm 1 - Học kì 1
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[0]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Nhập môn Tin học</li>
            <li>Nhập môn lập trình</li>
          </ul>
        </div>
      `,
      optional: null,
    },

    // 1: Năm 1 - Học kì 2
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[1]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Kỹ thuật lập trình</li>
            <li>Hệ thống máy tính</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[1]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Phương pháp tính</li>
            <li>Hàm phức và phép biến đổi Laplace</li>
            <li>Logic học</li>
          </ul>
        </div>
      `,
    },

    // 2: Năm 2 - Học kì 3
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[2]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Hệ cơ sở dữ liệu</li>
            <li>Lập trình hướng đối tượng</li>
            <li>Thống kê máy tính và ứng dụng</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[2]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Công nghệ thông tin trong chuyển đổi số</li>
          </ul>
        </div>
      `,
    },

    // 3: Năm 2 - Học kì 4
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[3]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Hệ quản trị cơ sở dữ liệu</li>
            <li>Mạng máy tính</li>
            <li>Cấu trúc dữ liệu và giải thuật với Python</li>
            <li>Phân tích và quản lý yêu cầu</li>
            <li>Hệ thống thông tin quản lý</li>
          </ul>
        </div>
      `,
      optional: null,
    },

    // 4: Năm 3 - Học kì 5
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[4]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Nhập môn an toàn thông tin</li>
            <li>Hệ thống và Công nghệ Web</li>
            <li>Phân tích thiết kế hệ thống</li>
            <li>Nhập môn phân tích dữ liệu và AI</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[4]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Giao diện định lượng</li>
            <li>Tương tác người máy</li>
            <li>Quản trị cơ sở dữ liệu NoSQL</li>
          </ul>
        </div>
      `,
    },

    // 5: Năm 3 - Học kì 6
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[5]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Bảo mật cơ sở dữ liệu</li>
            <li>Thương mại điện tử</li>
            <li>Phát triển ứng dụng Web</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[5]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Nguyên lý mô hình hóa định lượng</li>
            <li>Nhập môn dữ liệu lớn</li>
            <li>Phân tích định lượng</li>
          </ul>
        </div>
      `,
    },

    // 6: Năm 4 - Học kì 7
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[6]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Phát triển ứng dụng</li>
            <li>Quản trị tác nghiệp thương mại điện tử</li>
            <li>Kiến trúc dịch vụ và điện toán phi máy chủ</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[6]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Tiếp thị điện tử</li>
            <li>Các hệ thống thông minh doanh nghiệp</li>
            <li>Khai thác dữ liệu và ứng dụng</li>
            <li>Trực quan hóa dữ liệu</li>
          </ul>
        </div>
      `,
    },

    // 7: Năm 4 - Học kì 8
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[7]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Hoạch định tài nguyên doanh nghiệp</li>
            <li>Công nghệ mới trong phát triển ứng dụng CNTT</li>
            <li>Quản lý dự án Hệ thống thông tin</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[7]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Cơ sở dữ liệu nâng cao</li>
            <li>Phát triển ứng dụng trí tuệ nhân tạo</li>
            <li>Đám mây và phát triển vận hành</li>
            <li>Quản lý quy trình nghiệp vụ</li>
          </ul>
        </div>
      `,
    },

    // 8: Tổng kết 4 năm HTTT
    {
      required: `
        <div class="text">Số tín chỉ, học phí</div>
        <div class="page-content-item">
          <div class="sub-item big">Số tín chỉ:</div>
          <div class="sub-item">163 tín chỉ gồm:</div>
          <ul class="subject-list">
            <li>145 tín chỉ bắt buộc</li>
            <li>18 tín chỉ tự chọn</li>
          </ul>

          <div class="sub-item big">Học phí:</div>
          <ul class="subject-list">
            <li>Khoảng 34,200,000 – 34,700,000 VNĐ</li>
          </ul>
        </div>
      `,
      optional: null,
    },
  ],


  cntt: [
    // 0: Năm 1 - HK1
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[0]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Nhập môn Tin học</li>
            <li>Nhập môn lập trình</li>
          </ul>
        </div>
      `,
      optional: null,
    },

    // 1: Năm 1 - HK2
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[1]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Kỹ thuật lập trình</li>
            <li>Hệ thống máy tính</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[1]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Phương pháp tính</li>
            <li>Hàm phức và phép biến đổi Laplace</li>
            <li>Logic học</li>
          </ul>
        </div>
      `,
    },

    // 2: Năm 2 - HK3
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[2]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Cấu trúc rời rạc</li>
            <li>Mạng máy tính</li>
            <li>Lập trình trong CNTT với Java</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[2]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Công nghệ thông tin trong chuyển đổi số</li>
          </ul>
        </div>
      `,
    },

    // 3: Năm 2 - HK4
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[3]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Hệ cơ sở dữ liệu</li>
            <li>Hệ thống và Công nghệ Web</li>
            <li>Xác định yêu cầu hệ thống</li>
            <li>Thống kê máy tính và ứng dụng</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[3]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Lý thuyết đồ thị</li>
            <li>Ngôn ngữ lập trình</li>
            <li>Phân tích và quản lý yêu cầu</li>
          </ul>
        </div>
      `,
    },

    // 4: Năm 3 - HK5
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[4]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Quản trị &amp; Bảo trì Hệ thống</li>
            <li>Nhập môn An toàn Thông tin</li>
            <li>Tương tác Người – Máy</li>
            <li>Phát triển Hệ thống Đa phương tiện</li>
            <li>Công cụ Web &amp; Website hướng Dữ liệu</li>
            <li>Hệ thống &amp; Dịch vụ Ảo hóa</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[4]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Hệ quản trị cơ sở dữ liệu</li>
            <li>Kiến trúc và cài đặt hệ quản trị CSDL</li>
            <li>Cơ sở dữ liệu phân tán</li>
          </ul>
        </div>
      `,
    },

    // 5: Năm 3 - HK6
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[5]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Triển khai an ninh hệ thống</li>
            <li>Phát triển hệ thống tích hợp</li>
            <li>Quản trị mạng và hỗ trợ kỹ thuật</li>
            <li>Hệ thống đo và khả năng mở rộng dữ liệu</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[5]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Kiến trúc lưu trữ phân tán</li>
            <li>Điện toán đám mây</li>
            <li>Điện toán cục bộ</li>
          </ul>
        </div>
      `,
    },

    // 6: Năm 4 - HK7
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[6]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Kiến trúc và tích hợp hệ thống</li>
            <li>Định tuyến và chuyển mạch</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[6]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Thuyền số liệu</li>
            <li>Quản trị mạng</li>
            <li>Kiến trúc &amp; Lập trình Web nâng cao</li>
            <li>Automat &amp; Ngôn ngữ hình thức</li>
            <li>Mạng không dây</li>
            <li>Quản lý Dự án HTTT</li>
          </ul>
        </div>
      `,
    },

    // 7: Năm 4 - HK8
    {
      required: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[7]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Bắt buộc</div>
          <ul class="subject-list">
            <li>Công nghệ mới trong phát triển ứng dụng CNTT</li>
            <li>Công nghệ và lập trình tích hợp</li>
            <li>Kiến trúc và lập trình di động</li>
            <li>Phân tích thiết kế mạng</li>
          </ul>
        </div>
      `,
      optional: `
        <div class="text">Môn học</div>
        <div class="text-1"><b>${SEMESTERS_DETAIL[7]}</b></div>
        <div class="page-content-item">
          <div class="sub-item">Tự chọn</div>
          <ul class="subject-list">
            <li>Trí tuệ nhân tạo</li>
            <li>Lập trình phân tích dữ liệu 1</li>
            <li>Phát triển hệ thống phân tán</li>
          </ul>
        </div>
      `,
    },

    // 8: Tổng kết 4 năm CNTT
    {
      required: `
        <div class="text">Số tín chỉ, học phí</div>
        <div class="page-content-item">
          <div class="sub-item big">Số tín chỉ:</div>
          <div class="sub-item">163 tín chỉ gồm:</div>
          <ul class="subject-list">
            <li>145 tín chỉ bắt buộc</li>
            <li>18 tín chỉ tự chọn</li>
          </ul>

          <div class="sub-item big">Học phí:</div>
          <ul class="subject-list">
            <li>Khoảng 34,500,000 – 35,000,000 VNĐ</li>
          </ul>
        </div>
      `,
      optional: null,
    },
  ],
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
// 
  pageEl.addEventListener('touchcancel', () => {
    tracking = false;
    pageEl.style.transform = '';
    pageEl.style.opacity = '';
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

