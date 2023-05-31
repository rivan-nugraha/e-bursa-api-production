"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VegetablesService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const vegetables_schema_1 = require("../../../schemas/masters/vegetables.schema");
let VegetablesService = class VegetablesService {
    constructor(vegetablesModel) {
        this.vegetablesModel = vegetablesModel;
    }
    async getAllVegetables() {
        return await this.vegetablesModel.find().exec();
    }
    async createVegetables(vegetablesData) {
        const createdVegetables = new this.vegetablesModel(vegetablesData);
        return await createdVegetables.save();
    }
    async getVegetablesByKode(kode_vegetables) {
        const result = await this.vegetablesModel.findOne(kode_vegetables);
        return result;
    }
    async deleteVegetables(kode_vegetables) {
        const result = await this.vegetablesModel.updateOne({ kode_vegetables: kode_vegetables }, { active_status: false });
        return result;
    }
    async editVegetablesByKode(dataVegetables, kode_vegetables) {
        const result = await this.vegetablesModel.updateOne({ kode_vegetables: kode_vegetables }, dataVegetables);
        return result;
    }
    async getVegetablesByLatest(kode_vegetables) {
        const result = await this.vegetablesModel.aggregate([
            {
                $match: {
                    kode_vegetables: kode_vegetables
                }
            }
        ]);
        return result;
    }
    async getVegetables() {
        const result = await this.vegetablesModel.aggregate([
            {
                $match: {
                    active_status: true
                }
            }
        ]);
        return result;
    }
    generateCode(prev) {
        let code = "";
        if (!prev) {
            code = "V0000001";
        }
        else {
            let sliced = parseInt(prev.slice(1, 9));
            code = "V" + String(Number(Number(prev.slice(1, 9)) + 1)).padStart(7, "0");
        }
        return code;
    }
    async getKode() {
        var _a;
        const prev = await this.vegetablesModel.aggregate([
            {
                $match: { active_status: true }
            },
            {
                $sort: { _id: -1 }
            }
        ]);
        const kode_vegetables = this.generateCode(((_a = prev[0]) === null || _a === void 0 ? void 0 : _a.kode_vegetables) || null);
        return kode_vegetables;
    }
};
VegetablesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(vegetables_schema_1.Vegetables.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], VegetablesService);
exports.VegetablesService = VegetablesService;
//# sourceMappingURL=vegetables.service.js.map