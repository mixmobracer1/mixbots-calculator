function fetchMixBotStats() {
    // Get the mint address from the input field
    let mintAddress = document.getElementById("mintAddress").value.trim();

    // Check if the input is empty
    if (!mintAddress) {
        alert("Please enter a valid MixBot Mint Address.");
        return;
    }

    // Fetch data from Magic Eden API using the mint address
    fetch(`https://api-mainnet.magiceden.dev/v2/tokens/${mintAddress}`)
        .then(response => response.json())
        .then(data => {
            // If the data is not valid or there's an error, show a message
            if (!data || !data.attributes) {
                alert("Failed to fetch MixBot data. Please check the mint address.");
                return;
            }

            // Define the base stats for a MixBot (this is the baseline stat before modifiers)
            let stats = {
                acceleration: 10,
                maxSpeed: 10,
                durability: 10,
                willpower: 10
            };

            // Iterate over the MixBot's attributes and adjust stats accordingly
            data.attributes.forEach(attribute => {
                if (attribute.trait_type === "bottom_body_type") {
                    if (attribute.value === "FINK") {
                        stats.acceleration += 1;
                        stats.maxSpeed -= 1;
                    } else if (attribute.value === "MNSTR") {
                        stats.durability += 1;
                        stats.willpower -= 1;
                    }
                    // Add more conditions for different traits here
                }
                // Handle other trait types like "top_body_type", "cartridge_power", etc.
            });

            // Update the results on the page
            document.getElementById("acceleration").textContent = `Acceleration: ${stats.acceleration}`;
            document.getElementById("maxSpeed").textContent = `Max Speed: ${stats.maxSpeed}`;
            document.getElementById("durability").textContent = `Durability: ${stats.durability}`;
            document.getElementById("willpower").textContent = `Willpower: ${stats.willpower}`;
        })
        .catch(error => {
            console.error('Error fetching MixBot data:', error);
            alert('Failed to fetch MixBot data. Please check the mint address and try again.');
        });
}
