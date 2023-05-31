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
exports.BuruanSaeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const buruansae_schema_1 = require("../../../schemas/masters/buruansae.schema");
let BuruanSaeService = class BuruanSaeService {
    constructor(buruanSaeModel) {
        this.buruanSaeModel = buruanSaeModel;
    }
    async getAllBuruanSae() {
        return await this.buruanSaeModel.find().exec();
    }
    async getBuruanSaeByKode(kode_buruan_sae) {
        return await this.buruanSaeModel.findOne({ kode_buruan_sae: kode_buruan_sae }).exec();
    }
    async editBuruanSaeByKode(dataBuruanSae, kode_buruan_sae) {
        await this.buruanSaeModel.updateOne({ kode_buruan_sae: kode_buruan_sae }, dataBuruanSae);
        return `Success`;
    }
    async getBuruanSaeByKelurahan(kode_kelurahan) {
        return await this.buruanSaeModel.aggregate([
            {
                $lookup: {
                    from: "kelurahans",
                    localField: "kode_kelurahan",
                    foreignField: "kode_kelurahan",
                    as: "kelurahan"
                }
            },
            {
                $unwind: "$kelurahan"
            },
            {
                $match: {
                    active_status: true,
                    kode_kelurahan: kode_kelurahan
                }
            },
        ]);
    }
    async getBuruanSae() {
        const result = await this.buruanSaeModel.aggregate([
            {
                $match: {
                    active_status: true
                }
            },
            {
                $lookup: {
                    from: "kelurahans",
                    localField: "kelurahan",
                    foreignField: "kode_kelurahan",
                    as: "kelurahan"
                }
            },
            {
                $unwind: "$kelurahan"
            },
            {
                $project: {
                    kode_buruan_sae: 1,
                    name_buruan_sae: 1,
                    location: 1,
                    kelurahan: "$kelurahan.name_kelurahan",
                    rw: 1,
                    rate: 1
                }
            }
        ]);
        return result;
    }
    async createBuruanSae(buruanSaeDto) {
        const createdBuruanSae = new this.buruanSaeModel(buruanSaeDto);
        return await createdBuruanSae.save();
    }
    async deleteBuruanSae(kode_buruan_sae) {
        const result = await this.buruanSaeModel.updateOne({ kode_buruan_sae: kode_buruan_sae }, { active_status: false });
        return `Non Actived Buruan Sae With Kode: ${kode_buruan_sae}`;
    }
    generateCode(prev) {
        let code = "";
        if (!prev) {
            code = "BS0000001";
        }
        else {
            let sliced = parseInt(prev.slice(2, 2));
            code = "BS" + String(Number(Number(prev.slice(2, 9)) + 1)).padStart(7, "0");
        }
        return code;
    }
    async getKode() {
        var _a;
        const prev = await this.buruanSaeModel.aggregate([
            {
                $match: { active_status: true }
            },
            {
                $sort: { _id: -1 }
            }
        ]);
        const kode_vegetables = this.generateCode(((_a = prev[0]) === null || _a === void 0 ? void 0 : _a.kode_buruan_sae) || null);
        return kode_vegetables;
    }
};
BuruanSaeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(buruansae_schema_1.BuruanSae.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BuruanSaeService);
exports.BuruanSaeService = BuruanSaeService;
//# sourceMappingURL=buruansae.service.js.map