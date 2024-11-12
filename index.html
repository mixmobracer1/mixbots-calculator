// Function to fetch MixBot data from Magic Eden API using CORS Anywhere to bypass CORS issues
function fetchMixBotStats(mintAddress) {
    // Make sure you prepend the CORS proxy URL
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = `https://api-mainnet.magiceden.dev/v2/tokens/${mintAddress}`;

    // Fetch data from Magic Eden API via the proxy
    fetch(proxyUrl + apiUrl, {
        headers: {
            'Accept': 'application/json',
            'Origin': 'https://yourdomain.com', // Replace with your actual domain if needed
        }
    })
    .then(response => response.json())
    .then(data => {
        // Check if the data contains attributes
        if (data && data.attributes) {
            calculateMixBotStats(data.attributes); // Calculate and display stats
        } else {
            alert('Failed to fetch valid MixBot data. Please check the mint address and try again.');
        }
    })
    .catch(error => {
        console.error('Error fetching MixBot data:', error);
        alert('Failed to fetch MixBot data. Please check the mint address and try again.');
    });
}

// Function to calculate and display stats from fetched data
function calculateMixBotStats(attributes) {
    // Initialize base stats
    let acceleration = 10;
    let maxSpeed = 10;
    let durability = 10;
    let willpower = 10;

    // Loop through each attribute to update stats
    attributes.forEach(attribute => {
        const traitType = attribute.trait_type;
        const value = attribute.value;

        // Add stats based on the part attributes
        if (traitType === 'top_body_type') {
            if (value === 'SLUG') {
                maxSpeed += 1; acceleration -= 1;
            } else if (value === 'LZRD') {
                maxSpeed += 1; willpower -= 1;
            } else if (value === 'FINK') {
                acceleration += 1; maxSpeed -= 1;
            }
            // Continue for all relevant attributes...
        } else if (traitType === 'bottom_body_type') {
            if (value === 'MNSTR') {
                willpower += 1; durability -= 1;
            } else if (value === 'KNG') {
                durability += 1; acceleration -= 1;
            }
            // Continue for all relevant attributes...
        } 
        // Add similar conditions for other parts like 'shoulders_type', 'legs_type', etc.
    });

    // Display results in the UI (assuming these are the IDs in your HTML)
    document.getElementById('acceleration').textContent = `Acceleration: ${acceleration}`;
    document.getElementById('maxspeed').textContent = `Max Speed: ${maxSpeed}`;
    document.getElementById('durability').textContent = `Durability: ${durability}`;
    document.getElementById('willpower').textContent = `Willpower: ${willpower}`;
}

// Function to trigger fetching data when the user enters the mint address
function onSubmitMintAddress() {
    const mintAddress = document.getElementById('mint-address').value;
    if (mintAddress) {
        fetchMixBotStats(mintAddress);
    } else {
        alert('Please enter a valid MixBot mint address.');
    }
}

// Event listener to call the onSubmitMintAddress function when the user clicks the "Get Stats" button
document.getElementById('get-stats-button').addEventListener('click', onSubmitMintAddress);
