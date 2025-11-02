const express = require('express');
const app = express(); 

app.get('/',(req,res) => {
    res.send("Hello world");
})

app.listen(3000,() => {
    console.log("Node App is running on port 3000 ");
}) 
// Tạo HTTP Server từ instance App 
// - HTTP Server: lo logic nhận và truyền request 
// - App: lo logic xử lý request và trả về response

// Phân biệt các khái niệm:
// - URL: toàn bộ đường dẫn trên trình duyệt bao gồm luôn cả https:// 
// - Domain: là đoạn đầu tiên sau https://DOMAIN/PATH
// - Endpoint = HTTP Method + path: là điểm cuối mà client gọi tới để thao tác 
// VD: GET api/users, POST api/users
// + về path: api/... : là quy ước khi định nghĩa các routes trả về dữ liệu 
// -> Giúp phân biệt giữa routes trả về dữ liệu và routes trả về trang HTML 

