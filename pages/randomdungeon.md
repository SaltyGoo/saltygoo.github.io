<html>
  <head>
    <meta charset="UTF-8">
    <title>Random Dungeon Generator</title>

  </head>
  <body>
    <h1>Random Dungeon Generator</h1>
 
     <!-- Dropdown Menu -->
    <label for="dropdown">Choose an option:</label>
    <select id="dropdown">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>

    <!-- Result Display -->
    <div id="result"></div>

    <!-- jQuery library -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- Script to Handle Dropdown Selection -->
    <script>
        $(document).ready(function() {
            $("#dropdown").change(function() {
                var selectedValue = $(this).val(); // Get the selected value
                $("#result").html("You selected: " + selectedValue); // Display the result
            });
        });
    </script>
      
  </body>
</html>
