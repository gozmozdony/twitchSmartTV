import { Default } from "../models/Default";

export interface RestService {
    search(query: string): Promise<any>;
    get(): Promise<any>;
    map(result: string): Default[];
}