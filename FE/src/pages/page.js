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
  - Bên cạnh đó, Khoa học máy tính còn mở rộng sang các lĩnh vực như hệ điều hành, xử lý dữ liệu, ngôn ngữ lập trình, và thiết kế – phát triển phần mềm. Ở mức độ cao hơn, ngành cũng nghiên cứu trí tuệ nhân tạo (AI), an toàn và bảo mật thông tin, công nghệ web, và môi trường mạng.<br>
  - Tại IUH, ngành Khoa học máy tính hiện đang đào tạo thêm 2 chuyên ngành là Trí tuệ nhân tạo và Khoa học dữ liệu.<br>
  - Bảng dưới đây tóm tắt các thông số cơ bản về cấu trúc chương trình Khoa học Máy tính tại IUH.
  `;
  const boxContentE2 = document.getElementById('box-content-2');
  if (boxContentE2) boxContentE2.innerHTML = `
  Ngành khoa học máy tính đang bùng nổ với nhu cầu cao, dự kiến tăng trưởng 15–20% trong thập kỷ tới, tạo ra hàng triệu cơ hội việc làm với mức lương khởi điểm trung bình từ 70–150 triệu VND/tháng.<br>
  Các vai trò phổ biến bao gồm lập trình viên, kỹ sư dữ liệu, chuyên gia AI, an ninh mạng, kỹ sư đám mây và giảng viên. Nhu cầu tuyển dụng tập trung mạnh trong các lĩnh vực IT, fintech, y tế, giáo dục, cơ quan chính phủ và startup công nghệ.<br>
  Xu hướng như AI, Big Data và điện toán đám mây tiếp tục thúc đẩy sự tăng trưởng toàn ngành — đặc biệt tại Việt Nam, khi mục tiêu phát triển đến năm 2025 đặt ra nhu cầu hơn 500.000 lao động IT.
  `;
  const boxContentE3 = document.getElementById('box-content-3');
  if (boxContentE3) boxContentE3.innerHTML = `
  Ngành Khoa học máy tính đang đối mặt với nhu cầu tuyển dụng cực kỳ cao, với dự báo tăng trưởng việc làm 15–20% toàn cầu trong thập kỷ tới theo Bureau of Labor Statistics. Tại Việt Nam, Bộ Thông tin và Truyền thông dự kiến cần thêm 500.000 lao động IT đến năm 2025 để phục vụ quá trình số hóa và phát triển công nghệ.<br>
  Các vị trí “hot” được săn đón mạnh mẽ gồm lập trình viên, kỹ sư dữ liệu, chuyên gia AI, an ninh mạng và kỹ sư đám mây — trải dài khắp các lĩnh vực IT, fintech, y tế, giáo dục và các tổ chức chính phủ.<br>
  Sự bùng nổ của AI, Big Data và Cloud khiến các doanh nghiệp như Google, FPT, Viettel và nhiều startup Việt Nam liên tục mở rộng tuyển dụng. Các kỹ năng giá trị cao bao gồm Python, Java, Machine Learning và chứng chỉ điện toán đám mây như AWS, Azure và GCP.
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
  - Hệ thống Thông tin (Information Systems – IS) là ngành học nghiên cứu cách kết hợp giữa con người, công nghệ và quy trình để thu thập, xử lý, lưu trữ và phân phối thông tin phục vụ cho hoạt động quản lý và ra quyết định trong các tổ chức. Nói một cách đơn giản, Hệ thống Thông tin là “bộ não” giúp tổ chức hiểu rõ tình hình, tối ưu vận hành và nâng cao hiệu quả kinh doanh.<br>
  - Trong mỗi doanh nghiệp, hệ thống thông tin đóng vai trò quan trọng trong việc quản lý nhân sự, tài chính, dữ liệu khách hàng và chuỗi cung ứng, đồng thời cung cấp các báo cáo và phản hồi kịp thời để nhà quản lý đưa ra quyết định chính xác hơn.
  `;
  const boxContentE2 = document.getElementById('box-content-2');
  if (boxContentE2) boxContentE2.innerHTML = `
  Ngành Hệ thống Thông tin (Information Systems) đang phát triển mạnh mẽ cùng nhu cầu tích hợp công nghệ vào quản lý doanh nghiệp, với mức tăng trưởng dự kiến 10–15% trong thập kỷ tới. Điều này tạo ra nhiều cơ hội việc làm hấp dẫn với mức lương khởi điểm trung bình từ 60–120 triệu VND/tháng.<br>
  Các vai trò phổ biến trong ngành bao gồm quản trị viên hệ thống, phân tích viên kinh doanh (Business Analyst), quản lý dự án IT, chuyên gia ERP và tư vấn viên CNTT. Nhu cầu tuyển dụng tập trung mạnh trong các lĩnh vực ngân hàng, y tế, bán lẻ, cơ quan chính phủ và doanh nghiệp công nghệ.<br>
  Xu hướng như chuyển đổi số, Big Data và điện toán đám mây tiếp tục thúc đẩy sự tăng trưởng mạnh mẽ của ngành — đặc biệt tại Việt Nam khi nền kinh tế số đang bùng nổ.
  `;
  const boxContentE3 = document.getElementById('box-content-3');
  if (boxContentE3) boxContentE3.innerHTML = `
  Ngành Hệ thống Thông tin (Information Systems – IS) đang chứng kiến nhu cầu tuyển dụng mạnh mẽ, với mức tăng trưởng dự kiến 10–15% trong thập kỷ tới, tập trung vào quản lý công nghệ nhằm tối ưu hóa hoạt động doanh nghiệp.<br>
  Các vị trí nổi bật bao gồm quản trị viên hệ thống, phân tích viên nghiệp vụ (BA), chuyên gia ERP/SAP, kỹ sư tích hợp dữ liệu và quản lý dự án IT. Các lĩnh vực tuyển dụng mạnh: ngân hàng, logistics, bán lẻ, sản xuất và các tập đoàn lớn như Vietcombank, VinGroup.<br>
  Tại Việt Nam, ngành cần hàng chục nghìn lao động để đáp ứng quá trình số hóa, với mức lương trung bình 80–200 triệu VND/tháng tùy kinh nghiệm. Xu hướng như điện toán đám mây, IoT và an ninh thông tin tiếp tục thúc đẩy tuyển dụng, đòi hỏi kỹ năng như SQL, Agile, quản trị dữ liệu và các chứng chỉ như CISSP.
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
  Ngành Hệ thống thông tin (Information Systems - IS) đang chứng kiến nhu cầu tuyển dụng mạnh mẽ với tăng trưởng dự kiến 10–15% trong thập kỷ tới, tập trung vào quản lý công nghệ để tối ưu hóa hoạt động doanh nghiệp.<br>
  Các vị trí nổi bật gồm quản trị viên hệ thống, phân tích viên nghiệp vụ (BA), chuyên gia ERP/SAP, kỹ sư tích hợp dữ liệu và quản lý dự án IT — đặc biệt trong ngân hàng, logistics, bán lẻ và sản xuất (như Vietcombank, VinGroup).<br>
  Tại Việt Nam, ngành cần hàng chục nghìn lao động để đáp ứng quá trình số hóa, với mức lương trung bình 80–200 triệu VND/tháng tùy kinh nghiệm. Xu hướng như điện toán đám mây, IoT và bảo mật tiếp tục thúc đẩy nhu cầu tuyển dụng, yêu cầu kỹ năng như SQL, Agile và chứng chỉ CISSP.
  `;
  const boxContentE2 = document.getElementById('box-content-2');
  if (boxContentE2) boxContentE2.innerHTML = `
  Ngành Công nghệ Thông tin (IT) đang bùng nổ với nhu cầu lao động tăng nhanh, dự kiến tăng trưởng 15–20% trong thập kỷ tới, tạo ra hàng triệu cơ hội việc làm với mức lương khởi điểm trung bình 70–150 triệu VND/tháng.<br>
  Các vai trò phổ biến gồm lập trình viên, kỹ sư phần mềm, quản trị mạng, chuyên gia an ninh mạng, kỹ sư đám mây và kỹ thuật hỗ trợ — trải rộng trong IT, fintech, e-commerce, y tế và cơ quan chính phủ.<br>
  Xu hướng AI, dữ liệu lớn và chuyển đổi số đang thúc đẩy tăng trưởng mạnh mẽ, đặc biệt tại Việt Nam với mục tiêu đạt 500.000 lao động IT vào năm 2025.
  `;
  const boxContentE3 = document.getElementById('box-content-3');
  if (boxContentE3) boxContentE3.innerHTML = `
  Ngành Công nghệ Thông tin (CNTT) đang đối mặt với nhu cầu tuyển dụng khổng lồ, khi Việt Nam cần khoảng 500.000 lao động IT đến năm 2025 để đáp ứng mục tiêu chuyển đổi số, theo Bộ Thông tin và Truyền thông.<br>
  Các vị trí “hot” nhất gồm lập trình viên, kỹ sư phần mềm, chuyên gia an ninh mạng, kỹ sư dữ liệu và AI — tập trung trong fintech, e-commerce, y tế và chính phủ.<br>
  Thị trường tuyển dụng tăng trưởng mạnh nhờ sự bùng nổ của AI, Big Data và điện toán đám mây, mang đến mức lương hấp dẫn (70–200 triệu VND/tháng) và cơ hội tại các công ty lớn như FPT, Viettel và các startup công nghệ.
  `;
}

// ---- Nội dung lộ trình theo ngành
const CONTENT_BY_MAJOR = {
  ktpm: [
    // Năm 1
    `
    <div class="text">Môn Học</div>
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
