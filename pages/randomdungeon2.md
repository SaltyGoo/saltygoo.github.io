<script>
    $(document).ready(function() {
        $("#generateBtn").click(function() {
            var selectedValue1 = $("#climate1").val();
            var selectedValue2 = $("#climate2").val();
            console.log("Selected Climate 1:", selectedValue1);
            console.log("Selected Climate 2:", selectedValue2);

            if (selectedValue1 || selectedValue2) {
                $.get("/CSV/Monster - Index2.csv", function(data) {
                    Papa.parse(data, {
                        header: true,
                        complete: function(results) {
                            var uniqueRandomValues1 = [];
                            var uniqueRandomValues2 = [];
                            var encounterTable = [];
                            var dungeonRoomsContent = "";

                            function getRandomValues(selectedValue) {
                                var filteredValues = [];
                                var columnIndex = results.meta.fields.indexOf(selectedValue);
                                console.log("Column index for", selectedValue, ":", columnIndex);

                                if (columnIndex !== -1) {
                                    results.data.forEach(function(row) {
                                        if (row[selectedValue] === "TRUE") {
                                            filteredValues.push(row[Object.keys(row)[0]]);
                                        }
                                    });
                                    console.log("Filtered Values for", selectedValue, ":", filteredValues);

                                    var selectedValues = [];
                                    while (selectedValues.length < 3 && filteredValues.length > 0) {
                                        var randomIndex = Math.floor(Math.random() * filteredValues.length);
                                        selectedValues.push(filteredValues.splice(randomIndex, 1)[0]);
                                    }
                                    console.log("Selected Values for", selectedValue, ":", selectedValues);
                                    return selectedValues;
                                } else {
                                    return ["No matching column found for the selected climate."];
                                }
                            }

                            if (selectedValue1) uniqueRandomValues1 = getRandomValues(selectedValue1);
                            if (selectedValue2) uniqueRandomValues2 = getRandomValues(selectedValue2);

                            var allGeneratedValues = uniqueRandomValues1.concat(uniqueRandomValues2);
                            console.log("All Generated Values:", allGeneratedValues);

                            function getRandomRowFromPool(pool, data) {
                                const tries = 10;
                                for (let i = 0; i < tries; i++) {
                                    const key = pool[Math.floor(Math.random() * pool.length)];
                                    const row = data.find(r => r[Object.keys(r)[0]] === key);
                                    console.log("Trying to fetch row for:", key, "Found:", !!row);
                                    if (row) return row;
                                }
                                console.warn("No valid row found after 10 tries.");
                                return null;
                            }

                            // ... leave rest of your code unchanged ...
                        }
                    });
                });
            } else {
                $("#result").html("Please select options for both climates.");
            }
        });
    });
</script>
