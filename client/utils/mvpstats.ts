//mvp/poc for calculating the basic stats on an EK MoveMaster power plan
import { DataFrame } from 'danfojs/dist/danfojs-base'


export interface MVPStats {
    // earliestDate: string,
    // latestDate: string,
    totalNightUsage: number,
    totalDayUsage: number,
    totalPeakUsage: number,
    totalHOPUsage: number,
}

const rateIntervals = {
    night: { start: "23:00", end: "07:00" },
    day: { start: "07:00", end: "23:00" },
    peakAM: { start: "07:00", end: "09:00" },
    peakPM: { start: "17:00", end: "21:00" },
    hop: { start: "21:00", end: "22:00" }
  }

  function calculateTotalUsageForInterval(df: DataFrame, interval: { start: string; end: string }): number {
    const startHour = parseInt(interval.start.split(':')[0]);
    const endHour = parseInt(interval.end.split(':')[0]);
    
    return df
      .filter(row => {
        const hour = row['hour'];
        return (hour >= startHour && hour < endHour) || (endHour < startHour && (hour >= startHour || hour < endHour));
      })
      .sum('usage');
  }

  function getEarliestDate(df: DataFrame): Date {
    return new Date(df['date'].min());
  }
  
  function getLatestDate(df: DataFrame): Date {
    return new Date(df['date'].max());
  }


  function mvpUsageStats(df: DataFrame): MVPStats {
    // const earliestDate = getEarliestDate(df)
    // const latestDate = getLatestDate(df)
    
    const totalHOPUsage = calculateTotalUsageForInterval(df, rateIntervals.hop)
    const totalNightUsage = calculateTotalUsageForInterval(df, rateIntervals.night)

    //todo: add check for weekend day
    const totalPeakAMUsage = calculateTotalUsageForInterval(df, rateIntervals.peakAM)
    const totalPeakPMUsage = calculateTotalUsageForInterval(df, rateIntervals.peakPM)    
    const totalPeakUsage = totalPeakAMUsage + totalPeakPMUsage

    //calc total day then minus peak and HOP totals
    const rawDayUsage = calculateTotalUsageForInterval(df, rateIntervals.day)
    const totalDayUsage = rawDayUsage - totalHOPUsage - totalPeakUsage

    return {
    //   earliestDate,
    //   latestDate,
      totalNightUsage,
      totalDayUsage,
      totalPeakUsage,
      totalHOPUsage
    }
  }
  
  export default mvpUsageStats;