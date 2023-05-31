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
exports.KelurahanService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const kelurahan_schema_1 = require("../../../schemas/masters/kelurahan.schema");
let KelurahanService = class KelurahanService {
    constructor(kelurahanModel) {
        this.kelurahanModel = kelurahanModel;
    }
    async getAllKelurahan() {
        return await this.kelurahanModel.find().exec();
    }
    async createKelurahan(kelurahanData) {
        const createdKelurahan = new this.kelurahanModel(kelurahanData);
        return await createdKelurahan.save();
    }
    async getKelurahan() {
        const result = await this.kelurahanModel.aggregate([
            {
                $match: {
                    active_status: true
                }
            }
        ]);
        return result;
    }
    async editKelurahan(kelurahanData, kode_kelurahan) {
        await this.kelurahanModel.updateOne({ kode_kelurahan: kode_kelurahan }, kelurahanData);
        return `Berhasil Edit Kelurahan ${kode_kelurahan}`;
    }
    async getLatestKelurahan(kode_kelurahan) {
        const result = await this.kelurahanModel.find({ kode_kelurahan });
        return result;
    }
    async getKelurahanByKode(kode_kelurahan) {
        const result = await this.kelurahanModel.findOne({ kode_kelurahan });
        return result;
    }
    async deleteKelurahan(kode_kelurahan) {
        await this.kelurahanModel.updateOne({ kode_kelurahan: kode_kelurahan }, { active_status: false });
        return `Un-Active Kelurahan Success`;
    }
    generateCode(prev) {
        let code = "";
        if (!prev) {
            code = "K0000001";
        }
        else {
            let sliced = parseInt(prev.slice(1, 9));
            code = "K" + String(Number(Number(prev.slice(1, 9)) + 1)).padStart(7, "0");
        }
        return code;
    }
    async getKode() {
        var _a;
        const prev = await this.kelurahanModel.aggregate([
            {
                $match: { active_status: true }
            }, {
                $sort: { _id: -1 }
            }
        ]);
        const kode_kelurahan = this.generateCode(((_a = prev[0]) === null || _a === void 0 ? void 0 : _a.kode_kelurahan) || null);
        return kode_kelurahan;
    }
};
KelurahanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(kelurahan_schema_1.Kelurahan.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], KelurahanService);
exports.KelurahanService = KelurahanService;
//# sourceMappingURL=kelurahan.service.js.map