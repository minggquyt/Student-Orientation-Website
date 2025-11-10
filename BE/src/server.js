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

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.use('/api', authRoutes);

app.listen(port, () => {
    console.log(`Node App is running on port http://localhost:${port}`);
})
