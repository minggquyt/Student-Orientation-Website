export default function Header(){
    return (
        `<div class="header__logo">
            <img src="./assets/images/logo-bcn.svg" alt="" width="64px" height="64px">
            <img src="./assets/images/INVINC!BLE.svg" alt="">
        </div>
        <nav class="header__navbar space-grotesk-500">
            <a href="" class="header__navbar--link">Trang chủ</a>
            <a href="" class="header__navbar--link">Chuyên Ngành</a>
            <a href="" class="header__navbar--link">Vị trí công việc</a>
            <a href="" class="header__navbar--link">Liên hệ</a>
            <button class="active unbounded-400" >Đăng nhập</button>
            <img src="./assets/images/admin-setting.svg" class="unactive" alt="">
        </nav>`
    )
}