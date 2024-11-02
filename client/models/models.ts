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
