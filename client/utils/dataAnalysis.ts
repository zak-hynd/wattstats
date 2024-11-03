//utils/dataAnalysis.ts
import { UsageData, UsageStats } from "../models/models"

export function calcTotalUsage(data: UsageData[]): number {
    return data.reduce((acc, e) => acc + e.usage, 0)
}