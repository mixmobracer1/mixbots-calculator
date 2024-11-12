document.getElementById("get-stats-button").addEventListener("click", async function() {
    const mintAddress = document.getElementById("mint-address").value;
    
    // Check if the mint address is not empty
    if (!mintAddress) {
        alert("Please enter a valid Mint Address");
        return;
    }
    
    // The URL to fetch the MixBot data from Magic Eden API
    const url = `https://api-mainnet.magiceden.dev/v2/tokens/${mintAddress}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data && data.attributes) {
            const attributes = data.attributes;

            // Set default stats
            let acceleration = 10;
            let maxSpeed = 10;
            let durability = 10;
            let willpower = 10;

            // Loop through the attributes and update stats based on the traits
            attributes.forEach(attribute => {
                const { trait_type, value } = attribute;

                // Check and assign values based on the trait type
                if (trait_type === "top_body_type" || trait_type === "bottom_body_type") {
                    if (value === "LZRD") maxSpeed += 1;
                    else if (value === "FINK") acceleration += 1;
                    else if (value === "KNG") durability += 1;
                }
                
                // Check other attributes and update accordingly
                if (trait_type === "total_races") acceleration += parseInt(value);
                if (trait_type === "kos") durability += parseInt(value);
            });

            // Display the results on the page
            document.getElementById("acceleration").textContent = `Acceleration: ${acceleration}`;
            document.getElementById("maxspeed").textContent = `Max Speed: ${maxSpeed}`;
            document.getElementById("durability").textContent = `Durability: ${durability}`;
            document.getElementById("willpower").textContent = `Willpower: ${willpower}`;
        } else {
            alert("Failed to fetch MixBot data. Please check the mint address and try again.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch MixBot data. Please check the mint address and try again.");
    }
});
