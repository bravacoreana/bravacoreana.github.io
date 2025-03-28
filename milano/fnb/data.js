const restaurants = [
    {
        id: 1,
        area: "Brera",
        city: "Milan",
        name: "Pizzeria Capuano's",
        address: "Via Giuseppe Garibaldi, 125, 20121 Milano MI",
        addressLink: "https://maps.app.goo.gl/brbmQky3k3MtvUTJ8",
        description: "체인점이지만 어디를 가도 맛있는 피자 전문점입니다. 밀라노의 대표적인 피자 맛집 중 하나입니다.",
        tags: ["피자", "이탈리안", "체인점"],
        rating: 5.0,
        services: [
            { icon: "calendar-check", text: "예약 가능" },
            { icon: "motorcycle", text: "배달 가능" },
            { icon: "utensils", text: "테이크아웃" }
        ],
        nearby: [
            "브레라 미술관 (도보 5분)",
            "브레라 거리 (도보 3분)",
            "스포르체스코 성 (도보 10분)"
        ],
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.1733!3d45.4783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzQxLjkiTiA5wrAxMCczMy45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr"
    },
    {
        id: 2,
        area: "Isola",
        city: "Milan",
        name: "La Prosciutteria",
        address: "Via Panfilo Castaldi, 19, 20124 Milano MI",
        addressLink: "https://maps.app.goo.gl/zopfPCrJ72UuhaSY9",
        description: "플래터와 와인을 즐길 수 있는 체인점입니다. 초저녁 방문시 예약이 필수이며, 플래터는 2인 기준으로 선택하시면 됩니다. 짠 편이니 참고해 주세요.",
        tags: ["플래터", "와인", "체인점"],
        rating: 4.5,
        services: [
            { icon: "calendar-check", text: "예약 필수" },
            { icon: "wine-bottle", text: "와인" }
        ],
        nearby: [
            "밀라노 중앙역 (도보 5분)",
            "가리발디 거리 (도보 3분)",
            "이솔라 지역 (도보 8분)"
        ],
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.2044!3d45.4767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzM2LjEiTiA5wrAxMicxNS45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr"
    },
    {
        id: 3,
        area: "Brera",
        city: "Milan",
        name: "Ginmi",
        address: "Via Giuseppe Garibaldi, 77, 20121 Milano MI",
        addressLink: "https://maps.app.goo.gl/UsKQ3KMrWVvBmh7QA",
        description: "한식당으로, 모든 메뉴가 맛있는 맛집입니다. 밀라노에서 한식을 찾는 분들에게 추천드립니다.",
        tags: ["한식", "한식당"],
        rating: 5.0,
        services: [
            { icon: "calendar-check", text: "예약 가능" },
            { icon: "motorcycle", text: "배달 가능" }
        ],
        nearby: [
            "브레라 미술관 (도보 5분)",
            "브레라 거리 (도보 3분)",
            "스포르체스코 성 (도보 10분)"
        ],
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.1858!3d45.4722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzE5LjkiTiA5wrAxMScxMC45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr",
        isKoreanRecommended: true
    },
    {
        id: 4,
        area: "Brera",
        city: "Milan",
        name: "Noodle House",
        address: "Via Giuseppe Garibaldi, 77, 20121 Milano MI",
        addressLink: "https://maps.app.goo.gl/Qj1WKdVCdhrUEwYAA",
        description: "짜장면과 짬뽕이 맛있는 한식당입니다. 밀라노에서 중식 맛을 찾는 분들에게 추천드립니다.",
        tags: ["한식", "짜장면", "짬뽕"],
        rating: 5.0,
        services: [
            { icon: "calendar-check", text: "예약 가능" },
            { icon: "motorcycle", text: "배달 가능" }
        ],
        nearby: [
            "브레라 미술관 (도보 5분)",
            "브레라 거리 (도보 3분)",
            "스포르체스코 성 (도보 10분)"
        ],
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.1858!3d45.4722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzE5LjkiTiA5wrAxMScxMC45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr",
        isKoreanRecommended: true
    },
    {
        id: 5,
        area: "Brera",
        city: "Milan",
        name: "Casa infante",
        address: "Via Giuseppe Garibaldi, 77, 20121 Milano MI",
        addressLink: "https://maps.app.goo.gl/KqGzViY1brn3nqH8A",
        description: "젤라또 맛집입니다. 다양한 맛의 젤라또를 맛볼 수 있습니다.",
        tags: ["젤라또", "디저트", "아이스크림"],
        rating: 5.0,
        services: [
            { icon: "ice-cream", text: "테이크아웃" }
        ],
        nearby: [
            "브레라 미술관 (도보 5분)",
            "브레라 거리 (도보 3분)",
            "스포르체스코 성 (도보 10분)"
        ],
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.1858!3d45.4722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzE5LjkiTiA5wrAxMScxMC45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr"
    },
    {
        id: 6,
        area: "Porta Venezia",
        city: "Milan",
        name: "Nottingham Forest",
        address: "Viale Piave, 1, 20129 Milano MI",
        addressLink: "https://maps.app.goo.gl/Ry59adfMHoUisjZ86",
        description: "분위기 좋은 칵테일 바입니다. 매우 작은 공간이며 예약이 불가능합니다. 영업시간 전부터 줄서서 기다려야 합니다.",
        tags: ["칵테일", "바", "분위기"],
        rating: 5.0,
        services: [
            { icon: "clock", text: "예약 불가" },
            { icon: "glass-martini-alt", text: "칵테일" }
        ],
        nearby: [
            "포르타 베네치아 (도보 5분)",
            "인디로 몬타넬리 공원 (도보 8분)",
            "가리발디 거리 (도보 10분)"
        ],
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.2017!3d45.4677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzAzLjciTiA5wrAxMicwNi4xIkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr"
    },
    {
        id: 7,
        area: "Brera",
        city: "Milan",
        name: "Vergani",
        address: "Via Giuseppe Garibaldi, 77, 20121 Milano MI",
        addressLink: "https://maps.app.goo.gl/pjvxnd55KNE6ojxz7",
        description: "이탈리아 전역에서 유명한 카페 브랜드입니다. 디저트가 특히 맛있습니다.",
        tags: ["카페", "디저트", "브랜드"],
        rating: 5.0,
        services: [
            { icon: "coffee", text: "테이크아웃" }
        ],
        nearby: [
            "브레라 미술관 (도보 5분)",
            "브레라 거리 (도보 3분)",
            "스포르체스코 성 (도보 10분)"
        ],
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.1858!3d45.4722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzE5LjkiTiA5wrAxMScxMC45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr"
    },
    {
        id: 8,
        area: "Brera",
        city: "Milan",
        name: "La Piola",
        address: "Via Giuseppe Garibaldi, 77, 20121 Milano MI",
        addressLink: "https://maps.app.goo.gl/g7NY3ZXhu3paa5D4A",
        description: "밀라노 정통 레스토랑입니다. 코톨레타와 리조또가 맛있으며, 한국인 입맛에 잘 맞습니다.",
        tags: ["이탈리안", "코톨레타", "리조또"],
        rating: 5.0,
        services: [
            { icon: "calendar-check", text: "예약 가능" }
        ],
        nearby: [
            "브레라 미술관 (도보 5분)",
            "브레라 거리 (도보 3분)",
            "스포르체스코 성 (도보 10분)"
        ],
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.1858!3d45.4722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzE5LjkiTiA5wrAxMScxMC45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr",
        isKoreanRecommended: true
    }
]; 