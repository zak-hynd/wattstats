import { parse } from 'papaparse';
import { ParsedData } from '../models/models';



export const parseCSV = (data: string): ParsedData[] => {
    return parse<ParsedData>(data, {
        header:  true
    }).data
}
