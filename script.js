let navLinks = document.querySelectorAll('.nav-link');
let topLink = navLinks[0];
let topChildLink = topLink.classList;
console.log(topChildLink);
console.log(topLink);

for (i = 1; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        this.classList.add('active');
        navLinks.forEach(activeLink => {
            if (activeLink !== this) {
                activeLink.classList.remove('active');
            }
        })
    })
}
