import { useState } from 'react'
import { DataFrame } from 'danfojs'
import FileUpload from './FileUpload.tsx'
import DataVisualisation from  './DataVisualisation.tsx'
import { calculateBasicStats, groupByTimeUnit, weekdayVsWeekend } from '../utils/dataAnalysis'
import GameOfLife from './conways/GameOfLife.tsx'
import TestStuff from './TestStuff.tsx'

const Home = () => {
  
  const [df, setDf] = useState<DataFrame | null>(null)
  const [stats, setStats] = useState<any>(null)

  const handleDataLoaded = (loadedDf: DataFrame) => {
    setDf(loadedDf)
    const basicStats = calculateBasicStats(loadedDf, 'usage')
    const hourlyStats = groupByTimeUnit(loadedDf, 'hour')
    const weekdayWeekendStats = weekdayVsWeekend(loadedDf)
    setStats({ basicStats, hourlyStats, weekdayWeekendStats })
  }

  return (
    <>
      <TestStuff />
      <FileUpload onDataLoaded={handleDataLoaded} />
      {df && (
        <>
          <DataVisualisation df={df} />
          {stats && (
            <div>
              <h2>Basic Stats</h2>
              <pre>{JSON.stringify(stats.basicStats, null, 2)}</pre>
            </div>
          )}
        </>
      )}

      <GameOfLife/>
    </>
  )
}

export default Home