import React, { useState } from 'react';
import { parseCSV } from '../utils/csvParser';
import { readBrowserFile } from '../utils/fileReader';

function FileUpload() {
  const [fileData, setFileData] = useState(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const csvString = await readBrowserFile(file);
        const parsedData = parseCSV(csvString);
        setFileData(parsedData);
        console.log('Parsed CSV data:', parsedData);
      } catch (error) {
        console.error('Error reading file:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {fileData && <p>File uploaded and parsed successfully!</p>}
    </div>
  );
}

export default FileUpload;