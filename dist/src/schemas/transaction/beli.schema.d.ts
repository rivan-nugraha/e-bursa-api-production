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
import { HydratedDocument } from "mongoose";
export type BeliDocuments = HydratedDocument<Beli>;
export declare class Beli {
    no_reff: string;
    no_faktur_beli: string;
    kode_vegetables: string;
    nama_pembeli: string;
    alamat_pembeli: string;
    qty: number;
    satuan: string;
    total_harga: string;
    tanggal_beli: string;
}
export declare const BeliSchema: import("mongoose").Schema<Beli, import("mongoose").Model<Beli, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Beli>;
