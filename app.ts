// Define the URL of the API endpoint
const apiUrl = "https://dummyjson.com/products";

// Define an interface for the data object
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
}

// Fetch the data from the API endpoint
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Convert the array of objects into an array of arrays
    const dataArray = data.products.map((products: Product) => [
      products.id,
      products.title,
      products.description,
      products.price,
      products.rating,
    ]);

    // Create the table element
    const table = document.createElement("table");
    table.className = "my-table"; // Add a class name to the table

    // Create the table header row and add it to the table
    const headerRow = table.insertRow();
    const headerLabels = ["ID", "Title", "Description", "Price", "Rating"];
    headerLabels.forEach((label) => {
      const headerCell = headerRow.insertCell();
      headerCell.textContent = label;
    });

    // Create a row for each data object and add it to the table
    dataArray.forEach((dataRow: any) => {
      const row = table.insertRow();
      dataRow.forEach((dataCell: any) => {
        const cell = row.insertCell();
        cell.textContent = String(dataCell);
      });
    });

    // Append the table to the DOM
    const tableContainer = document.getElementById(
      "table-container"
    )! as HTMLInputElement;
    tableContainer.appendChild(table);
  })
  .catch((error) => console.error(error));
