document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 시 네비게이션 바 스타일 변경
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // 모바일 메뉴 클릭 시 메뉴 닫기
                if (window.innerWidth <= 768) {
                    const navLinks = document.querySelector('.nav-links');
                    navLinks.classList.remove('active');
                    const hamburger = document.querySelector('.hamburger');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // 앨범형/리스트형 뷰 토글
    const viewToggleBtn = document.getElementById('viewToggleBtn');
    const foodContainer = document.querySelector('.food-container');
    
    if (viewToggleBtn && foodContainer) {
        viewToggleBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            foodContainer.classList.toggle('list-view');
        });
    }

    // 모바일 메뉴 토글
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // 메뉴 링크 클릭 시 메뉴 닫기
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 메뉴 외부 클릭 시 메뉴 닫기
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}); 