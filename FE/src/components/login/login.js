export default function Login(){
    return (
        `<div class="login-box">
        <h1 class="unbounded-500" >Định hướng TSV FIT-IUH</h1>
        <div class="login-box__input">
            <form action="">
                <input class="unbounded-500" placeholder="Tài khoản: " type="text">
            </form>
            <form action="">
                <input class="unbounded-500" placeholder="Mật khẩu: " type="password">
            </form>
            <button class="unbounded-500" >Đăng nhập</button>
        </div>
        <div class="login-box__nav unbounded-500">
            <a href="">Chưa có tài khoản ?</a>
            <a href="">Quên mật khẩu ?</a>
        </div>`
    )
}