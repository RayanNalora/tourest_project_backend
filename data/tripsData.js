const trips = [
      {
        id: 1,
        image :"/is1.jpg",
        title: "Istanbul",
        country: "Turkey",
        price: "$450",
        duration: "5 Days",
        rating: 4.7,
        text: "Istanbul is a unique city that connects Europe and Asia. It offers a rich blend of history, culture, and modern life. Visitors can enjoy stunning architecture, vibrant markets, and delicious cuisine.",
        images: [
          "/is1.jpg", "/is2.jpg", "/is3.jpg", "/is4.jpg", "/is5.jpg"
        ],
             foods: ["/isf1.jpg" ,"/isf2.jpg" ,"/isf3.jpg" ,"/isf4.jpg" ,"/isf5.jpg" 
        ],
        hotels: [
          { name: "Dosso Dossi Hotel", "rating": 4.4, "distance": "500m", "price": "$120/night" },
          { name: "Sultanahmet Hotel", "rating": 4.6, "distance": "300m", "price": "$150/night" }
        ],
        places: [
          { name: "Hagia Sophia", "image": "/places/hagia.jpg" },
          { name: "Blue Mosque", "image": "/places/mosque.jpg" }
        ],
        plan: [
          "Arrival and hotel check-in",
          "Visit Hagia Sophia and Blue Mosque",
          "Bosphorus cruise",
          "Shopping at Grand Bazaar",
          "Departure"
        ],
      tips: [
          "Best time: April - June",
          "Currency: Turkish Lira",
          "Language: Turkish"
        ]
      },
      {
        id: 2,
        image :"/is1.jpg",
        title: "Dubai",
      country: "UAE",
        price: "$700",
        duration: "4 Days",
        rating: 4.8,
        text: "Dubai is a modern city known for luxury and innovation. It features iconic skyscrapers, shopping malls, and desert adventures. Visitors can enjoy both city life and traditional Arabian culture.",
        images: ["/images/dubai1.jpg", "/images/dubai2.jpg"],
        foods: ["/isf1.jpg" ,"/isf1.jpg" ,"/isf1.jpg" ,"/isf1.jpg" ,"/isf1.jpg" 
        ],
        hotels: [
          { name: "Atlantis The Palm", "rating": 4.9, "distance": "Beachfront", "price": "$300/night" },
          { name: "Burj Al Arab Hotel", "rating": 5.0, "distance": "2km", "price": "$1000/night" }
        ],
        places: [
          { name: "Burj Khalifa", "image": "/places/burj.jpg" },
          { name: "Dubai Mall", "image": "/places/mall.jpg" }
        ],
        plan: [
          "Arrival and hotel check-in",
          "Visit Burj Khalifa and Dubai Mall",
          "Desert safari",
          "Beach day",
          "Departure"
        ],
        tips: [
          "Best time: November - March",
          "Currency: UAE Dirham",
          "Language: Arabic / English"
        ]
      },
      {
        id: 3,
        image :"/is1.jpg",
        title: "Paris",
        country: "France",
        price: "$600",
        duration: "5 Days",
        rating: 4.9,
        text: "Paris is the city of love and romance, famous for its art and culture. It offers world-class museums, historic landmarks, and charming streets. Visitors can enjoy fine cuisine and unforgettable views.",
        images: ["/images/paris1.jpg", "/images/paris2.jpg"],
        foods: ["/isf1.jpg" ,"/isf1.jpg" ,"/isf1.jpg" ,"/isf1.jpg" ,"/isf1.jpg" 
        ],
        hotels: [
          { name: "Hotel Le Meurice", "rating": 4.7, "distance": "City Center", "price": "$400/night" },
          { name: "Hotel Eiffel", "rating": 4.5, "distance": "1km", "price": "$250/night" }
        ],
        places: [
          { name: "Eiffel Tower", "image": "/places/eiffel.jpg" },
          { name: "Louvre Museum", "image": "/places/louvre.jpg" }
        ],
        plan: [
          "Arrival and hotel check-in", 
          "Visit Eiffel Tower",
          "Explore Louvre Museum",
          "Seine river cruise",
          "Departure"
        ],
        tips: [
          "Best time: April - June",
          "Currency: Euro",
          "Language: French"
        ]
        },
        {
            id: 4,
            image :"/is1.jpg",
            title: "Rome",
            country: "Italy",
            price: "$550",
            duration: "5 Days",
            rating: 4.6,
            text: "Rome is a historic city filled with ancient landmarks and rich culture. It is home to famous sites like the Colosseum and Vatican City. Visitors can explore history while enjoying Italian cuisine.",
            images: ["/images/rome1.jpg", "/images/rome2.jpg"],
            foods: ["/isf1.jpg" ,"/isf1.jpg" ,"/isf1.jpg" ,"/isf1.jpg" ,"/isf1.jpg" 
            ],
        hotels: [
        { name: "Hotel Colosseum", "rating": 4.5, "distance": "500m", "price": "$180/night" },
        { name: "Rome Luxury Suites", "rating": 4.7, "distance": "1km", "price": "$220/night" }
        ],
        places: [
        { name: "Colosseum", "image": "/places/colosseum.jpg" },
        { name: "Vatican City", "image": "/places/vatican.jpg" }
        ],
        plan: [
        "Arrival and hotel check-in",
        "Visit Colosseum",
        "Tour Vatican City",
        "Explore city streets",
        "Departure"
        ],
        tips: [
        "Best time: March - May",
        "Currency: Euro",
        "Language: Italian"
        ]
    },
    {
        id: 5,
        image :"/is1.jpg",
        title: "Bali",
        country: "Indonesia",
        price: "$500",
        duration: "6 Days",
        rating: 4.8,
        text: "Bali is a tropical paradise known for its beaches and nature. It offers a mix of relaxation, adventure, and cultural experiences. Visitors can enjoy temples, forests, and beautiful ساحات طبيعية.",
        images: ["/images/bali1.jpg", "/images/bali2.jpg"],
        foods: ["/isf1.jpg" ,"/isf2.jpg" ,"/isf3.jpg" ,"/isf4.jpg" ,"/isf5.jpg" 
        ],
        hotels: [
        { name: "Bali Beach Resort", "rating": 4.6, "distance": "Beachfront", "price": "$200/night" },
        { name: "Ubud Jungle Hotel", "rating": 4.8, "distance": "Forest area", "price": "$180/night" }
        ],
        places: [
        { name: "Ubud Forest", "image": "/places/ubud.jpg" },
        { name: "Tanah Lot Temple", "image": "/places/tanah.jpg" }
        ],
        plan: [
        "Arrival and hotel check-in",
        "Beach activities",
        "Visit temples",
        "Explore jungle",
        "Shopping",
        "Departure"
        ],
        tips: [
        "Best time: May - September",
        "Currency: Indonesian Rupiah",
        "Language: Indonesian"
        ]
    }
    ];

module.exports = trips