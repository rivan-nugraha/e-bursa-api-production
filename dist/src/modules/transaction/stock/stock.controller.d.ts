import { StockService } from './stock.service';
import { iInsertStockDto } from './dto/insert-stock.dto';
export declare class StockController {
    private readonly stockServices;
    constructor(stockServices: StockService);
    getStockBarang(): Promise<any[]>;
    getStockClosedIn(): Promise<any[]>;
    getStockClosedOut(): Promise<any[]>;
    getStockDataReadyAmbil(body: any): Promise<{
        message: string;
        response: (import("mongoose").Document<unknown, any, import("../../../schemas/transaction/stock.schema").Stock> & Omit<import("../../../schemas/transaction/stock.schema").Stock & {
            _id: import("mongoose").Types.ObjectId;
        }, never> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    getStockReadyAmbil(): Promise<any[]>;
    validationStock(body: any): Promise<string>;
    getVegetablesReadyStock(): Promise<any[]>;
    addStockBarang(body: iInsertStockDto): Promise<{
        message: string;
        getDataBukti: any[];
    }>;
    takeStockBarang(body: iInsertStockDto): Promise<{
        message: string;
        getDataBukti: any[];
    }>;
    fixingStructure(): Promise<import("mongodb").UpdateResult>;
}
