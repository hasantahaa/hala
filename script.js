// Initialize the map

const map = L.map('map').setView([33.875, 35.875], 9); // Adjust the zoom level (10 in this example)


// Create a tile layer using OpenStreetMap data
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Define regions with coordinates, names, and descriptions
const regions = [
    {
        coords: [33.361582, 35.306845],
        name: "Al-Janub, Lebanon",
        description: "This is Al-Janub.",
        villages: [
            "Village A",
            "Village B",
            "Village C",
        ],
            governmentURL: "villages-south-lebanon.html" // Add a URL for the government info

    },

    {
        coords: [33.66667, 35.83333],
        name: "Mohafazat Béqaa, Lebanon",
        description: "This is Mohafazat Béqaa.",
        villages: [
            "Village X",
            "Village Y",
            "Village Z",
        ],
            governmentURL: "villages-bekaa.html" // Add a URL for the government info

    },
    {
        coords: [33.88333, 35.5],
        name: "Mohafazat Beyrouth, Lebanon",
        description: "This is Mohafazat Beyrouth.",
        villages: [
            "Village X",
            "Village Y",
            "Village Z",
        ],
            governmentURL: "villages-beirut.html" // Add a URL for the government info

    },
    {
        coords: [33.760693, 35.590663],
        name: "Mohafazat Mont-Liban, Lebanon",
        description: "This is Mohafazat Mont-Liban.",
        villages: [
            "Village X",
            "Village Y",
            "Village Z",
        ],
           governmentURL: "villages-mount-lebanon.html" // Add a URL for the government info

    },
    {
        coords: [34.079557, 35.814777],
        name: "Mohafazat kesrwan-jbeil, Lebanon",
        description: "This is Mohafazat Kesrwan-Jbeil.",
        villages: [
            "Village X",
            "Village Y",
            "Village Z",
        ],
           governmentURL: "villages-keserwan-jbeil.html" // Add a URL for the government info

    },
    
    {
        coords: [34.33333, 35.91667],
        name: "MUḨĀFAZ̧AT LUBNĀN ASH SHAMĀLĪ",
        description: "This is MUḨĀFAZ̧AT LUBNĀN ASH SHAMḨĀLĪ.",
        villages: [
            "Village X",
            "Village Y",
            "Village Z",
        ],
            governmentURL: "villages-north-lebanon.html" // Add a URL for the government info

    },

    {
    coords: [34.53333, 36.16667], // Added a comma here
    name: "Akkar-gov",
    description: "This is Akkar",
    villages: [
        "Village X",
        "Village Y",
        "Village Z",
    ],
        governmentURL: "villages-akkar.html" // Add a URL for the government info

},

{
    coords: [34.20833, 36.3], // Added a comma here
    name: "Baalbak-Hermel-gov",
    description: "This is Baalbak-Hermel",
    villages: [
        "Village X",
        "Village Y",
        "Village Z",
    ],
         governmentURL: "villages-baalbak-hermel.html" // Add a URL for the government info

},

{
    coords: [33.25, 35.5],  // Added a comma here
    name: "Nabtieh-gov",
    description: "This is Nabatieh",
    villages: [
        "Village X",
        "Village Y",
        "Village Z",
    ],
         governmentURL: "villages-nabatieh.html" // Add a URL for the government info

},

];

regions.forEach(region => {
    const marker = L.marker(region.coords).addTo(map);

    marker.bindPopup(`<b>${region.name}</b><br>${region.description}`);

    marker.on('click', function () {
        if (region.governmentURL) {
            window.open(region.governmentURL, '_blank');
        } else {
            displayVillages(region);
        }
    });
});

function displayVillages(region) {
    const villagesList = document.getElementById('villages-list');
    villagesList.innerHTML = `<h2>Villages in ${region.name}</h2>`;
    region.villages.forEach(village => {
        villagesList.innerHTML += `<li data-village="${village}">${village}</li>`;
    });
    villagesList.style.display = 'block';

    setupVillageListClickHandlers();
}

function setupVillageListClickHandlers() {
    const villageItems = document.querySelectorAll('#villages-list li');
    villageItems.forEach(item => {
        item.addEventListener('click', function () {
            const villageName = item.getAttribute('data-village');
            displayVillageData(villageName);
        });
    });
}

function displayVillageData(villageName) {
    const villageData = document.getElementById('village-data');
    villageData.innerHTML = `<h3>Data for ${villageName}</h3>`;
    villageData.style.display = 'block';
}

// footer back to main functions

document.getElementById('backtomain').addEventListener('click', function () {
    window.open("index.html", '_self');
});
//header back to main
function goToMainPage() {
    window.location.href = "index.html";
}

