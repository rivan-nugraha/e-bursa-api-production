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
import { UsersService } from './users.service';
import { iInsertUser } from './dto/insert-user.dto';
import { iGetByUsername } from './dto/getByUsername.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    insertUser(body: iInsertUser): Promise<import("mongoose").Document<unknown, any, import("../../../schemas/masters/user.schema").Users> & Omit<import("../../../schemas/masters/user.schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getUserDataById(params: iGetByUsername): Promise<import("mongoose").Document<unknown, any, import("../../../schemas/masters/user.schema").Users> & Omit<import("../../../schemas/masters/user.schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getUser(): Promise<import("mongoose").LeanDocument<import("mongoose").Document<unknown, any, import("../../../schemas/masters/user.schema").Users> & Omit<import("../../../schemas/masters/user.schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>[]>;
}
