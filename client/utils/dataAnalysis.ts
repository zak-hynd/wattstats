import { DataFrame } from 'danfojs/dist/danfojs-base';

export function calculateBasicStats(df: DataFrame, column: string) {
  return {
    mean: df[column].mean(),
    median: df[column].median(),
    min: df[column].min(),
    max: df[column].max(),
    q1: df[column].quantile(0.25),
    q3: df[column].quantile(0.75),
    total: df[column].sum()
  };
}

export function groupByTimeUnit(df: DataFrame, timeUnit: 'hour' | 'day' | 'week' | 'month' | 'season') {
  //assuming 'date' column exists
  return df.groupby([`${timeUnit}(date)`]).agg({ 'usage': 'mean' });
}

export function weekdayVsWeekend(df: DataFrame) {
  df['is_weekend'] = df['date'].apply((d) => new Date(d).getDay() >= 5 ? 'Weekend' : 'Weekday');
  return df.groupby(['is_weekend']).agg({ 'usage': 'mean' });
}