import { DataFrame, Series } from 'danfojs/dist/danfojs-base'
import { UsageData } from '../models/models'

export function analyseUsageData(data: UsageData[]) {
  // Convert your data to a DataFrame
  const df = new DataFrame(data)
 console.log(df)
 return df
//   // Daily total usage
//   const dailyUsage = df.groupby(['year', 'month', 'day']).sum().reset_index()

//   // Hourly average usage
//   const hourlyAverage = df.groupby(['hour']).mean().reset_index()

//   // Find peak usage
//   const peakUsage = df.sort_values({ by: 'usage', ascending: false }).head()

//   // Weekday vs Weekend usage
//   df['dayOfWeek'] = df.apply((row) => {
//     const date = new Date(row.year, row.month - 1, row.day)
//     return date.getDay()
//   })
//   const weekdayVsWeekend = df.groupby('dayOfWeek').mean().reset_index()

//   return {
//     dailyUsage: dailyUsage.toJSON(),
//     hourlyAverage: hourlyAverage.toJSON(),
//     peakUsage: peakUsage.toJSON(),
//     weekdayVsWeekend: weekdayVsWeekend.toJSON()
//   }
}