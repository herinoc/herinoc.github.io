// Inisialisasi elemen-elemen DOM:
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Event listener untuk mengatur efek paralaks pada navigasi saat digulir:
window.onscroll = () => {
    // Mendapatkan informasi tentang setiap bagian
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
        // Menambahkan kelas 'active' pada tautan navigasi yang sesuai dengan bagian yang sedang terlihat
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add ('active')
            })
        }
    })
}

// Event listener untuk menanggapi klik pada ikon menu:
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}