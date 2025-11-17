export default function Header(){
    return (
        `<div class="header__logo">
            <img src="/FE/assets/images/logo-bcn.svg" alt="" width="64px" height="64px">
            <img src="/FE/assets/images/INVINC!BLE.svg" alt="">
        </div>
        <nav class="header__navbar space-grotesk-500">
            <a href="" data-link="homepage" class="header__navbar--link">Trang chủ</a>
            <a href="" data-link="overview-cn" class="header__navbar--link">Chuyên Ngành</a>
            <a href="" data-link="overview-cv" class="header__navbar--link">Vị trí công việc</a>
            <button class="active unbounded-400">Đăng nhập</button>
            <img src="/FE/assets/images/admin-setting.svg" class="unactive" alt="">
        </nav>`
    )
}