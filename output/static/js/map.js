// Fetch states data and initialize the map
async function initializeMap() {
    try {
        const response = await fetch('../data/states_data.json');
        const statesData = await response.json();
        createStateButtons(statesData);
    } catch (error) {
        console.error('Error loading states data:', error);
    }
}

function showStateInfo(stateName, statesData) {
    const stateInfo = document.getElementById('state-info');
    const stateNameEl = document.getElementById('state-name');
    const stateCulture = document.getElementById('state-culture');
    const stateHistory = document.getElementById('state-history');
    
    stateNameEl.textContent = stateName;
    stateCulture.textContent = statesData[stateName].culture;
    stateHistory.textContent = statesData[stateName].history;
    stateInfo.style.display = 'block';
}

function createStateButtons(statesData) {
    const buttonContainer = document.getElementById('state-buttons');
    Object.keys(statesData).forEach(state => {
        const button = document.createElement('button');
        button.className = 'state-button';
        button.textContent = state;
        button.onclick = () => showStateInfo(state, statesData);
        buttonContainer.appendChild(button);
    });
}

// Initialize the map when the page loads
document.addEventListener('DOMContentLoaded', initializeMap);