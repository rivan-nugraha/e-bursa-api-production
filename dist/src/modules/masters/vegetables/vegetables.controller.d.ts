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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { VegetablesService } from './vegetables.service';
export declare class VegetablesController {
    private readonly vegetablesService;
    constructor(vegetablesService: VegetablesService);
    getAllVegetables(): Promise<(import("mongoose").Document<unknown, any, import("../../../schemas/masters/vegetables.schema").Vegetables> & Omit<import("../../../schemas/masters/vegetables.schema").Vegetables & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getVegetablesByKode(kode: any): Promise<import("mongoose").Document<unknown, any, import("../../../schemas/masters/vegetables.schema").Vegetables> & Omit<import("../../../schemas/masters/vegetables.schema").Vegetables & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getVegetables(): Promise<any[]>;
    deleteVegetables(head: any): Promise<void>;
    createVegetables(body: any): Promise<"Re-Active Succesfull" | "Adding Vegetables Successfull">;
    editVegetables(body: any, head: any): Promise<string>;
}
