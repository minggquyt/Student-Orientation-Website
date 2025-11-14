//Chọn TẤT CẢ các phần tử .box-content trên trang
const allBoxes = document.querySelectorAll('.box-content');

//Lặp qua từng 'box' (NodeList)
allBoxes.forEach(function(box) {
  
  //Thêm sự kiện click cho MỖI box
  box.addEventListener('click', function() {
    
    //Tìm .card-container CỦA CHÍNH box này (box vừa được click)
    //Chứ không phải tìm trên toàn bộ tài liệu
    const cardContainer = box.querySelector('.card-container');
    
    //Lật (toggle) chỉ .card-container bên trong box đó
    if (cardContainer) { // Kiểm tra xem có tìm thấy không
      cardContainer.classList.toggle('is-flipped');
    }
  });
});