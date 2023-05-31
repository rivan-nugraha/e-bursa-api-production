/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Stock, StockDocuments } from '../../../schemas/transaction/stock.schema';
export declare class StockService {
    private stockModel;
    constructor(stockModel: Model<StockDocuments>);
    getAllStock(): Promise<(import("mongoose").Document<unknown, any, Stock> & Omit<Stock & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    addTransactionStock(stock: any): Promise<import("mongoose").Document<unknown, any, Stock> & Omit<Stock & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getVegetablesReadyStock(): Promise<any[]>;
    getDataStock(ref_stock: string): Promise<any[]>;
    getLatestStockIn(): Promise<any[]>;
    getLatestStockOut(): Promise<any[]>;
    validationStock(ref_stock: string): Promise<import("mongodb").UpdateResult>;
    getStockClosedIn(): Promise<any[]>;
    getStockClosedOut(): Promise<any[]>;
    getStockDataReadyAmbil(ref_stock: string): Promise<(import("mongoose").Document<unknown, any, Stock> & Omit<Stock & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getStockReadyAmbil(): Promise<any[]>;
    updateStock(ref_stock: string, status_kembali: string): Promise<import("mongodb").UpdateResult>;
    getStockBarang(): Promise<any[]>;
    generateCode(prev: any, kode_buruan_sae: string, kode_vegetables: string): Promise<string>;
    generateCodeForTaking(prev: any, kode_buruan_sae: string, kode_vegetables: string): Promise<string>;
    convertToRoman(num: number): string;
    fixingStructure(): Promise<import("mongodb").UpdateResult>;
}
