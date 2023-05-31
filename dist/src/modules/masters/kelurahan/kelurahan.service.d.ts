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
import { Kelurahan, KelurahanDocuments } from '../../../schemas/masters/kelurahan.schema';
export declare class KelurahanService {
    private kelurahanModel;
    constructor(kelurahanModel: Model<KelurahanDocuments>);
    getAllKelurahan(): Promise<(import("mongoose").Document<unknown, any, Kelurahan> & Omit<Kelurahan & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    createKelurahan(kelurahanData: any): Promise<import("mongoose").Document<unknown, any, Kelurahan> & Omit<Kelurahan & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getKelurahan(): Promise<any[]>;
    editKelurahan(kelurahanData: any, kode_kelurahan: string): Promise<string>;
    getLatestKelurahan(kode_kelurahan: string): Promise<(import("mongoose").Document<unknown, any, Kelurahan> & Omit<Kelurahan & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getKelurahanByKode(kode_kelurahan: string): Promise<import("mongoose").Document<unknown, any, Kelurahan> & Omit<Kelurahan & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    deleteKelurahan(kode_kelurahan: string): Promise<string>;
    generateCode(prev: String): string;
    getKode(): Promise<string>;
}
