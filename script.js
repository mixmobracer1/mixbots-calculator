document.getElementById("get-stats-button").addEventListener("click", async function() {
    const mintAddress = document.getElementById("mint-address").value;

    // Check if the mint address is not empty
    if (!mintAddress) {
        alert("Please enter a valid Mint Address");
        return;
    }

    // URL for Magic Eden's API with the mint address
    const url = `https://cors-anywhere.herokuapp.com/https://api-mainnet.magiceden.dev/v2/tokens/${mintAddress}`;

    try {
        // Attempt to fetch data from the API
        const response = await fetch(url, {
            headers: {
                "Accept": "application/json",
                "Origin": "https://yourdomain.com",  // Change this to your domain or leave it if using CORS proxy
            }
        });
        const data = await response.json();

        console.log(data); // Debug log to check if we're getting the data

        if (data && data.attributes) {
            const attributes = data.attributes;

            // Set default stats (base stats for all MixBots)
            let acceleration = 10;
            let maxSpeed = 10;
            let durability = 10;
            let willpower = 10;

            // Loop through the attributes and update stats based on the traits
            attributes.forEach(attribute => {
                const { trait_type, value } = attribute;

                // Check if it's a valid part type that affects the MixBot stats
                if (["top_body_type", "bottom_body_type", "shoulders_type", "legs_type"].includes(trait_type)) {

                    // Adjust stats based on trait types
                    if (value === "SLUG") {
                        maxSpeed += 1; // +1 Max Speed
                        acceleration -= 1; // -1 Acceleration
                    } else if (value === "HUNTR") {
                        acceleration += 1; // +1 Acceleration
                        durability -= 1; // -1 Durability
                    } else if (value === "GRNT") {
                        durability += 1; // +1 Durability
                        willpower -= 1; // -1 Willpower
                    } else if (value === "WZRD") {
                        willpower += 1; // +1 Willpower
                        maxSpeed -= 1; // -1 Max Speed
                    } else if (value === "LZRD") {
                        maxSpeed += 1; // +1 Max Speed
                        willpower -= 1; // -1 Willpower
                    } else if (value === "FINK") {
                        acceleration += 1; // +1 Acceleration
                        maxSpeed -= 1; // -1 Max Speed
                    } else if (value === "KNG") {
                        durability += 1; // +1 Durability
                        acceleration -= 1; // -1 Acceleration
                    } else if (value === "MNSTR") {
                        willpower += 1; // +1 Willpower
                        durability -= 1; // -1 Durability
                    }
                }
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
