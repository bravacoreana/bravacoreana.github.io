const restaurants = [
    {
        id: 1,
        area: {
            ko: "브레라",
            en: "Brera",
            it: "Brera"
        },
        city: {
            ko: "밀라노",
            en: "Milan",
            it: "Milano"
        },
        name: "Pizzeria Capuano's",
        address: "Via Giuseppe Garibaldi, 125, 20121 Milano MI",
        addressLink: "https://maps.app.goo.gl/brbmQky3k3MtvUTJ8",
        description: {
            ko: "체인점이지만 어디를 가도 맛있는 피자 전문점입니다. 밀라노의 대표적인 피자 맛집 중 하나입니다.",
            en: "A chain restaurant but serves delicious pizza everywhere. One of the most popular pizza places in Milan.",
            it: "Una catena di ristoranti che serve pizza deliziosa ovunque. Uno dei ristoranti di pizza più popolari a Milano."
        },
        tags: {
            ko: ["피자", "이탈리안", "체인점"],
            en: ["Pizza", "Italian", "Chain"],
            it: ["Pizza", "Italiano", "Catena"]
        },
        rating: 5.0,
        services: [
            { 
                icon: "calendar-check", 
                text: {
                    ko: "예약 가능",
                    en: "Reservation Available",
                    it: "Prenotazione Disponibile"
                }
            },
            { 
                icon: "motorcycle", 
                text: {
                    ko: "배달 가능",
                    en: "Delivery Available",
                    it: "Consegna Disponibile"
                }
            },
            { 
                icon: "utensils", 
                text: {
                    ko: "테이크아웃",
                    en: "Takeaway",
                    it: "Da Portare Via"
                }
            }
        ],
        nearby: {
            ko: [
                "브레라 미술관 (도보 5분)",
                "브레라 거리 (도보 3분)",
                "스포르체스코 성 (도보 10분)"
            ],
            en: [
                "Brera Art Gallery (5 min walk)",
                "Brera District (3 min walk)",
                "Sforzesco Castle (10 min walk)"
            ],
            it: [
                "Pinacoteca di Brera (5 min a piedi)",
                "Quartiere Brera (3 min a piedi)",
                "Castello Sforzesco (10 min a piedi)"
            ]
        },
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.1733!3d45.4783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzQxLjkiTiA5wrAxMCczMy45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr"
    },
    {
        id: 2,
        area: {
            ko: "이솔라",
            en: "Isola",
            it: "Isola"
        },
        city: {
            ko: "밀라노",
            en: "Milan",
            it: "Milano"
        },
        name: "La Prosciutteria",
        address: "Via Panfilo Castaldi, 19, 20124 Milano MI",
        addressLink: "https://maps.app.goo.gl/zopfPCrJ72UuhaSY9",
        description: {
            ko: "플래터와 와인을 즐길 수 있는 체인점입니다. 초저녁 방문시 예약이 필수이며, 플래터는 2인 기준으로 선택하시면 됩니다. 짠 편이니 참고해 주세요.",
            en: "A chain restaurant serving platters and wine. Reservation is required for early evening visits, and platters are for 2 people. Note that it's on the salty side.",
            it: "Una catena di ristoranti che serve taglieri e vino. La prenotazione è obbligatoria per le visite serali, e i taglieri sono per 2 persone. Nota che è abbastanza salato."
        },
        tags: {
            ko: ["플래터", "와인", "체인점"],
            en: ["Platter", "Wine", "Chain"],
            it: ["Tagliere", "Vino", "Catena"]
        },
        rating: 4.5,
        services: [
            { 
                icon: "calendar-check", 
                text: {
                    ko: "예약 필수",
                    en: "Reservation Required",
                    it: "Prenotazione Obbligatoria"
                }
            },
            { 
                icon: "wine-bottle", 
                text: {
                    ko: "와인",
                    en: "Wine",
                    it: "Vino"
                }
            }
        ],
        nearby: {
            ko: [
                "밀라노 중앙역 (도보 5분)",
                "가리발디 거리 (도보 3분)",
                "이솔라 지역 (도보 8분)"
            ],
            en: [
                "Milan Central Station (5 min walk)",
                "Via Garibaldi (3 min walk)",
                "Isola District (8 min walk)"
            ],
            it: [
                "Stazione Centrale di Milano (5 min a piedi)",
                "Via Garibaldi (3 min a piedi)",
                "Quartiere Isola (8 min a piedi)"
            ]
        },
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.2044!3d45.4767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzM2LjEiTiA5wrAxMicxNS45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr"
    },
    {
        id: 3,
        area: {
            ko: "브레라",
            en: "Brera",
            it: "Brera"
        },
        city: {
            ko: "밀라노",
            en: "Milan",
            it: "Milano"
        },
        name: "Ginmi",
        address: "Via Giuseppe Garibaldi, 77, 20121 Milano MI",
        addressLink: "https://maps.app.goo.gl/UsKQ3KMrWVvBmh7QA",
        description: {
            ko: "한식당으로, 모든 메뉴가 맛있는 맛집입니다. 밀라노에서 한식을 찾는 분들에게 추천드립니다.",
            en: "A Korean restaurant where all menu items are delicious. Recommended for those looking for Korean food in Milan.",
            it: "Un ristorante coreano dove tutti i piatti sono deliziosi. Consigliato per chi cerca cibo coreano a Milano."
        },
        tags: {
            ko: ["한식", "한식당"],
            en: ["Korean", "Korean Restaurant"],
            it: ["Coreano", "Ristorante Coreano"]
        },
        rating: 5.0,
        services: [
            { 
                icon: "calendar-check", 
                text: {
                    ko: "예약 가능",
                    en: "Reservation Available",
                    it: "Prenotazione Disponibile"
                }
            },
            { 
                icon: "motorcycle", 
                text: {
                    ko: "배달 가능",
                    en: "Delivery Available",
                    it: "Consegna Disponibile"
                }
            }
        ],
        nearby: {
            ko: [
                "브레라 미술관 (도보 5분)",
                "브레라 거리 (도보 3분)",
                "스포르체스코 성 (도보 10분)"
            ],
            en: [
                "Brera Art Gallery (5 min walk)",
                "Brera District (3 min walk)",
                "Sforzesco Castle (10 min walk)"
            ],
            it: [
                "Pinacoteca di Brera (5 min a piedi)",
                "Quartiere Brera (3 min a piedi)",
                "Castello Sforzesco (10 min a piedi)"
            ]
        },
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.1858!3d45.4722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzE5LjkiTiA5wrAxMScxMC45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr",
        isKoreanRecommended: true
    },
    {
        id: 4,
        area: {
            ko: "브레라",
            en: "Brera",
            it: "Brera"
        },
        city: {
            ko: "밀라노",
            en: "Milan",
            it: "Milano"
        },
        name: "Noodle House",
        address: "Via Giuseppe Garibaldi, 77, 20121 Milano MI",
        addressLink: "https://maps.app.goo.gl/Qj1WKdVCdhrUEwYAA",
        description: {
            ko: "짜장면과 짬뽕이 맛있는 한식당입니다. 밀라노에서 중식 맛을 찾는 분들에게 추천드립니다.",
            en: "A Korean restaurant famous for its Jajangmyeon and Jjamppong. Recommended for those looking for Chinese-Korean food in Milan.",
            it: "Un ristorante coreano famoso per il suo Jajangmyeon e Jjamppong. Consigliato per chi cerca cibo cino-coreano a Milano."
        },
        tags: {
            ko: ["한식", "짜장면", "짬뽕"],
            en: ["Korean", "Jajangmyeon", "Jjamppong"],
            it: ["Coreano", "Jajangmyeon", "Jjamppong"]
        },
        rating: 5.0,
        services: [
            { 
                icon: "calendar-check", 
                text: {
                    ko: "예약 가능",
                    en: "Reservation Available",
                    it: "Prenotazione Disponibile"
                }
            },
            { 
                icon: "motorcycle", 
                text: {
                    ko: "배달 가능",
                    en: "Delivery Available",
                    it: "Consegna Disponibile"
                }
            }
        ],
        nearby: {
            ko: [
                "브레라 미술관 (도보 5분)",
                "브레라 거리 (도보 3분)",
                "스포르체스코 성 (도보 10분)"
            ],
            en: [
                "Brera Art Gallery (5 min walk)",
                "Brera District (3 min walk)",
                "Sforzesco Castle (10 min walk)"
            ],
            it: [
                "Pinacoteca di Brera (5 min a piedi)",
                "Quartiere Brera (3 min a piedi)",
                "Castello Sforzesco (10 min a piedi)"
            ]
        },
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.1858!3d45.4722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzE5LjkiTiA5wrAxMScxMC45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr",
        isKoreanRecommended: true
    },
    {
        id: 5,
        area: {
            ko: "브레라",
            en: "Brera",
            it: "Brera"
        },
        city: {
            ko: "밀라노",
            en: "Milan",
            it: "Milano"
        },
        name: "Casa infante",
        address: "Via Giuseppe Garibaldi, 77, 20121 Milano MI",
        addressLink: "https://maps.app.goo.gl/KqGzViY1brn3nqH8A",
        description: {
            ko: "젤라또 맛집입니다. 다양한 맛의 젤라또를 맛볼 수 있습니다.",
            en: "A famous gelato shop. You can try various flavors of gelato.",
            it: "Una famosa gelateria. Puoi provare vari gusti di gelato."
        },
        tags: {
            ko: ["젤라또", "디저트", "아이스크림"],
            en: ["Gelato", "Dessert", "Ice Cream"],
            it: ["Gelato", "Dolci", "Gelato"]
        },
        rating: 5.0,
        services: [
            { 
                icon: "ice-cream", 
                text: {
                    ko: "테이크아웃",
                    en: "Takeaway",
                    it: "Da Portare Via"
                }
            }
        ],
        nearby: {
            ko: [
                "브레라 미술관 (도보 5분)",
                "브레라 거리 (도보 3분)",
                "스포르체스코 성 (도보 10분)"
            ],
            en: [
                "Brera Art Gallery (5 min walk)",
                "Brera District (3 min walk)",
                "Sforzesco Castle (10 min walk)"
            ],
            it: [
                "Pinacoteca di Brera (5 min a piedi)",
                "Quartiere Brera (3 min a piedi)",
                "Castello Sforzesco (10 min a piedi)"
            ]
        },
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.1858!3d45.4722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzE5LjkiTiA5wrAxMScxMC45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr"
    },
    {
        id: 6,
        area: {
            ko: "포르타 베네치아",
            en: "Porta Venezia",
            it: "Porta Venezia"
        },
        city: {
            ko: "밀라노",
            en: "Milan",
            it: "Milano"
        },
        name: "Nottingham Forest",
        address: "Viale Piave, 1, 20129 Milano MI",
        addressLink: "https://maps.app.goo.gl/Ry59adfMHoUisjZ86",
        description: {
            ko: "분위기 좋은 칵테일 바입니다. 매우 작은 공간이며 예약이 불가능합니다. 영업시간 전부터 줄서서 기다려야 합니다.",
            en: "A cozy cocktail bar. Very small space and reservations are not possible. You need to queue before opening hours.",
            it: "Un accogliente cocktail bar. Spazio molto piccolo e le prenotazioni non sono possibili. Devi fare la fila prima dell'orario di apertura."
        },
        tags: {
            ko: ["칵테일", "바", "분위기"],
            en: ["Cocktail", "Bar", "Atmosphere"],
            it: ["Cocktail", "Bar", "Atmosfera"]
        },
        rating: 5.0,
        services: [
            { 
                icon: "clock", 
                text: {
                    ko: "예약 불가",
                    en: "No Reservation",
                    it: "Nessuna Prenotazione"
                }
            },
            { 
                icon: "glass-martini-alt", 
                text: {
                    ko: "칵테일",
                    en: "Cocktails",
                    it: "Cocktail"
                }
            }
        ],
        nearby: {
            ko: [
                "포르타 베네치아 (도보 5분)",
                "인디로 몬타넬리 공원 (도보 8분)",
                "가리발디 거리 (도보 10분)"
            ],
            en: [
                "Porta Venezia (5 min walk)",
                "Indro Montanelli Gardens (8 min walk)",
                "Via Garibaldi (10 min walk)"
            ],
            it: [
                "Porta Venezia (5 min a piedi)",
                "Giardini Indro Montanelli (8 min a piedi)",
                "Via Garibaldi (10 min a piedi)"
            ]
        },
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.2017!3d45.4677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzAzLjciTiA5wrAxMicwNi4xIkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr"
    },
    {
        id: 7,
        area: {
            ko: "브레라",
            en: "Brera",
            it: "Brera"
        },
        city: {
            ko: "밀라노",
            en: "Milan",
            it: "Milano"
        },
        name: "Vergani",
        address: "Via Giuseppe Garibaldi, 77, 20121 Milano MI",
        addressLink: "https://maps.app.goo.gl/pjvxnd55KNE6ojxz7",
        description: {
            ko: "이탈리아 전역에서 유명한 카페 브랜드입니다. 디저트가 특히 맛있습니다.",
            en: "A famous cafe brand throughout Italy. Their desserts are especially delicious.",
            it: "Un famoso brand di caffè in tutta Italia. I loro dolci sono particolarmente deliziosi."
        },
        tags: {
            ko: ["카페", "디저트", "브랜드"],
            en: ["Cafe", "Dessert", "Brand"],
            it: ["Caffè", "Dolci", "Brand"]
        },
        rating: 5.0,
        services: [
            { 
                icon: "coffee", 
                text: {
                    ko: "테이크아웃",
                    en: "Takeaway",
                    it: "Da Portare Via"
                }
            }
        ],
        nearby: {
            ko: [
                "브레라 미술관 (도보 5분)",
                "브레라 거리 (도보 3분)",
                "스포르체스코 성 (도보 10분)"
            ],
            en: [
                "Brera Art Gallery (5 min walk)",
                "Brera District (3 min walk)",
                "Sforzesco Castle (10 min walk)"
            ],
            it: [
                "Pinacoteca di Brera (5 min a piedi)",
                "Quartiere Brera (3 min a piedi)",
                "Castello Sforzesco (10 min a piedi)"
            ]
        },
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.1858!3d45.4722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzE5LjkiTiA5wrAxMScxMC45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr"
    },
    {
        id: 8,
        area: {
            ko: "브레라",
            en: "Brera",
            it: "Brera"
        },
        city: {
            ko: "밀라노",
            en: "Milan",
            it: "Milano"
        },
        name: "La Piola",
        address: "Via Giuseppe Garibaldi, 77, 20121 Milano MI",
        addressLink: "https://maps.app.goo.gl/g7NY3ZXhu3paa5D4A",
        description: {
            ko: "밀라노 정통 레스토랑입니다. 코톨레타와 리조또가 맛있으며, 한국인 입맛에 잘 맞습니다.",
            en: "An authentic Milanese restaurant. Their cotoletta and risotto are delicious and suit Korean taste buds.",
            it: "Un autentico ristorante milanese. La loro cotoletta e risotto sono deliziosi e si adattano al palato coreano."
        },
        tags: {
            ko: ["이탈리안", "코톨레타", "리조또"],
            en: ["Italian", "Cotoletta", "Risotto"],
            it: ["Italiano", "Cotoletta", "Risotto"]
        },
        rating: 5.0,
        services: [
            { 
                icon: "calendar-check", 
                text: {
                    ko: "예약 가능",
                    en: "Reservation Available",
                    it: "Prenotazione Disponibile"
                }
            }
        ],
        nearby: {
            ko: [
                "브레라 미술관 (도보 5분)",
                "브레라 거리 (도보 3분)",
                "스포르체스코 성 (도보 10분)"
            ],
            en: [
                "Brera Art Gallery (5 min walk)",
                "Brera District (3 min walk)",
                "Sforzesco Castle (10 min walk)"
            ],
            it: [
                "Pinacoteca di Brera (5 min a piedi)",
                "Quartiere Brera (3 min a piedi)",
                "Castello Sforzesco (10 min a piedi)"
            ]
        },
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d9.1858!3d45.4722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzE5LjkiTiA5wrAxMScxMC45IkU!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr",
        isKoreanRecommended: true
    }
]; 