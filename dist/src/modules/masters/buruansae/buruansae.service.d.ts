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
import { BuruanSae, BuruanSaeDocuments } from '../../../schemas/masters/buruansae.schema';
export declare class BuruanSaeService {
    private buruanSaeModel;
    constructor(buruanSaeModel: Model<BuruanSaeDocuments>);
    getAllBuruanSae(): Promise<(import("mongoose").Document<unknown, any, BuruanSae> & Omit<BuruanSae & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getBuruanSaeByKode(kode_buruan_sae: string): Promise<import("mongoose").Document<unknown, any, BuruanSae> & Omit<BuruanSae & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    editBuruanSaeByKode(dataBuruanSae: any, kode_buruan_sae: string): Promise<string>;
    getBuruanSaeByKelurahan(kode_kelurahan: string): Promise<any[]>;
    getBuruanSae(): Promise<any[]>;
    createBuruanSae(buruanSaeDto: any): Promise<import("mongoose").Document<unknown, any, BuruanSae> & Omit<BuruanSae & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    deleteBuruanSae(kode_buruan_sae: any): Promise<string>;
    generateCode(prev: String): string;
    getKode(): Promise<string>;
}
