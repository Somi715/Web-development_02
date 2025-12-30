const statesData = [
    {
        name: "Andhra Pradesh",
        visited: "High",
        image: "Andhra Pradesh.jpg",
        description: "Land of temples and IT industry",
        mostVisited: [
            { name: "Tirupati Temple", location: "Tirupati", desc: "One of the richest temples in the world, dedicated to Lord Venkateswara" },
            { name: "Charminar", location: "Hyderabad", desc: "Iconic monument and architectural marvel of the old city" }
        ],
        leastVisited: [
            { name: "Araku Valley", location: "Visakhapatnam", desc: "Scenic valley with coffee plantations and tribal culture" },
            { name: "Horsley Hills", location: "Chittoor", desc: "Hill station with panoramic views and adventure activities" }
        ]
    },
    {
        name: "Arunachal Pradesh",
        visited: "Low",
        image: "Arunachal Pradesh.jpg",
        description: "Land of the Dawn, unexplored beauty",
        mostVisited: [
            { name: "Tawang Monastery", location: "Tawang", desc: "Largest monastery in India with stunning Himalayan views" },
            { name: "Bomdila", location: "West Kameng", desc: "Picturesque hill station with Buddhist monasteries" }
        ],
        leastVisited: [
            { name: "Ziro Valley", location: "Lower Subansiri", desc: "UNESCO World Heritage site with ethnic Apatani settlements" },
            { name: "Sela Pass", location: "West Kameng", desc: "High altitude pass with pristine mountain scenery" }
        ]
    },
    {
        name: "Assam",
        visited: "Medium",
        image: "Assam.jpg",
        description: "Gateway to Northeast India",
        mostVisited: [
            { name: "Kaziranga National Park", location: "Nagaon", desc: "UNESCO World Heritage site, home to Indian rhinoceros" },
            { name: "Kamakhya Temple", location: "Guwahati", desc: "Ancient pilgrimage site dedicated to Goddess Kamakhya" }
        ],
        leastVisited: [
            { name: "Majuli Island", location: "Assam", desc: "World's largest river island with Vaishnavite monasteries" },
            { name: "Haflong Hill", location: "Dima Hasao", desc: "Scenic hill station with tea gardens and waterfalls" }
        ]
    },
    {
        name: "Bihar",
        visited: "Medium",
        image: "Bihar.jpg",
        description: "Cradle of Buddhism and Indian civilization",
        mostVisited: [
            { name: "Bodh Gaya", location: "Gaya", desc: "Most sacred Buddhist pilgrimage site where Buddha attained enlightenment" },
            { name: "Nalanda University Ruins", location: "Nalanda", desc: "Ancient center of learning, UNESCO World Heritage site" }
        ],
        leastVisited: [
            { name: "Rajgir", location: "Nalanda", desc: "Buddhist pilgrimage site with scenic mountains" },
            { name: "Vaishali", location: "Vaishali", desc: "Ancient capital with historic Buddhist monuments" }
        ]
    },
    {
        name: "Chhattisgarh",
        visited: "Low",
        image: "Chattisgarh.jpeg",
        description: "Rice bowl of India, mineral-rich state",
        mostVisited: [
            { name: "Jagdalpur", location: "Bastar", desc: "Gateway to tribal culture and Chitrakoot Falls" },
            { name: "Chitrakoot Falls", location: "Bastar", desc: "Stunning waterfall surrounded by scenic beauty" }
        ],
        leastVisited: [
            { name: "Kailash Gufa", location: "Bastar", desc: "Natural limestone cave with spiritual significance" },
            { name: "Tirathgarh Waterfall", location: "Bastar", desc: "Pristine waterfall in dense forest area" }
        ]
    },
    {
        name: "Goa",
        visited: "High",
        image: "Goa.webp",
        description: "Land of beaches and Portuguese heritage",
        mostVisited: [
            { name: "Baga Beach", location: "North Goa", desc: "Popular beach with water sports and nightlife" },
            { name: "Basilica of Bom Jesus", location: "Old Goa", desc: "UNESCO World Heritage site with St. Francis Xavier's relics" }
        ],
        leastVisited: [
            { name: "Dudhsagar Falls", location: "Sattari", desc: "Spectacular four-tiered waterfall on Mandovi River" },
            { name: "Cotigao Wildlife Sanctuary", location: "South Goa", desc: "Pristine nature reserve with wildlife and trekking" }
        ]
    },
    {
        name: "Gujarat",
        visited: "High",
        image: "Gujarat.jpg",
        description: "Land of Mahatma Gandhi and vibrant culture",
        mostVisited: [
            { name: "Statue of Unity", location: "Kevadia", desc: "World's tallest statue honoring Sardar Vallabhbhai Patel" },
            { name: "Sabarmati Ashram", location: "Ahmedabad", desc: "Historic ashram of Mahatma Gandhi" }
        ],
        leastVisited: [
            { name: "Rann of Kutch", location: "Kutch", desc: "World's largest salt marsh with unique white landscape" },
            { name: "Gir Forest National Park", location: "Junagadh", desc: "Home to Asiatic lions and rich wildlife" }
        ]
    },
    {
        name: "Haryana",
        visited: "Medium",
        image: "Haryana.webp",
        description: "Progressive state near National Capital",
        mostVisited: [
            { name: "Surajkund", location: "Faridabad", desc: "Ancient stepped well with lake and cultural fair venue" },
            { name: "Kurukshetra", location: "Kurukshetra", desc: "Sacred land of Mahabharata battle, pilgrim site" }
        ],
        leastVisited: [
            { name: "Morni Hills", location: "Panchkula", desc: "Scenic hill station with adventure activities" },
            { name: "Badkhal Lake", location: "Faridabad", desc: "Beautiful lake surrounded by picnic spots" }
        ]
    },
    {
        name: "Himachal Pradesh",
        visited: "High",
        image: "Himachal Pradesh.jpg",
        description: "Land of gods, adventure and natural beauty",
        mostVisited: [
            { name: "Shimla", location: "Shimla", desc: "Queen of the Hills with colonial architecture and mall road" },
            { name: "Manali", location: "Kullu", desc: "Adventure hub with trekking, paragliding and scenic valleys" }
        ],
        leastVisited: [
            { name: "Tirthan Valley", location: "Kullu", desc: "Hidden gem with pristine rivers and trout fishing" },
            { name: "Kinnaur", location: "Kinnaur", desc: "Apple orchards and scenic mountain landscape" }
        ]
    },
    {
        name: "Jharkhand",
        visited: "Low",
        image: "Jharkand.jpg",
        description: "Land of waterfalls and tribal heritage",
        mostVisited: [
            { name: "Jamshedpur", location: "Jamshedpur", desc: "Industrial city with lakes and gardens" },
            { name: "Ranchi", location: "Ranchi", desc: "City of waterfalls and adventure sports destination" }
        ],
        leastVisited: [
            { name: "Parasnath Hill", location: "Giridih", desc: "Sacred Jain pilgrimage site with 24 temples" },
            { name: "Subarnarekha Waterfall", location: "East Singhbhum", desc: "Scenic waterfall in forest setting" }
        ]
    },
    {
        name: "Karnataka",
        visited: "High",
        image: "Karnataka.jpg",
        description: "IT capital and coffee country",
        mostVisited: [
            { name: "Bangalore", location: "Bangalore", desc: "Silicon Valley of India with tech parks and gardens" },
            { name: "Mysore Palace", location: "Mysore", desc: "Stunning royal palace with Indo-Saracenic architecture" }
        ],
        leastVisited: [
            { name: "Coorg", location: "Kodagu", desc: "Coffee plantations, misty mountains and adventure trails" },
            { name: "Jog Falls", location: "Shimoga", desc: "Highest waterfall in India with scenic beauty" }
        ]
    },
    {
        name: "Kerala",
        visited: "High",
        image: "Kerala.jpg",
        description: "God's own country, tropical paradise",
        mostVisited: [
            { name: "Backwaters", location: "Alappuzha", desc: "Serene lagoons and houseboat cruises" },
            { name: "Fort Kochi", location: "Kochi", desc: "Historic port with Chinese fishing nets and spice markets" }
        ],
        leastVisited: [
            { name: "Munnar", location: "Idukki", desc: "Tea gardens, misty hills and trekking trails" },
            { name: "Thekkady", location: "Idukki", desc: "Spice plantations and wildlife sanctuary" }
        ]
    },
    {
        name: "Madhya Pradesh",
        visited: "Medium",
        image: "Madhya Pradesh.png",
        description: "Heart of India, diamond and copper treasure",
        mostVisited: [
            { name: "Khajuraho Temples", location: "Khajuraho", desc: "UNESCO World Heritage site with intricate stone carvings" },
            { name: "Sanchi Stupa", location: "Sanchi", desc: "Ancient Buddhist monument with historical significance" }
        ],
        leastVisited: [
            { name: "Mandu", location: "Dhar", desc: "Hilltop fortress city with Indo-Islamic architecture" },
            { name: "Kanha National Park", location: "Mandla", desc: "Tiger reserve with scenic wilderness" }
        ]
    },
    {
        name: "Maharashtra",
        visited: "High",
        image: "Maharashtra.png",
        description: "Bollywood hub and financial center",
        mostVisited: [
            { name: "Gateway of India", location: "Mumbai", desc: "Iconic monument overlooking the Arabian Sea" },
            { name: "Ajanta Caves", location: "Aurangabad", desc: "UNESCO World Heritage Buddhist cave monuments" }
        ],
        leastVisited: [
            { name: "Lonavala", location: "Pune", desc: "Hill station with scenic valleys and adventure sports" },
            { name: "Malshej Ghat", location: "Ahmednagar", desc: "Picturesque mountain pass with flamingos" }
        ]
    },
    {
        name: "Manipur",
        visited: "Low",
        image: "Manipur.png",
        description: "Jewel of India, land of classical dance",
        mostVisited: [
            { name: "Loktak Lake", location: "Bishnupur", desc: "Floating lake with unique ecosystem and floating islands" },
            { name: "Kangla Fort", location: "Imphal", desc: "Ancient royal fort with historical significance" }
        ],
        leastVisited: [
            { name: "Moreh", location: "Tengnoupal", desc: "Border town with scenic beauty and tribal markets" },
            { name: "Shilao Peak", location: "Imphal", desc: "Scenic viewpoint with panoramic views" }
        ]
    },
    {
        name: "Meghalaya",
        visited: "Medium",
        image: "Meghalaya.png",
        description: "Abode of clouds, wettest place on Earth",
        mostVisited: [
            { name: "Living Root Bridges", location: "Khasi Hills", desc: "Unique bio-engineered bridges made from tree roots" },
            { name: "Shillong Peak", location: "Shillong", desc: "Highest point with panoramic views of the city" }
        ],
        leastVisited: [
            { name: "Nohkalikai Falls", location: "Cherrapunjee", desc: "Tallest waterfall in India with misty surroundings" },
            { name: "Mawlynnong Village", location: "East Khasi Hills", desc: "Cleanest village in Asia with scenic meadows" }
        ]
    },
    {
        name: "Mizoram",
        visited: "Low",
        image: "Mizoram.jpg",
        description: "Land of blue hills, tribal cultural hub",
        mostVisited: [
            { name: "Aizawl", location: "Aizawl", desc: "Capital city on hillside with tribal markets and churches" },
            { name: "Phawngpui Blue Mountain", location: "Lawngtlai", desc: "Highest peak with scenic mountain views" }
        ],
        leastVisited: [
            { name: "Reiek", location: "Aizawl", desc: "Scenic hill station with panoramic views and gardens" },
            { name: "Palak Lake", location: "Champhai", desc: "Beautiful lake surrounded by blue hills" }
        ]
    },
    {
        name: "Nagaland",
        visited: "Low",
        image: "Nagaland.jpg",
        description: "Land of festivals and warrior tribes",
        mostVisited: [
            { name: "Kohima", location: "Kohima", desc: "Capital city with Hornbill Festival and tribal heritage" },
            { name: "Hornbill Festival", location: "Kohima", desc: "Annual cultural extravaganza of Naga tribes" }
        ],
        leastVisited: [
            { name: "Dzukou Valley", location: "Peren", desc: "Alpine meadow with indigenous flowers and trekking" },
            { name: "Patkai Range", location: "Mon", desc: "Mountain range with tribal settlements and wildlife" }
        ]
    },
    {
        name: "Odisha",
        visited: "Medium",
        image: "Odisha.jpg",
        description: "Land of Jagannath, beaches and Buddhist heritage",
        mostVisited: [
            { name: "Jagannath Temple", location: "Puri", desc: "Ancient Hindu temple and pilgrimage site" },
            { name: "Konark Sun Temple", location: "Konark", desc: "UNESCO World Heritage site with architectural marvel" }
        ],
        leastVisited: [
            { name: "Simlipal National Park", location: "Mayurbhanj", desc: "Tiger reserve with waterfalls and trekking" },
            { name: "Chandipur Beach", location: "Balasore", desc: "Unique receding beach with beautiful shoreline" }
        ]
    },
    {
        name: "Punjab",
        visited: "High",
        image: "Punjab.png",
        description: "Land of five rivers, granary of India",
        mostVisited: [
            { name: "Golden Temple", location: "Amritsar", desc: "Holiest Sikh shrine with serene beauty" },
            { name: "Jallianwala Bagh", location: "Amritsar", desc: "Historic site with national significance" }
        ],
        leastVisited: [
            { name: "Phulkari Festival", location: "Amritsar", desc: "Cultural celebration of embroidery and textile heritage" },
            { name: "Harike Wetland", location: "Ferozpur", desc: "Important bird sanctuary for migratory birds" }
        ]
    },
    {
        name: "Rajasthan",
        visited: "High",
        image: "Rajasthan.png",
        description: "Land of kings, forts and desert romance",
        mostVisited: [
            { name: "Taj Mahal", location: "Agra", desc: "World's most beautiful monument, symbol of love" },
            { name: "City Palace", location: "Jaipur", desc: "Magnificent palace blend of Rajasthani and Mughal architecture" }
        ],
        leastVisited: [
            { name: "Jaisalmer Fort", location: "Jaisalmer", desc: "Golden fort in the Thar Desert with stunning views" },
            { name: "Pushkar Camel Fair", location: "Pushkar", desc: "Annual fair with colorful Rajasthani culture" }
        ]
    },
    {
        name: "Sikkim",
        visited: "Medium",
        image: "Sikkim.png",
        description: "Greenest state, biodiversity hotspot",
        mostVisited: [
            { name: "Kanyak", location: "North Sikkim", desc: "Beautiful lake at high altitude with scenic views" },
            { name: "Gangtok", location: "East Sikkim", desc: "Capital city with monasteries and flower gardens" }
        ],
        leastVisited: [
            { name: "Yumthang Valley", location: "North Sikkim", desc: "Alpine meadow with rhododendrons and hot springs" },
            { name: "Nathu La Pass", location: "East Sikkim", desc: "Mountain pass with panoramic Himalayan views" }
        ]
    },
    {
        name: "Tamil Nadu",
        visited: "High",
        image: "Tamil Nadu.jpg",
        description: "Land of temples and Dravidian culture",
        mostVisited: [
            { name: "Meenakshi Temple", location: "Madurai", desc: "Ancient temple with stunning Dravidian architecture" },
            { name: "Marina Beach", location: "Chennai", desc: "Longest natural beach with scenic views" }
        ],
        leastVisited: [
            { name: "Ooty", location: "Nilgiri", desc: "Hill station with tea gardens and scenic railways" },
            { name: "Kodaikanal", location: "Dindigul", desc: "Princess of hill stations with lakes and trekking" }
        ]
    },
    {
        name: "Telangana",
        visited: "High",
        image: "Telangana.png",
        description: "Land of pearls and tech innovation",
        mostVisited: [
            { name: "Charminar", location: "Hyderabad", desc: "Iconic monument of historic Hyderabad" },
            { name: "Golconda Fort", location: "Hyderabad", desc: "Ancient fort with historical and architectural significance" }
        ],
        leastVisited: [
            { name: "Osman Sagar Lake", location: "Hyderabad", desc: "Beautiful lake for boating and picnicking" },
            { name: "Yadagirigutta Temple", location: "Yadadri", desc: "Ancient hilltop temple with scenic surroundings" }
        ]
    },
    {
        name: "Tripura",
        visited: "Low",
        image: "Tripura.jpg",
        description: "Land of palaces and tribal culture",
        mostVisited: [
            { name: "Ujjayanta Palace", location: "Agartala", desc: "Royal palace turned museum with architectural beauty" },
            { name: "Agartala", location: "Agartala", desc: "Capital city with cultural heritage and temples" }
        ],
        leastVisited: [
            { name: "Neermahal Palace", location: "Melagarh", desc: "Water palace set in the middle of a lake" },
            { name: "Jampui Hills", location: "Jampui", desc: "Hill station with scenic views and orange orchards" }
        ]
    },
    {
        name: "Uttar Pradesh",
        visited: "High",
        image: "Uttar Pradesh.png",
        description: "Home of Taj Mahal and Hindu temples",
        mostVisited: [
            { name: "Taj Mahal", location: "Agra", desc: "World's most beautiful monument, UNESCO World Heritage" },
            { name: "Varanasi Ghats", location: "Varanasi", desc: "Ancient pilgrimage city with spiritual ghats" }
        ],
        leastVisited: [
            { name: "Fatehpur Sikri", location: "Agra", desc: "Ancient imperial city with stunning architecture" },
            { name: "Lucknow Imambara", location: "Lucknow", desc: "Historic monument with intricate architecture" }
        ]
    },
    {
        name: "Uttarkhand",
        visited: "Medium",
        image: "Uttarkhand.png",
        description: "Land of gods, adventure and spirituality",
        mostVisited: [
            { name: "Rishikesh", location: "Dehradun", desc: "Yoga capital and sacred pilgrimage site on Ganges" },
            { name: "Haridwar", location: "Haridwar", desc: "Holy city with Kumbh Mela and spiritual significance" }
        ],
        leastVisited: [
            { name: "Auli", location: "Chamoli", desc: "Skiing destination with snowy Himalayan slopes" },
            { name: "Tungnath", location: "Rudraprayag", desc: "Highest Shiva temple with trekking trails" }
        ]
    },
    {
        name: "West Bengal",
        visited: "Medium",
        image: "West Bengal.png",
        description: "Cultural gem, Darjeeling tea country",
        mostVisited: [
            { name: "Darjeeling", location: "Darjeeling", desc: "Hill station famous for tea gardens and toy train" },
            { name: "Sundarbans", location: "South 24 Parganas", desc: "UNESCO site, world's largest mangrove and tiger habitat" }
        ],
        leastVisited: [
            { name: "Kalimpong", location: "Kalimpong", desc: "Scenic hill town with flowers and monastery views" },
            { name: "Kurseong", location: "Darjeeling", desc: "Picturesque town with tea gardens and waterfalls" }
        ]
    }
];

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
    createStatePages();
});

// RENDER HOME PAGE
function renderHomePage() {
    const mostVisited = statesData.filter(s => s.visited === 'High');
    const mediumVisited = statesData.filter(s => s.visited === 'Medium');
    const leastVisited = statesData.filter(s => s.visited === 'Low');

    document.getElementById('mostVisitedGrid').innerHTML = mostVisited
        .map(state => createStateCard(state))
        .join('');
    document.getElementById('mediumVisitedGrid').innerHTML = mediumVisited
        .map(state => createStateCard(state))
        .join('');
    document.getElementById('leastVisitedGrid').innerHTML = leastVisited
        .map(state => createStateCard(state))
        .join('');
}

// CREATE STATE CARD
function createStateCard(state) {
    return `
        <div class="state-card" onclick="openStatePage('${state.name}')">
            <img src="${state.image}" alt="${state.name}" class="state-image" onerror="this.style.background='linear-gradient(135deg, #004E89, #FF6B35)'">
            <div class="state-info">
                <div class="state-name">${state.name}</div>
                <div class="state-desc">${state.description}</div>
                <span class="visit-badge">${state.visited} Visits</span>
            </div>
        </div>
    `;
}

// CREATE STATE DETAIL PAGES
function createStatePages() {
    const container = document.getElementById('stateDetailsContainer');
    statesData.forEach(state => {
        const pageHtml = `
            <div id="page-${state.name}" class="page">
                <div class="detail-header">
                    <h2 class="detail-state-name">${state.name}</h2>
                    <p>${state.description}</p>
                </div>
                <img src="${state.image}" alt="${state.name}" class="detail-image" onerror="this.style.background='linear-gradient(135deg, #004E89, #FF6B35)'">
                
                <h3 class="section-title">⭐ Most Popular Places to Visit</h3>
                <div class="places-container">
                    ${state.mostVisited.map(place => createPlaceCard(place, 'Most Visited')).join('')}
                </div>

                <h3 class="section-title">💎 Hidden Gems - Must Visit</h3>
                <div class="places-container">
                    ${state.leastVisited.map(place => createPlaceCard(place, 'Hidden Gem')).join('')}
                </div>
            </div>
        `;
        container.innerHTML += pageHtml;
    });
}

// CREATE PLACE CARD
function createPlaceCard(place, category) {
    return `
        <div class="place-card">
            <div class="place-name">${place.name}</div>
            <div class="place-location">📍 ${place.location}</div>
            <div class="place-desc">${place.desc}</div>
            <span class="category-label">${category}</span>
        </div>
    `;
}

// VIEW STATE DETAIL
function showStateDetail(stateName) {
    const state = statesData.find(s => s.name === stateName);
    if (!state) return;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('homePage').classList.remove('active');
    
    const container = document.getElementById('stateDetailsContainer');
    container.innerHTML = `
        <div id="state-${state.name}" class="page active">
            <div class="detail-header">
                <h1 class="detail-state-name">${state.name}</h1>
                <p>${state.description}</p>
            </div>
            <img src="${state.image}" alt="${state.name}" class="detail-image">
            
            <h2 class="section-title">⭐ Top Attractions</h2>
            <div class="places-container">
                ${state.mostVisited.map(place => `
                    <div class="place-card">
                        <h3 class="place-name">${place.name}</h3>
                        <div class="place-location">📍 ${place.location}</div>
                        <p class="place-desc">${place.desc}</p>
                    </div>
                `).join('')}
            </div>
            
            <h2 class="section-title">💎 Hidden Gems</h2>
            <div class="places-container">
                ${state.leastVisited.map(place => `
                    <div class="place-card">
                        <h3 class="place-name">${place.name}</h3>
                        <div class="place-location">📍 ${place.location}</div>
                        <p class="place-desc">${place.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.querySelector('.back-arrow').style.display = 'block';
    window.scrollTo(0, 0);
}



// GO BACK HOME
function goHome() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('homePage').classList.add('active');
    document.querySelector('.back-arrow').style.display = 'none';
    window.scrollTo(0, 0);
}
let searchTimeout;

// Debounced search - only searches after user stops typing
function debounceSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(searchStates, 300); // Wait 300ms after typing stops
}

// SEARCH FUNCTIONALITY
function searchStates() {
    const input = document.getElementById('searchInput');
    const term = input.value.toLowerCase().trim();
    
    if (!term) {
        goHome();
        return;
    }

    const results = statesData.filter(state => state.name.toLowerCase().includes(term));
    
    if (results.length === 0) {
        document.getElementById('homePage').classList.remove('active');
        document.getElementById('stateDetailsContainer').innerHTML = `
            <div class="page active no-results">
                <h2>No states found for "${term}"</h2>
                <button class="search-btn" onclick="goHome()">← Back Home</button>
            </div>
        `;
        return;
    }

    // Clear container and show results
    document.getElementById('homePage').classList.remove('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    const container = document.getElementById('stateDetailsContainer');
    container.innerHTML = `
        <div id="searchPage" class="page active">
            <h2 class="section-title">Results for "${term}" (${results.length})</h2>
            <div class="states-grid" id="searchGrid">${results.map(state => `
                <div class="state-card" onclick="showStateDetail('${state.name}')">
                    <img src="${state.image}" alt="${state.name}" class="state-image">
                    <div class="state-info">
                        <div class="state-name">${state.name}</div>
                        <div class="state-desc">${state.description}</div>
                        <span class="visit-badge">${state.visited}</span>
                    </div>
                </div>
            `).join('')}</div>
        </div>
    `;
}


document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchStates();
        }
    });

});



