import fs from 'fs/promises'
import path from 'path'
//Maybe this file will be redundant once I add db functionality

//todo: catch different types of usage data?
//other server-read type operations? 

 
//vv server-side file reading via Node: fs and path
export const readCSVFile = async (filePath: string):  Promise<string> => {
    const fullPath = path.resolve(__dirname, filePath)
    try {
        const data = await fs.readFile(fullPath, 'utf8')
        return data
    } catch (err) {
        if (err instanceof Error) {throw new Error(`Error reading file: ${err.message}`)}
        else {throw new Error('Unknown error occurred')}
    }
}

//if reading from a user's uploaded file...
export const readBrowserFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        
        reader.onload = (event) => {
          if (event.target?.result) {
            resolve(event.target.result as string)
          }
        }
        
        reader.onerror = (error) => reject(error)
        reader.readAsText(file)
      })
    }