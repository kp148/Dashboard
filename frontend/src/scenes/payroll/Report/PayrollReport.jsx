import React, { useState } from 'react';
import { uploadFile } from './apiService';  // Import from the API service
import * as XLSX from 'xlsx';  // Import the XLSX library

function PayrollReport() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [data, setData] = useState(null);
  const [parsedData, setParsedData] = useState(null);  // State to store parsed Excel data

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    try {
      const response = await uploadFile(file);  // Use the uploadFile function from apiService
      setData(response);
      setMessage('File uploaded and data stored successfully.');
    } catch (error) {
      setMessage(`Error uploading file: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleFileRead = async () => {
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });

      // Assuming you want to read the first sheet
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      setParsedData(jsonData);  // Store the parsed data
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <div className="App">
        <h1>Upload Excel File</h1>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        <button onClick={handleFileRead}>Preview</button> {/* Button to preview file contents */}
        {message && <p>{message}</p>}
        {parsedData && (
          <div>
            <h2>File Preview</h2>
            <table border="1">
              <tbody>
                {parsedData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {data && (
          <div>
            <h2>Stored Data</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default PayrollReport;
