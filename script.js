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

// 언어 데이터
const translations = {
    ko: {
        home: '홈',
        about: '소개',
        restaurants: '밀라노 맛집',
        contact: '문의',
        heroTitle: 'Liha Kim',
        heroSubtitle: '이탈리아 사는 리하킴',
        heroButton: '밀라노 맛집 리스트',
        contactTitle: 'Contact',
        contactSubtitle: '문의하기',
        email: 'contact@liha.kim',
        copyright: '© 2024 Bravacoreana. All rights reserved.',
        languages: {
            ko: '한국어',
            en: 'English',
            it: 'Italiano'
        },
        aboutTitle: 'About Me',
        aboutSubtitle: '이탈리아 사는 리하킴',
        aboutGreeting: '안녕하세요, 리하킴입니다!',
        aboutText1: '이탈리아 밀라노에서 살고 있는 한국인입니다. 이탈리아의 맛있는 음식과 문화를 공유하고 싶어 이 블로그를 시작했습니다.',
        aboutText2: '특히 밀라노의 맛집들을 소개하고 있어요. 한국인 관점에서 바라본 이탈리아 맛집들을 함께 나누고 싶습니다.',
        restaurantsTitle: '밀라노 맛집',
        restaurantsSubtitle: '이탈리아 밀라노의 맛있는 맛집들을 소개합니다',
        viewMap: '지도 보기'
    },
    en: {
        home: 'Home',
        about: 'About',
        restaurants: 'Milan Restaurants',
        contact: 'Contact',
        heroTitle: 'Liha Kim',
        heroSubtitle: 'A Korean in Italy',
        heroButton: 'Milan Restaurant List',
        contactTitle: 'Contact',
        contactSubtitle: 'Get in Touch',
        email: 'contact@liha.kim',
        copyright: '© 2024 Bravacoreana. All rights reserved.',
        languages: {
            ko: '한국어',
            en: 'English',
            it: 'Italiano'
        },
        aboutTitle: 'About Me',
        aboutSubtitle: 'A Korean in Italy',
        aboutGreeting: 'Hello, I\'m Liha Kim!',
        aboutText1: 'I\'m a Korean living in Milan, Italy. I started this blog to share delicious Italian food and culture.',
        aboutText2: 'I especially introduce restaurants in Milan. I want to share Italian restaurants from a Korean perspective.',
        restaurantsTitle: 'Milan Restaurants',
        restaurantsSubtitle: 'Introducing delicious restaurants in Milan, Italy',
        viewMap: 'View Map'
    },
    it: {
        home: 'Home',
        about: 'Chi Sono',
        restaurants: 'Ristoranti Milano',
        contact: 'Contatti',
        heroTitle: 'Liha Kim',
        heroSubtitle: 'Una Coreana in Italia',
        heroButton: 'Lista Ristoranti Milano',
        contactTitle: 'Contatti',
        contactSubtitle: 'Contattami',
        email: 'contact@liha.kim',
        copyright: '© 2024 Bravacoreana. Tutti i diritti riservati.',
        languages: {
            ko: '한국어',
            en: 'English',
            it: 'Italiano'
        },
        aboutTitle: 'Chi Sono',
        aboutSubtitle: 'Una Coreana in Italia',
        aboutGreeting: 'Ciao, sono Liha Kim!',
        aboutText1: 'Sono una coreana che vive a Milano, Italia. Ho iniziato questo blog per condividere il delizioso cibo e la cultura italiana.',
        aboutText2: 'In particolare, introduco i ristoranti di Milano. Voglio condividere i ristoranti italiani da una prospettiva coreana.',
        restaurantsTitle: 'Ristoranti Milano',
        restaurantsSubtitle: 'Presentazione dei deliziosi ristoranti di Milano, Italia',
        viewMap: 'Vedi Mappa'
    }
};

// 현재 언어 설정
let currentLang = localStorage.getItem('language') || 'ko';

// 언어 전환 함수
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // 현재 언어 표시 업데이트
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = lang.toUpperCase();
    }
    
    // 드롭다운 메뉴 닫기
    const dropdownContent = document.querySelector('.lang-dropdown-content');
    if (dropdownContent) {
        dropdownContent.classList.remove('active');
    }
    
    // 텍스트 업데이트
    updateTexts();
}

// 텍스트 업데이트 함수
function updateTexts() {
    // 모든 data-key 속성을 가진 요소 업데이트
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // 페이지별 히어로 섹션 업데이트
    const path = window.location.pathname;
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-content p');

    if (heroTitle && heroSubtitle) {
        if (path === '/about') {
            heroTitle.textContent = translations[currentLang].aboutTitle;
            heroSubtitle.textContent = translations[currentLang].aboutSubtitle;
        } else if (path === '/contact') {
            heroTitle.textContent = translations[currentLang].contactTitle;
            heroSubtitle.textContent = translations[currentLang].contactSubtitle;
        } else if (path === '/milano/fnb/') {
            heroTitle.textContent = translations[currentLang].restaurantsTitle;
            heroSubtitle.textContent = translations[currentLang].restaurantsSubtitle;
        } else {
            heroTitle.textContent = translations[currentLang].heroTitle;
            heroSubtitle.textContent = translations[currentLang].heroSubtitle;
        }
    }
}

// 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    // 언어 드롭다운 토글
    const dropdownBtn = document.querySelector('.lang-dropdown-btn');
    const dropdownContent = document.querySelector('.lang-dropdown-content');
    
    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownContent.classList.toggle('active');
        });
        
        // 언어 선택 이벤트
        dropdownContent.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = link.getAttribute('data-lang');
                changeLanguage(lang);
            });
        });
        
        // 외부 클릭 시 드롭다운 닫기
        document.addEventListener('click', () => {
            dropdownContent.classList.remove('active');
        });
    }
    
    // 초기 언어 설정
    changeLanguage(currentLang);
}); 