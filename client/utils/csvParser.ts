import { parse } from 'papaparse';

interface ParsedData {
    [key: string]: string | number
}

export const parseCSV = (data: string): ParsedData[] => {
    // console.log(data.slice(0, 200))
    return parse<ParsedData>(data, {
        header:  true
    }).data
}



// export const parseCSV = (data: string): ParsedData[] => {
//     // Add some basic error handling and logging
//     try {
//         const result = parse<ParsedData>(data, {
//             header: true,
//             // Add these options for better performance
//             skipEmptyLines: true,
//             // Can add worker: true for large files
//             // worker: true,
//             // Add error handling
//             error: (error) => {
//                 console.error('Error parsing CSV:', error);
//             },
//         });

//         // Log the result to see what's happening
//         console.log('Parse complete, row count:', result.data.length);
        
//         return result.data;
//     } catch (error) {
//         console.error('Error in parseCSV:', error);
//         return [];
//     }
// }