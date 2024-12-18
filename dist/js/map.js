// States data
const statesData = {
    "Maharashtra": {
        "culture": "Known for its Marathi culture, Warli art, and Lavani dance. Home to Bollywood.",
        "history": "Ancient history includes Satavahana dynasty, Maratha Empire under Shivaji Maharaj.",
        "coordinates": [19.7515, 75.7139]
    },
    "Tamil Nadu": {
        "culture": "Rich in Dravidian culture, Bharatanatyam dance, Carnatic music, and Tamil literature.",
        "history": "Legacy of ancient Chola, Pandya, and Pallava dynasties. Rich temple architecture.",
        "coordinates": [11.1271, 78.6569]
    },
    "Kerala": {
        "culture": "Known for Kathakali dance, Ayurveda, boat races, and Malayalam literature.",
        "history": "Ancient spice trade center, home to oldest European church in India.",
        "coordinates": [10.8505, 76.2711]
    },
    "Gujarat": {
        "culture": "Famous for Garba dance, handicrafts, and vegetarian cuisine.",
        "history": "Birthplace of Mahatma Gandhi, ancient Indus Valley civilization sites.",
        "coordinates": [22.2587, 71.1924]
    },
    "Rajasthan": {
        "culture": "Known for colorful festivals, folk music, and traditional art.",
        "history": "Land of Rajput warriors, magnificent forts, and palaces.",
        "coordinates": [27.0238, 74.2179]
    }
};

function showStateInfo(stateName) {
    const stateInfo = document.getElementById('state-info');
    const stateNameEl = document.getElementById('state-name');
    const stateCulture = document.getElementById('state-culture');
    const stateHistory = document.getElementById('state-history');
    
    stateNameEl.textContent = stateName;
    stateCulture.textContent = statesData[stateName].culture;
    stateHistory.textContent = statesData[stateName].history;
    stateInfo.style.display = 'block';
}

function createStateButtons() {
    const buttonContainer = document.getElementById('state-buttons');
    Object.keys(statesData).forEach(state => {
        const button = document.createElement('button');
        button.className = 'state-button';
        button.textContent = state;
        button.onclick = () => showStateInfo(state);
        buttonContainer.appendChild(button);
    });
}

// Initialize the map when the page loads
document.addEventListener('DOMContentLoaded', createStateButtons);