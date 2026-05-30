document.addEventListener("DOMContentLoaded", () => {

    // ===== INTRO =====
    const intro = document.querySelector(".intro");

    window.addEventListener("load", () => {
        setTimeout(() => {
            if (intro) intro.classList.add("hide");
        }, 3200);
    });
    // ===== SLIDER SYSTEM (HARD LIMIT FIX) =====
    function setupSlider(sliderId, nextId, prevId) {

        const slider = document.getElementById(sliderId);
        const next = document.getElementById(nextId);
        const prev = document.getElementById(prevId);

        if (!slider || !next || !prev) return;

        const slides = slider.querySelectorAll(".slide");
        if (!slides.length) return;

        let position = 0;

        function getStep() {
            return slides[0].offsetWidth + 20; // gap
        }

        function getMax() {
            const container = slider.parentElement;
            return Math.max(0, slider.scrollWidth - container.offsetWidth);
        }

        function move() {
            const max = getMax();

            if (position < 0) position = 0;
            if (position > max) position = max;

            slider.style.transform = `translateX(-${position}px)`;
        }

        next.addEventListener("click", () => {
            position += getStep();
            move();
        });

        prev.addEventListener("click", () => {
            position -= getStep();
            move();
        });

        window.addEventListener("resize", move);

        move();
    }


    // تشغيل كل السلايدرات
    setupSlider("blush-slider", "blush-next", "blush-prev");
    setupSlider("lip-slider", "lip-next", "lip-prev");
    setupSlider("frg-slider", "frg-next", "frg-prev");
    setupSlider("skin-slider", "skin-next", "skin-prev");


    // ===== SCROLL REVEAL (CLEAN VERSION) =====
    const items = document.querySelectorAll(
        ".slide, .arc-card, .blush-card, .lip-card, .video-box, .split-video"
    );

    items.forEach(el => el.classList.add("reveal-item"));

    function revealOnScroll() {

        items.forEach((el, i) => {
            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 120) {
                setTimeout(() => {
                    el.classList.add("show");
                }, i * 80);
            }
        });

    }

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);

});
document.addEventListener("DOMContentLoaded",()=>{

    const openBtn=document.getElementById("openForm");
    const closeBtn=document.getElementById("closeForm");
    const form=document.getElementById("userForm");
    
    openBtn.onclick=(e)=>{
    e.preventDefault();
    form.classList.add("active");
    }
    
    closeBtn.onclick=()=>{
    form.classList.remove("active");
    }
    
    window.onclick=(e)=>{
    if(e.target===form){
    form.classList.remove("active");
    }
    }
    
    });
// العناصر: الصور (slides)
const slides = document.querySelectorAll(".slide");

// الفيديو
const videoBox = document.querySelector(".video-box");

// دالة عامة للـ scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.25
});

// تطبيق على الصور
slides.forEach(slide => {
    observer.observe(slide);
});

// تطبيق على الفيديو (إذا موجود)
if (videoBox) {
    observer.observe(videoBox);
}
document.addEventListener("DOMContentLoaded", function () {

    const videoBox = document.querySelector(".video-box");
    const textBox = document.querySelector(".video-text-box");
    const section = document.querySelector(".video-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                videoBox.classList.add("show");
                textBox.classList.add("show");
            }

        });
    }, {
        threshold: 0.4
    });

    if (section) {
        observer.observe(section);
    }

});
