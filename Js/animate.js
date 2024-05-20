document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carouselImage');
        let currentIndex = 0;

        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        images[currentIndex].classList.add('active');
        setInterval(showNextImage, 2000);
    });
});



// Select all the sections
const sectionsweb = document.querySelectorAll('.web-sec');


// Create the Intersection Observer
const observerweb = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
// If the section is visible, add the 'visible' class
entry.target.classList.add('visible');
} else {
// If the section is not visible, remove the 'visible' class
entry.target.classList.remove('visible');
}
});
});

// Observe each section
sectionsweb.forEach((section) => {
observerweb.observe(section);
});


const sectionsapp = document.querySelectorAll('.app-sec');


// Create the Intersection Observer
const observerapp = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
// If the section is visible, add the 'visible' class
entry.target.classList.add('visible');
} else {
// If the section is not visible, remove the 'visible' class
entry.target.classList.remove('visible');
}
});
});

// Observe each section
sectionsapp.forEach((section) => {
observerapp.observe(section);
});


const sectionsvideo = document.querySelectorAll('.our-video');



// Create the Intersection Observer
const observervideo = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
// If the section is visible, add the 'visible' class
entry.target.classList.add('visible');
} else {
// If the section is not visible, remove the 'visible' class
entry.target.classList.remove('visible');
}
});
});

// Observe each section
sectionsvideo.forEach((section) => {
observervideo.observe(section);
});



const sectionsreel = document.querySelectorAll('.reels');



// Create the Intersection Observer
const observerreel = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
// If the section is visible, add the 'visible' class
entry.target.classList.add('visible');
} else {
// If the section is not visible, remove the 'visible' class
entry.target.classList.remove('visible');
}
});
});

// Observe each section
sectionsreel.forEach((section) => {
observerreel.observe(section);
});




const sectionsgraphics = document.querySelectorAll('.graphics-section');



// Create the Intersection Observer
const observergraphics = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
// If the section is visible, add the 'visible' class
entry.target.classList.add('visible');
} else {
// If the section is not visible, remove the 'visible' class
entry.target.classList.remove('visible');
}
});
});

// Observe each section
sectionsgraphics.forEach((section) => {
observergraphics.observe(section);
});



const sectionsclient = document.querySelectorAll('.clients');



// Create the Intersection Observer
const observerclient = new IntersectionObserver((entries) => {
entries.forEach((entry) => {

if (entry.isIntersecting) {
// If the section is visible, add the 'visible' class
entry.target.classList.add('visible');
} else {
// If the section is not visible, remove the 'visible' class
entry.target.classList.remove('visible');
}
});
});

// Observe each section
sectionsclient.forEach((section) => {
observerclient.observe(section);
});