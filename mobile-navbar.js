class MobileNavbar{
    constructor(mobileMenu, paginas, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.paginas = document.querySelector(paginas);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `paginasFade 0.5s ease forwards ${
                    index / 7 + 0.3
            }s`);
        });
    }

    handleClick(){
        this.paginas.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        if(this.mobileMenu){
            this.mobileMenu.addEventListener("click", this.handleClick);
        }
        this.navLinks.forEach((link) =>{
            link.addEventListener("click", this.handleClick)
        });
    }

    init(){
        this.addClickEvent();
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".paginas",
    ".paginas li",
);
mobileNavbar.init();