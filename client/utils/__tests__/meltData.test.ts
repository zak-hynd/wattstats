import { describe, it, expect } from 'vitest'
import meltCSVData from '../meltData'


describe('MeltData', () => {
  it('correctly transforms CSV data with time intervals', () => {
    const sampleInput = [{
      'Date': '2023-12-25',
      '9:00am-9:30am': '1.5',
      '9:30am-10:00am': '2.0'
    }]

    const expected = [
      { year: 2023, month: 12, day: 25, hour: 9, minute: 14, usage: 1.5 },
      { year: 2023, month: 12, day: 25, hour: 9, minute: 44, usage: 2.0 }
    ]

    expect(meltCSVData(sampleInput)).toEqual(expected)
  })

  it('handles PM times correctly', () => {
    const sampleInput = [{
      'Date': '2023-12-25',
      '1:00pm-1:30pm': '1.5',
      '11:30pm-12:00am': '2.0'
    }]

    const expected = [
      { year: 2023, month: 12, day: 25, hour: 13, minute: 14, usage: 1.5 },
      { year: 2023, month: 12, day: 25, hour: 23, minute: 44, usage: 2.0 }
    ]

    expect(meltCSVData(sampleInput)).toEqual(expected)
  })

  it('ignores non-time-interval columns', () => {
    const sampleInput = [{
      'Date': '2023-12-25',
      '9:00am-9:30am': '1.5',
      'TotalUsage': '10.0',
      'Notes': 'Some text'
    }]

    const expected = [
      { year: 2023, month: 12, day: 25, hour: 9, minute: 14, usage: 1.5 }
    ]

    expect(meltCSVData(sampleInput)).toEqual(expected)
  })

  it('returns empty array if no date column found', () => {
    const sampleInput = [{
      'NotADate': '2023-12-25',
      '9:00am-9:30am': '1.5'
    }]

    expect(meltCSVData(sampleInput)).toEqual([])
  })
})
  