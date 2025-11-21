export default function MenuBar() {
    return (
    `   <div class="menu menu--move">
            <div class="menu_title space-grotesk-500">
                <h1>Menu</h1>
                <img class="menu_title--close" src="FE/assets/images/header/close.svg" width="46px" height="46px"
                    alt="">
            </div>
            <div class="menu_list space-grotesk-500">
                <a href="" data-link="homepage" class="menu_list--link">Trang chủ</a>
                <a href="" data-link="overview-cn" class="menu_list--link">Chuyên Ngành</a>
                <a href="" data-link="overview-cv" class="menu_list--link">Vị trí công việc</a>
                <a href="" data-link="contact" class="menu_list--link">Liên hệ</a>
                <a class="language unbounded-400"><img src="FE/assets/images/header/vn.png" width="48px" height="29px" alt="">VN</a>
            </div>
        </div>
        <div class="fade_container">
        </div>
    `
    )
}