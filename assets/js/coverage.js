const areasData = [
    { name: 'Adabor' },
    { name: 'Dhanmondi' },
    { name: 'Gulshan' },
    { name: 'Gouripur' },
    { name: 'Dhaka' },
    { name: 'Cumilla' },
    { name: 'Chittagonge' },
];

function searchAreas() {
    const searchTerm = document.getElementById('coverageInput').value.toLowerCase();
    const filteredAreas = areasData.filter(area => area.name.toLowerCase().includes(searchTerm));
    
    displayAreas(filteredAreas);
}

function displayAreas(areas) {
    const areaCardsRow = document.getElementById('areaCardsRow');
    areaCardsRow.innerHTML = ''; // Clear previous content
    
    areas.forEach(area => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-3', 'mr-1');
        colDiv.innerHTML = `
            <div class="card shadow">
                <div class="card-header bg-success text-white text-center">
                    <i class="fas fa-location"></i> ${area.name}
                </div>
            </div>
        `;
        areaCardsRow.appendChild(colDiv);
    });
}

// Initial display of all areas on page load
displayAreas(areasData);