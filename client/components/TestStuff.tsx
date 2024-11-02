//My naive attempt to actually run my code and console log it!

import { useEffect } from "react"
import { parseCSV } from "../utils/csvParser"
// import { readBrowserFile, readCSVFile } from "../utils/fileReader"
import testData from '../testEK.csv?raw'  // The ?raw query tells Vite to import as string
import { meltCSVData} from '../utils/meltData'

function TestStuff() {
    useEffect(() => {
      // Now you can directly work with your data
    //   console.log('Raw CSV:', testData)
      const parsed = parseCSV(testData)
    //   console.log('Parsed:', parsed)

    console.log(meltCSVData(parsed))


    }, [])
  
    return <div>Check the console!</div>
  }
export default TestStuff