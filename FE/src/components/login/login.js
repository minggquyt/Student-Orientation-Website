export default function Login() {
    return (
        `<div class="container-login-box">
            <div class="login-box">
                <h1 class="unbounded-500" >Định hướng TSV FIT-IUH</h1>
                <div class="login-box__input">
                    <form action="http://localhost:3000/api/login" method="POST" > 
                        <input class="unbounded-500" placeholder="Tài khoản: " type="text" name="username" >
                        <input class="unbounded-500" placeholder="Mật khẩu: " type="password" name="password" >
                        <input type="submit">
                    </form>
                </div>
                <div class="login-box__nav unbounded-500">
                    <a href="">Chưa có tài khoản ?</a>
                    <a href="">Quên mật khẩu ?</a>
                </div>
            </div>
        </div>`
    )
}