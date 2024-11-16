import { useState } from "react"
import { Link } from "react-router-dom"
import FileUpload from "./FileUpload"
import { DataFrame } from "danfojs"
import mvpUsageStats from "../utils/mvpstats"
import { MVPStats } from "../utils/mvpstats"


const MVPting = () => {

    const [df, setDf] = useState<DataFrame | null>(null)
    const [stats, setStats] = useState<MVPStats>(null)
  
    const handleDataLoaded = (loadedDf: DataFrame) => {
      setDf(loadedDf)
      const usageStats = mvpUsageStats(loadedDf)
      setStats(usageStats)
    }
  


return (
    <div className="MVPting">

        <h2>MVP stuff</h2>
        <p>On this component I want to display some really basic stats to help an Electric Kiwi customer fill out the <Link to="https://www.powerswitch.org.nz/questionnaire">PowerSwitch</Link> form.</p>
        <br />
        <p>Upload your file and see...</p>
        <FileUpload onDataLoaded={handleDataLoaded} />
        <br />
        {/* <p>Start date: {stats?.earliestDate}</p>
        <p>Latest date: {stats?.latestDate}</p> */}
        <p>Total night usage: {stats?.totalNightUsage} kWh</p>
        <p>Total day usage: {stats?.totalDayUsage} kWh</p>
        <p>Total peak usage: {stats?.totalPeakUsage} kWh</p>
        <p>Total HoP usage: {stats?.totalHOPUsage} kWh</p>
        <p>Hour of power: 21:00-22:00</p>

    </div>
)
}
export default MVPting