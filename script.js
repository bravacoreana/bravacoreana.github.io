// 현재 언어 설정
let currentLang = localStorage.getItem('language') || 'ko';

// 언어 데이터
const translations = {
    ko: {
        home: '홈',
        about: '소개',
        restaurants: '맛집',
        contact: '문의',
        heroTitle: 'Liha Kim',
        heroSubtitle: '이탈리아 사는 리하킴',
        heroButton: '밀라노 맛집 리스트',
        aboutTitle: '소개',
        aboutSubtitle: '이탈리아 사는 리하킴',
        aboutGreeting: '안녕하세요, 리하킴입니다!',
        aboutText1: '이탈리아 밀라노에서 살고 있는 한국인입니다. 이탈리아 여행, 음식, 문화 등 이탈리아를 소개하는 콘텐츠를 만들어요!.',
        contactTitle: '문의하기',
        languages: {
            ko: '한국어',
            en: 'English',
            it: 'Italiano'
        },
        restaurantsTitle: '밀라노 맛집',
        restaurantsSubtitle: '이탈리아 밀라노의 맛집들을 소개합니다',
        viewMap: '지도 보기',
        koreanRecommended: '한국인 추천',
        viewToggle: '보기 방식',
        listView: '리스트 보기',
        gridView: '그리드 보기',
        mapView: '지도 보기',
        rating: '별점',
        address: '주소',
        description: '설명',
        tags: '태그',
        serviceOptions: '서비스 옵션',
        nearbyAttractions: '주변 명소',
        area: '지역',
        city: '도시',
        restaurant1: '밀라노 레스토랑',
        address1: '밀라노 비아 밀라노 123',
        description1: '밀라노 중심부의 정통 이탈리아 요리',
        tag1: '이탈리아',
        tag2: '파인 다이닝',
        rating1: '4.5',
        service1: '와이파이',
        service2: '주차',
        nearby1: '주변 명소',
        attraction1: '밀라노 대성당',
        attraction2: '비토리오 에마누엘레 2세 갤러리',
        area1: '센트로',
        city1: '밀라노'
    },
    en: {
        home: 'Home',
        about: 'About',
        restaurants: 'Restaurants',
        contact: 'Contact',
        heroTitle: 'Liha Kim',
        heroSubtitle: 'Living in Italy',
        heroButton: 'Milan Restaurant List',
        aboutTitle: 'About',
        aboutSubtitle: 'Living in Italy',
        aboutGreeting: 'Hello, I\'m Liha Kim!',
        aboutText1: 'I\'m a Korean living in Milan, Italy. I create content introducing Italy through travel, food, and culture!',
        contactTitle: 'Contact',
        languages: {
            ko: '한국어',
            en: 'English',
            it: 'Italiano'
        },
        restaurantsTitle: 'Milan Restaurants',
        restaurantsSubtitle: 'Introducing delicious restaurants in Milan, Italy',
        viewMap: 'Map View',
        koreanRecommended: 'Korean Recommended',
        viewToggle: 'View Toggle',
        listView: 'List View',
        gridView: 'Grid View',
        mapView: 'Map View',
        rating: 'Rating',
        address: 'Address',
        description: 'Description',
        tags: 'Tags',
        serviceOptions: 'Service Options',
        nearbyAttractions: 'Nearby Attractions',
        area: 'Area',
        city: 'City',
        restaurant1: 'Milan Restaurant',
        address1: 'Via Milano 123, Milano',
        description1: 'Authentic Italian cuisine in the heart of Milan',
        tag1: 'Italian',
        tag2: 'Fine Dining',
        rating1: '4.5',
        service1: 'WiFi',
        service2: 'Parking',
        nearby1: 'Nearby Attractions',
        attraction1: 'Milan Cathedral',
        attraction2: 'Galleria Vittorio Emanuele II',
        area1: 'Centro',
        city1: 'Milano'
    },
    it: {
        home: 'Home',
        about: 'Chi Sono',
        restaurants: 'Ristoranti',
        contact: 'Contatti',
        heroTitle: 'Liha Kim',
        heroSubtitle: 'Vivendo in Italia',
        heroButton: 'Lista Ristoranti Milano',
        aboutTitle: 'Chi Sono',
        aboutSubtitle: 'Vivendo in Italia',
        aboutGreeting: 'Ciao, sono Liha Kim!',
        aboutText1: 'Sono una coreana che vive a Milano, Italia. Creo contenuti che introducono l\'Italia attraverso viaggi, cibo e cultura!',
        contactTitle: 'Contatti',
        languages: {
            ko: '한국어',
            en: 'English',
            it: 'Italiano'
        },
        restaurantsTitle: 'Ristoranti Milano',
        restaurantsSubtitle: 'Presentazione dei deliziosi ristoranti di Milano, Italia',
        viewMap: 'Vedi Mappa',
        koreanRecommended: 'Consigliato dai Coreani',
        viewToggle: 'Cambia Vista',
        listView: 'Vista Lista',
        gridView: 'Vista Griglia',
        mapView: 'Vista Mappa',
        rating: 'Valutazione',
        address: 'Indirizzo',
        description: 'Descrizione',
        tags: 'Tag',
        serviceOptions: 'Opzioni di Servizio',
        nearbyAttractions: 'Attrazioni Vicini',
        area: 'Area',
        city: 'Città',
        restaurant1: 'Ristorante Milano',
        address1: 'Via Milano 123, Milano',
        description1: 'Cucina italiana autentica nel cuore di Milano',
        tag1: 'Italiana',
        tag2: 'Ristorante Fine Dining',
        rating1: '4.5',
        service1: 'WiFi',
        service2: 'Parcheggio',
        nearby1: 'Attrazioni Vicini',
        attraction1: 'Duomo di Milano',
        attraction2: 'Galleria Vittorio Emanuele II',
        area1: 'Centro',
        city1: 'Milano'
    }
};

// 초기 언어 설정 (DOM 로드 전)
document.documentElement.lang = currentLang;
updateTexts();

document.addEventListener('DOMContentLoaded', function() {
    // 현재 언어 표시 업데이트
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = currentLang.toUpperCase();
    }
    
    // 현재 선택된 언어에 active 클래스 추가
    const currentLangLink = document.querySelector(`.lang-dropdown-content a[data-lang="${currentLang}"]`);
    if (currentLangLink) {
        currentLangLink.classList.add('active');
    }

    // 언어 선택 옵션 텍스트 설정
    document.querySelectorAll('.lang-dropdown-content a').forEach(link => {
        const lang = link.getAttribute('data-lang');
        if (translations[currentLang].languages[lang]) {
            link.textContent = translations[currentLang].languages[lang];
        }
    });

    // 언어 설정이 완료된 후 내비게이션 표시
    const navigation = document.querySelector('.nav-links');
    if (navigation) {
        navigation.classList.add('loaded');
    }

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
    const langDropdownContent = document.querySelector('.lang-dropdown-content');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        if (langDropdownContent) {
            langDropdownContent.classList.remove('show');
        }
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

// 언어 전환 함수
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // 현재 언어 표시 업데이트
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = lang.toUpperCase();
    }
    
    // 모든 언어 옵션에서 active 클래스 제거
    document.querySelectorAll('.lang-dropdown-content a').forEach(link => {
        link.classList.remove('active');
    });
    
    // 현재 선택된 언어에 active 클래스 추가
    document.querySelector(`.lang-dropdown-content a[data-lang="${lang}"]`).classList.add('active');
    
    // 드롭다운 메뉴 닫기
    const dropdownContent = document.querySelector('.lang-dropdown-content');
    if (dropdownContent) {
        dropdownContent.classList.remove('show');
    }
    
    // 텍스트 업데이트
    updateTexts();
    updateHeroSection();
}

// 텍스트 업데이트 함수
function updateTexts() {
    // 모든 data-key 속성을 가진 요소 업데이트
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.value = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });

    // 맛집 카드 업데이트
    updateFoodCards();
}

// 언어 드롭다운 토글
const langDropdownBtn = document.querySelector('.lang-dropdown-btn');
const langDropdownContent = document.querySelector('.lang-dropdown-content');
const langLinks = document.querySelectorAll('.lang-dropdown-content a');

// 언어 선택 이벤트 리스너
langDropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdownContent.classList.toggle('show');
});

langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = link.getAttribute('data-lang');
        if (lang !== currentLang) {
            changeLanguage(lang);
            langDropdownContent.classList.remove('show');
        }
    });
});

// 드롭다운 외부 클릭 시 닫기
document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-dropdown')) {
        langDropdownContent.classList.remove('show');
    }
});

// ESC 키로 팝업 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        langDropdownContent.classList.remove('show');
    }
});

// 맛집 카드 업데이트 함수
function updateFoodCards() {
    const foodItems = document.querySelectorAll('.food-item');
    foodItems.forEach(item => {
        const title = item.querySelector('h3');
        const description = item.querySelector('.description');
        const address = item.querySelector('.address');
        const tags = item.querySelectorAll('.tags span');
        const serviceOptions = item.querySelectorAll('.service-item span');
        const nearbyAttractions = item.querySelector('.nearby-attractions h4');
        const rating = item.querySelector('.rating-number');
        const area = item.querySelector('.area');
        const city = item.querySelector('.city');

        // 제목 업데이트
        if (title) {
            const key = title.getAttribute('data-key');
            if (key && translations[currentLang][key]) {
                title.textContent = translations[currentLang][key];
            }
        }

        // 설명 업데이트
        if (description) {
            const key = description.getAttribute('data-key');
            if (key && translations[currentLang][key]) {
                description.textContent = translations[currentLang][key];
            }
        }

        // 주소 업데이트
        if (address) {
            const key = address.getAttribute('data-key');
            if (key && translations[currentLang][key]) {
                address.textContent = translations[currentLang][key];
            }
        }

        // 태그 업데이트
        if (tags) {
            tags.forEach(tag => {
                const key = tag.getAttribute('data-key');
                if (key && translations[currentLang][key]) {
                    tag.textContent = translations[currentLang][key];
                }
            });
        }

        // 서비스 옵션 업데이트
        if (serviceOptions) {
            serviceOptions.forEach(option => {
                const key = option.getAttribute('data-key');
                if (key && translations[currentLang][key]) {
                    option.textContent = translations[currentLang][key];
                }
            });
        }

        // 주변 명소 업데이트
        if (nearbyAttractions) {
            const key = nearbyAttractions.getAttribute('data-key');
            if (key && translations[currentLang][key]) {
                nearbyAttractions.textContent = translations[currentLang][key];
            }
        }

        // 별점 업데이트
        if (rating) {
            const key = rating.getAttribute('data-key');
            if (key && translations[currentLang][key]) {
                rating.textContent = translations[currentLang][key];
            }
        }

        // 지역 업데이트
        if (area) {
            const key = area.getAttribute('data-key');
            if (key && translations[currentLang][key]) {
                area.textContent = translations[currentLang][key];
            }
        }

        // 도시 업데이트
        if (city) {
            const key = city.getAttribute('data-key');
            if (key && translations[currentLang][key]) {
                city.textContent = translations[currentLang][key];
            }
        }
    });
}

// 페이지별 히어로 섹션 업데이트 함수
function updateHeroSection() {
    const currentLang = getCurrentLanguage();
    const path = window.location.pathname;
    
    // 페이지별 히어로 섹션 업데이트
    if (path === '/') {
        // 메인 페이지
        document.querySelector('.hero h1').textContent = translations[currentLang].heroTitle;
        document.querySelector('.hero p').textContent = translations[currentLang].heroSubtitle;
        document.querySelector('.hero-description').textContent = translations[currentLang].heroDescription;
    } else if (path === '/about/') {
        // 소개 페이지
        document.querySelector('.about-hero h1').textContent = translations[currentLang].aboutTitle;
        document.querySelector('.about-hero p').textContent = translations[currentLang].aboutSubtitle;
    } else if (path === '/contact/') {
        // 문의 페이지
        document.querySelector('.contact-hero h1').textContent = translations[currentLang].contactTitle;
        document.querySelector('.contact-hero p').textContent = translations[currentLang].contactSubtitle;
    }
} 