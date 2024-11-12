// Example frontend code to display stats
document.getElementById("get-stats-button").addEventListener("click", async function() {
    const mintAddress = document.getElementById("mint-address").value;

    // Check if mint address is not empty
    if (!mintAddress) {
        alert("Please enter a valid Mint Address");
        return;
    }

    // Call backend to fetch stats
    const url = `http://localhost:3000/fetchMixBotData?mintAddress=${mintAddress}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data) {
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
