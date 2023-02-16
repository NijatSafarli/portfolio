(function () {
    // Full page slider
    const fullPageSlider = document.querySelector("#full-page");
    fullPageSlider && new fullpage('#full-page', {
        licenseKey: 'gplv3-license',
        autoScrolling: true,
        navigation: true,
        anchors: ['welcome', 'about', 'contact'],
        menu: '#menu',
    });


    // Page preloader
    window.addEventListener('load', function () {
        document.querySelector(".page-loader").classList.add('fade');
    });

    // Mobile menu
    const mobileMenuToggles = document.querySelectorAll('.mobile-menu-toggle');
    mobileMenuToggles && Array.from(mobileMenuToggles).forEach(mobileMenuToggle => {
        mobileMenuToggle.addEventListener('click', () => {
            document.querySelector('.mobile-menu').classList.toggle('show');
        })
    });

    const mobileMenuItems = document.querySelectorAll('.mobile-menu [data-menuanchor]');
    mobileMenuItems && Array.from(mobileMenuItems).forEach(mobileMenuItem => {
        mobileMenuItem.addEventListener('click', () => {
            document.querySelector('.mobile-menu').classList.remove('show');
        })
    });

    // Fixed header
    let header = document.querySelector('.header');
    let headerHeight = header && header.offsetHeight;
    let currentScroll = window.pageYOffset;

    if (currentScroll >= headerHeight) {
        header.classList.add('fixed');
    }

    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;

        if (currentScroll >= headerHeight) {
            header.classList.add('fixed');
            document.querySelector('.scroll-down-arrow').classList.add('fade');
        } else {
            header.classList.remove('fixed');
            document.querySelector('.scroll-down-arrow').classList.remove('fade');
        }
    });
})()
