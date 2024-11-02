import { UsageData } from "../models/models";

export const meltCSVData = (data: any[]): UsageData[] => {
    const melted: UsageData[] = [];
    const headers = Object.keys(data[0]) //assumes first row is header row
    const dateColumn = headers.find(header =>  header.toLowerCase().includes('date'));

    if(!dateColumn) {
        console.error('Date column not found.');
        return [];
    }

    data.forEach(row => {
        const [year, month, day] = row[dateColumn].split('-').map(Number)
        //^^ assumes YYYY-MM-DD format

        headers.forEach(column => { 
            if(isTimeInterval(column) && row[column] !== 0) { 
                //^^ add thing here to ignore times without usage:maybe && parseFloat(row[column])>0
                const [hour, minute] = getIntervalMidpoint(column)
                melted.push({
                    year, month, day, hour, minute,
                    usage: parseFloat(row[column])
                })
            }
        })
    });
    return melted
}



//-------EK files
//the following expect electric-kiwi structured time intervals
const isTimeInterval = (header: string) => {
    const timeIntervalPattern = /^\d{1,2}:\d{2}(am|pm)-\d{1,2}:\d{2}(am|pm)$/
    return timeIntervalPattern.test(header)
}
// console.log(isTimeInterval('asfasf'))

const getIntervalMidpoint = (header: string): [number, number] => {
    
    const startTime = header.split('-')[0]
    const isPM = startTime.includes('pm')
    const minutes = parseInt(startTime.split(':')[1].substring(0,2)) +14
    let hour = parseInt(startTime.split(':')[0])

    if (isPM && hour !== 12) hour += 12
    if (!isPM && hour === 12) hour = 0

    return  [hour, minutes]
}

export default meltCSVData