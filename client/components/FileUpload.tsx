import React, { useState } from 'react'
import { DataFrame } from 'danfojs/dist/danfojs-base'
import { readBrowserFile } from '../utils/fileReader'

interface FileUploadProps {
  onDataLoaded: (df: DataFrame) => void
}

export function FileUpload({ onDataLoaded }: FileUploadProps) {
  const [df, setDf] = useState<DataFrame | null>(null)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      try {
        const csvString = await readBrowserFile(file)
        const df = new DataFrame(csvString)
        onDataLoaded(df)
      } catch (error) {
        console.error('Error reading file:', error)
      }
    }
  }

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {df && <p>File uploaded successfully.</p>}
    </div>
  )
}

export default  FileUpload