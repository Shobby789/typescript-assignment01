// Define the URL of the API endpoint
var apiUrl = "https://dummyjson.com/products";
// Fetch the data from the API endpoint
fetch(apiUrl)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    // Convert the array of objects into an array of arrays
    var dataArray = data.products.map(function (products) { return [
        products.id,
        products.title,
        products.description,
        products.price,
        products.rating,
    ]; });
    // Create the table element
    var table = document.createElement("table");
    table.className = "my-table"; // Add a class name to the table
    // Create the table header row and add it to the table
    var headerRow = table.insertRow();
    var headerLabels = ["ID", "Title", "Description", "Price", "Rating"];
    headerLabels.forEach(function (label) {
        var headerCell = headerRow.insertCell();
        headerCell.textContent = label;
    });
    // Create a row for each data object and add it to the table
    dataArray.forEach(function (dataRow) {
        var row = table.insertRow();
        dataRow.forEach(function (dataCell) {
            var cell = row.insertCell();
            cell.textContent = String(dataCell);
        });
    });
    // Append the table to the DOM
    var tableContainer = document.getElementById("table-container");
    tableContainer.appendChild(table);
})["catch"](function (error) { return console.error(error); });
