const toggle = document.getElementById('toggle');
const close1 = document.getElementById('close1');
const close2 = document.getElementById('close2');
const open1 = document.getElementById('open1');
const open2 = document.getElementById('open2');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const navbar = document.getElementById('navbar');
const open3 = document.getElementById('open3');
const close3 = document.getElementById('close3');
const modal3 = document.getElementById('modal3');
const open4 = document.getElementById('open4');
const close4 = document.getElementById('close4');
const modal4 = document.getElementById('modal4');
const open5 = document.getElementById('open5');
const close5 = document.getElementById('close5');
const modal5 = document.getElementById('modal5');



// function closeNavbar(e) {
//     if (
//         document.body.classList.contains('show-nav') &&
//         e.target !== toggle &&
//         !toggle.contains(e.target) &&
//         e.target !== navbar &&
//         !navbar.contains(e.target)
//     ) {
//         document.body.classList.toggle('show-nav');
//         document.body.removeEventListener('click', closeNavbar);
//     } else if (!document.body.classList.contains('show-nav')) {
//         document.body.removeEventListener('click', closeNavbar);
//     }
// }

// Toggle nav
// toggle.addEventListener('click', () => {
//     document.body.classList.toggle('show-nav');
//     document.body.addEventListener('click', closeNavbar);
// });

// Show modal
open1.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close1.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
    e.target == modal ? modal.classList.remove('show-modal') : false
);
open2.addEventListener('click', () => modal2.classList.add('show-modal2'));

// Hide modal
close2.addEventListener('click', () => modal2.classList.remove('show-modal2'));

// Hide modal on outside click
window.addEventListener('click', e =>
    e.target == modal2 ? modal2.classList.remove('show-modal2') : false
);
open3.addEventListener('click', () => modal3.classList.add('show-modal3'));

// Hide modal
close3.addEventListener('click', () => modal3.classList.remove('show-modal3'));

// Hide modal on outside click
window.addEventListener('click', e =>
    e.target == modal3 ? modal3.classList.remove('show-modal3') : false
);
open4.addEventListener('click', () => modal4.classList.add('show-modal4'));

// Hide modal
close4.addEventListener('click', () => modal4.classList.remove('show-modal4'));

// Hide modal on outside click
window.addEventListener('click', e =>
    e.target == modal4 ? modal4.classList.remove('show-modal4') : false
);
open5.addEventListener('click', () => modal5.classList.add('show-modal5'));

// Hide modal
close5.addEventListener('click', () => modal5.classList.remove('show-modal5'));

// Hide modal on outside click
window.addEventListener('click', e =>
    e.target == modal5 ? modal5.classList.remove('show-modal5') : false
);