export interface UsageStats {
    total: number
    mean: number
    max: number
    q3: number
    median: number
    q1: number
    min: number
  }

export interface UsageData {
    year: number
    month: number
    day: number
    hour: number
    minute: number
    usage: number
}

export interface PowerPlan {
    name: string
    fixedRatePerDay: number
    defaultUsageRate: number
}

export  interface TieredRate {
    name: string
    rate: number
    start: number
    end: number
    days: number[]
}

export interface TieredPowerPlan extends PowerPlan {
    tieredRates:  TieredRate[]
}

export interface ParsedData {
    [key: string]: string | number
}

//example
// const powerPlan = {
//     name: "Custom Plan",       // Name of the plan
//     fixedRatePerDay: 1.35,     // Fixed daily cost
//     defaultUsageRate: 0.2988,  // Default usage rate for any times not specified
    
//     tieredRates: [             // Array of rates with time and day ranges
//         {
//             name: "Morning Rate",
//             rate: 0.1725,           // Rate in $/kWh
//             start: "07:00",         // Start time
//             end: "09:00",           // End time
//             days: [1, 2, 3, 4, 5],  // Days of the week (1=Monday, 7=Sunday)
//         },
//         {
//             name: "Day Rate",
//             rate: 0.2225,
//             start: "09:00",
//             end: "21:00",
//             days: [1, 2, 3, 4, 5],  // Weekdays
//         },
//         {
//             name: "Night Rate",
//             rate: 0.2500,
//             start: "21:00",
//             end: "06:00",           // Rolls over to the next day
//             days: [1, 2, 3, 4, 5],  // Weekdays
//         },
//         {
//             name: "Weekend Rate",
//             rate: 0.2750,
//             start: "00:00",
//             end: "23:59",
//             days: [6, 7],           // Applies all day on weekends (Saturday, Sunday)
//         },
//         {
//             name: "Free Hour",
//             rate: 0.0,              // Free power during this time
//             start: "21:00",
//             end: "22:00",
//             days: [1, 2, 3, 4, 5],  // Applies on weekdays
//         }
//     ]
// };