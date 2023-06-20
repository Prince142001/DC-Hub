document.querySelector(".header").innerHTML = `
<div class="header-main">
<div class="logo">
    <img src="images/site-img.png" alt="site-logo">
    <a href="index.html">DC-Hub</a>
</div>
<div class="open-nav-menu">
    <span></span>
</div>
<div class="menu-overlay">
</div>
<nav class="nav-menu">
    <div class="close-nav-menu">
        <i class="fa fa-close"></i>
    </div>
    <ul class="menu">
        <li class="menu-item">
            <a aria-current="page" class="menu-item-link" id="activeHomePage" href="index.html">Home</a>
        </li>
        <li class="menu-item">
            <a class="menu-item-link" href="locations.html">Locations</a>
        </li>
        <li class="menu-item menu-item-has-children login-page-link">
            <a href="signinpage.html"><i class="fa fa-user"></i>  Login</a>
        </li>
        <li class="menu-item">
            <a class="menu-item-link" href="about-us.html">Contact Us</a>
        </li>
        <li class="menu-item">
            <a class="menu-item-link" href="about-us.html">About Us</a>
        </li>
    </ul>
</nav>
</div>
`;

(() => {

    const openNavMenu = document.querySelector(".open-nav-menu"),
        closeNavMenu = document.querySelector(".close-nav-menu"),
        navMenu = document.querySelector(".nav-menu"),
        menuOverlay = document.querySelector(".menu-overlay"),
        mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) => {
        if (event.target.hasAttribute("data-toggle") &&
            window.innerWidth <= mediaSize) {
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            // if menuItemHasChildren is already expanded, collapse it
            if (menuItemHasChildren.classList.contains("active")) {
                collapseSubMenu();
            }
            else {
                // collapse existing expanded menuItemHasChildren
                if (navMenu.querySelector(".menu-item-has-children.active")) {
                    collapseSubMenu();
                }
                // expand new menuItemHasChildren
                menuItemHasChildren.classList.add("active");
                const subMenu = menuItemHasChildren.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }
    });
    function collapseSubMenu() {
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
            .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
            .classList.remove("active");
    }
    function resizeFix() {
        // if navMenu is open ,close it
        if (navMenu.classList.contains("open")) {
            toggleNav();
        }
        // if menuItemHasChildren is expanded , collapse it
        if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
        }
    }

    window.addEventListener("resize", function () {
        if (this.innerWidth > mediaSize) {
            resizeFix();
        }
    });

})();