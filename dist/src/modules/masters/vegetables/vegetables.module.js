"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VegetablesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const vegetables_schema_1 = require("../../../schemas/masters/vegetables.schema");
const vegetables_controller_1 = require("./vegetables.controller");
const vegetables_service_1 = require("./vegetables.service");
let VegetablesModule = class VegetablesModule {
};
VegetablesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Vegetables', schema: vegetables_schema_1.VegetablesSchema }])],
        controllers: [vegetables_controller_1.VegetablesController],
        providers: [vegetables_service_1.VegetablesService],
    })
], VegetablesModule);
exports.VegetablesModule = VegetablesModule;
//# sourceMappingURL=vegetables.module.js.map