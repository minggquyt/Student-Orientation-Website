const express = require('express');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const app = express();

const port = 3000;

const allowedOrigins = [
    'https://student-orientation-website.vercel.app',
    'http://localhost:5500'
];

app.use(cors({
    origin: (origin, callback) => {
        console.log(origin);
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.use('/api', authRoutes);

app.listen(port, () => {
    console.log(`Node App is running on port http://localhost:${port}`);
})

// Các step cần làm trong 08/11/2025
// 1. Chỉnh lại giao diện - bao gồm các trang tổng quát 
// 2. Thiết kế cơ sở dữ liệu - tạo trước các bảng và insert data giả 
// 3. Làm chức năng CRUD cho data 
// - Làm cho trang tổng quát các chuyên ngành và chi tiết chuyên ngành trước 
// 4. Deploy backend lên render và sửa lỗi Deploy 

// ý tưởng giao diện: 
// Single Page Application - Render trên Frontend: để tối ưu hóa trải nghiệm người dùng 
// Header + Footer: tái sử dụng 
// 1. Lắng nghe sự kiện onclick của header và render ra các trang tương ứng 
