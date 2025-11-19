export default function Header(language = 'Tiếng Việt'){
    return (
        ` <div class="header__logo">
                <img src="/FE/assets/images/logo-bcn.svg" alt="">
                <img src="/FE/assets/images/INVINC!BLE.svg" alt="">
            </div>
            <nav class="header__navbar space-grotesk-500">
                <a href="" data-link="homepage" class="header__navbar--link">Trang chủ</a>
                <a href="" data-link="overview-cn" class="header__navbar--link">Chuyên Ngành</a>
                <a href="" data-link="overview-cv" class="header__navbar--link">Vị trí công việc</a>
                <a href="" data-link="contact" class="header__navbar--link">Liên hệ</a>
                <a class="language unbounded-400"><img src="FE/assets/images/header/vn.png" width="48px" height="29px" alt="">VN</a>
                <button class="header_login active unbounded-400">Đăng nhập</button>
                <img src="/FE/assets/images/admin-setting.svg" class="unactive" alt="">
            </nav>
            <img src="/FE/assets/images/header/menu.svg" alt="" class="header__menu-bar">`
    )
}
