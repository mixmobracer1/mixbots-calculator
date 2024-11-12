document.getElementById("get-stats-button").addEventListener("click", async function() {
    const mintAddress = document.getElementById("mint-address").value;

    // Check if the mint address is not empty
    if (!mintAddress) {
        alert("Please enter a valid Mint Address");
        return;
    }

    // The URL to call the server
    const url = `http://localhost:3000/fetchMixBotData?mintAddress=${mintAddress}`;

    try {
        // Fetch MixBot stats from the backend server
        const response = await fetch(url);
        const data = await response.json();

        // Check if the response contains valid stats
        if (data.acceleration !== undefined && data.maxSpeed !== undefined && data.durability !== undefined && data.willpower !== undefined) {
            // Display the stats on the frontend
            document.getElementById("acceleration").textContent = `Acceleration: ${data.acceleration}`;
            document.getElementById("maxspeed").textContent = `Max Speed: ${data.maxSpeed}`;
            document.getElementById("durability").textContent = `Durability: ${data.durability}`;
            document.getElementById("willpower").textContent = `Willpower: ${data.willpower}`;
        } else {
            alert("Failed to fetch MixBot data. Please check the mint address and try again.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch MixBot data. Please check the mint address and try again.");
    }
});
