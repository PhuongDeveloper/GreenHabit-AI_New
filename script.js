document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll Reveal Animation (Hiệu ứng khi lướt tới đâu hiện tới đó)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Chỉ chạy 1 lần
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".reveal-up, .reveal-text, .reveal-img").forEach(el => observer.observe(el));

    // 2. Sticky Navbar
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
        } else {
            navbar.style.background = "rgba(255, 255, 255, 0.8)";
            navbar.style.boxShadow = "none";
        }
    });
});