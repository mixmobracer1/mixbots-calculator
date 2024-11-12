document.getElementById("get-stats-button").addEventListener("click", async function() {
    const mintAddress = document.getElementById("mint-address").value;

    // Check if the mint address is not empty
    if (!mintAddress) {
        alert("Please enter a valid Mint Address");
        return;
    }

    // The URL to fetch the MixBot data from the Vercel backend
    const url = `https://mixbot-fetch-server-nm60ep7kg-mixmobracer1s-projects.vercel.app/fetchMixBotData?mintAddress=${mintAddress}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // Debug log to check if we're getting the data

        if (data && data.acceleration !== undefined) {
            // Display the results on the page
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
