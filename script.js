let navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks);

console.log(navLinks[0].classList);

navLinks.forEach(link => {
    if (link.classList.contains('active')) {
        console.log('Active');
    } else {
        console.log('Not active');
    }
})

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        this.classList.add('active');
        navLinks.forEach(activeLink => {
            if (activeLink !== this) {
                activeLink.classList.remove('active');
            }
        })
    })
})