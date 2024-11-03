//My naive attempt to actually run my code and console log it!

import { useEffect } from "react"
import { parseCSV } from "../utils/csvParser"
// import { readBrowserFile, readCSVFile } from "../utils/fileReader"
import testData from '../testEK2.csv?raw'  // The ?raw query tells Vite to import as string
import { meltCSVData, isTimeInterval, getIntervalMidpoint} from '../utils/meltData'
import { calcTotalUsage } from "../utils/dataAnalysis"
import { analyseUsageData } from "../utils/danfo"

function TestStuff() {
    useEffect(() => {

      //   console.log('Raw CSV:', testData)


      const rex = `Date,12:01am-12:30am,12:31am-1:00am
2024-09-28,0.3,0.2,,
2024-09-29,0.1,0.5,,`
      // const bob = [{'a': 1,  'b': 2}, {'a': 3, 'b': 4}]

      // const parsed = parseCSV(rex)
      // console.log(meltCSVData(parseCSV(rex)))
      console.log(analyseUsageData(meltCSVData(parseCSV(rex))))

      // console.log(meltCSVData(parseCSV(testData)))
      // console.log( calcTotalUsage(meltCSVData(parseCSV(rex))))

    }, [])
  
    return <></>
  }
export default TestStuff


//ICP,Component Serial number,Registry Channel Number,Read Date,12:01am-12:30am,12:31am-1:00am,1:01am-1:30am,1:31am-2:00am,2:01am-2:30am,2:31am-3:00am,3:01am-3:30am,3:31am-4:00am,4:01am-4:30am,4:31am-5:00am,5:01am-5:30am,5:31am-6:00am,6:01am-6:30am,6:31am-7:00am,7:01am-7:30am,7:31am-8:00am,8:01am-8:30am,8:31am-9:00am,9:01am-9:30am,9:31am-10:00am,10:01am-10:30am,10:31am-11:00am,11:01am-11:30am,11:31am-12:00pm,12:01pm-12:30pm,12:31pm-1:00pm,1:01pm-1:30pm,1:31pm-2:00pm,2:01pm-2:30pm,2:31pm-3:00pm,3:01pm-3:30pm,3:31pm-4:00pm,4:01pm-4:30pm,4:31pm-5:00pm,5:01pm-5:30pm,5:31pm-6:00pm,6:01pm-6:30pm,6:31pm-7:00pm,7:01pm-7:30pm,7:31pm-8:00pm,8:01pm-8:30pm,8:31pm-9:00pm,9:01pm-9:30pm,9:31pm-10:00pm,10:01pm-10:30pm,10:31pm-11:00pm,11:01pm-11:31pm,11:31pm-12:00am,Interval_49,Interval_50
//0006034071RN1D0,251354585,2,2024-09-28,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,,
//0006034071RN1D0,251354585,1,2024-09-28,0.066,0.049,0.451,0.471,0.068,0.046,0.041,0.059,0.04,0.053,0.036,0.044,0.503,0.066,0.042,0.051,0.038,0.47,1.062,0.119,0.155,0.122,0.102,0.115,0.039,0.527,0.189,0.042,0.082,0.039,0.08,0.047,0.07,0.481,0.158,0.07,0.046,0.64,0.795,0.354,0.104,0.132,1.592,0.333,0.098,0.073,0.094,0.073,,


