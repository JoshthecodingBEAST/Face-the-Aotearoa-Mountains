const placeholderImage = "../images/logo.jpg";

        // JavaScript city dictionary.
        const cityVacationSpots = {
            auckland: [
                { name: "The Sky Tower", link: "locations/auckland_sky_tower.html", image: "../images/auckland_sky_tower.jpg" },
                { name: "Auckland's Lion Rock", link: "locations/auckland_lion_rock.html", image: "../images/auckland_lion_rock.jpg" },
                { name: "Auckland's Palm Beach", link: "locations/auckland_palmbeach.html", image: "../images/auckland_palmbeach.jpg" }
            ],
            wellington: [
                { name: "Wellington's Cable Car!", link: "locations/wellington_cable_car.html", image: "../images/wellington_cable_car.jpg" },
                { name: "Wellington Cape Palliser", link: "locations/wellington_cape_palliser.html", image: "../images/wellington_cape_palliser.jpg" },
                { name: "Wellington Oriental Bay", link: "locations/wellington_oriental_bay.html", image: "../images/wellington_oriental_bay.jpg" }
            ],
            christchurch: [
                { name: "Banks Peninsula", link: "locations/christchurch_banks_peninsula.html", image: "../images/christchurch_banks_peninsula.jpg" },
                { name: "Cave Rock", link: "locations/christchurch_cave_rock.html", image: "../images/christchurch_cave_rock.jpg" },
                { name: "Port Hills", link: "locations/christchurch_port_hills.html", image: "../images/christchurch_port_hills.jpg" }
            ],
            rotorua: [
                { name: "Tarawera", link: "locations/rotorua_tarawera.html", image: "../images/rotorua_tarawera.jpg" },
                { name: "Tudor Towers", link: "locations/rotorua_tudor_towers.html", image: "../images/rotorua_tudor_towers.jpg" },
                { name: "Centennial Park", link: "locations/rotorua_centennial_park.html", image: "../images/rotorua_centennial_park.jpg" }
            ],
            hamilton: [
                { name: "Hamilton Gardens", link: "locations/hamilton_gardens.html", image: "../images/hamilton_gardens.jpg" },
                { name: "Waikato's Hobbit Hole!", link: "locations/hamilton_hobbit.html", image: "../images/hamilton_hobbit.jpg" },
                { name: "Marokopa Falls", link: "locations/hamilton_marokopa_falls.html", image: "../images/hamilton_marokopa_falls.jpg" }
            ],
            tauranga: [
                { name: "Tauranga Harbour Bridge", link: "locations/tauranga_bridge.html", image: "../images/tauranga_bridge.jpg" },
                { name: "Mount Maunganui", link: "locations/tauranga_mount_maunganui.html", image: "../images/tauranga_mount_maunganui.jpg" },
            ],
            dunedin: [
                { name: "Dunedin Placeholder Spot 1", link: "", image: "../images/logo.jpg" },
                { name: "Dunedin Placeholder Spot 2", link: "", image: "../images/logo.jpg" },
                { name: "Dunedin Placeholder Spot 3", link: "", image: "../images/logo.jpg" }
            ],
            queenstown: [
                { name: "Queenstown Placeholder Spot 1", link: "", image: "../images/logo.jpg" },
                { name: "Queenstown Placeholder Spot 2", link: "", image: "../images/logo.jpg" },
                { name: "Queenstown Placeholder Spot 3", link: "", image: "../images/logo.jpg" }
            ]
        };

        // Reads the city name from the URL.
        const params = new URLSearchParams(window.location.search);
        const cityFromUrl = params.get("city");
        const cityFromStorage = sessionStorage.getItem("selectedcity");

        let city = "";

        if (cityFromUrl) {
            city = cityFromUrl;
            sessionStorage.setItem("selectedcity", cityFromUrl);
        } else if (cityFromStorage) {
            city = cityFromStorage;
        }
        const cityKey = city ? city.trim().toLowerCase() : "";
        const cityName = document.getElementById("city-name");
        const locationsResults = document.getElementById("locations-results");

        // Search function.
        if (cityKey && cityVacationSpots[cityKey]) {
            cityName.textContent = formatCityName(cityKey);
            displayResults(cityVacationSpots[cityKey]);
        } else {
            showUnknownCityMessage();
        }

        // Formats the city name for the heading.
        function formatCityName(city) {
            return city.charAt(0).toUpperCase() + city.slice(1);
        }

        // Result display function.
        function displayResults(vacationSpots) {
            locationsResults.innerHTML = vacationSpots.map(function(spot) {
                const image = spot.image || placeholderImage;
                return `
                    <a class="location-placeholder" href="${spot.link}">
                        <img src="${image}" alt="${spot.name}" class="location-placeholder-image" onerror="this.src='${placeholderImage}'">
                        <span>${spot.name}</span>
                    </a>
                `;
            }).join("");
        }

        // Error handling for unknown cities.
        function showUnknownCityMessage() {
            cityName.textContent = "your city";
            locationsResults.innerHTML = `
                <p class="search-error">
                    No vacation recommendations available for this city.
                </p>
            `;
        }

