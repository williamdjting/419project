import fs from 'fs';

// Function to read CSV file and extract data row by row
function readCSV(filePath: string): any[] {
  // Read the CSV file
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Split the file content into rows
  const rows = fileContent.trim().split('\n');

  // Extract data from each row
  const data = rows.map(row => {
    const values = row.split(',');
    // Process each value as needed
    const rowData = {
      projectid: values[0], // Replace 'field1' with the actual field name
      projectname: values[1], // Replace 'field2' with the actual field name
      url: values[2],
      description: values[3],
      icon: values[4],
      github: values[5],
    };
    return rowData;
  });

  return data;
}

// // Example usage:
// const filePath = 'submittedData.csv'; // Path to your CSV file
// const csvData = readCSV(filePath);
// console.log(csvData); // Output the extracted data


export { readCSV }