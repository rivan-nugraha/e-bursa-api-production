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
exports.BuruansaeController = void 0;
const common_1 = require("@nestjs/common");
const buruansae_service_1 = require("./buruansae.service");
let BuruansaeController = class BuruansaeController {
    constructor(buruansaeService) {
        this.buruansaeService = buruansaeService;
    }
    async getAllBuruanSae() {
        return await this.buruansaeService.getAllBuruanSae();
    }
    async createBuruanSae(body) {
        const kode_buruan_sae = await this.buruansaeService.getKode();
        console.log("Get Buruan Sae :", kode_buruan_sae);
        const check = await this.buruansaeService.getBuruanSaeByKode(kode_buruan_sae);
        console.log(check);
        if (check) {
            const buruanSaeData = {
                name_buruan_sae: body.name_buruan_sae,
                location: body.location,
                kelurahan: body.kelurahan,
                rw: body.rw,
                rate: 0,
                active_status: true
            };
            await this.buruansaeService.editBuruanSaeByKode(buruanSaeData, kode_buruan_sae);
            return `Success Re-Active ${kode_buruan_sae}`;
        }
        else {
            const buruanSaeData = {
                kode_buruan_sae: kode_buruan_sae,
                name_buruan_sae: body.name_buruan_sae,
                location: body.location,
                kelurahan: body.kelurahan,
                rw: body.rw,
                rate: 0,
                active_status: true
            };
            await this.buruansaeService.createBuruanSae(buruanSaeData);
            return `Success Add ${buruanSaeData.name_buruan_sae}`;
        }
    }
    async getBuruanSae() {
        return await this.buruansaeService.getBuruanSae();
    }
    async deleteBuruanSae(head) {
        await this.buruansaeService.deleteBuruanSae(head.kode_buruan_sae);
        return `Success Delete ${head.kode_buruan_sae}`;
    }
    async checkNextKode() {
        return await this.buruansaeService.getKode();
    }
    async editBuruanSae(body, head) {
        const buruanSaeData = {
            name_buruan_sae: body.name_buruan_sae,
            location: body.location,
            kelurahan: body.kelurahan,
            rw: body.rw,
            rate: 0,
            active_status: true
        };
        await this.buruansaeService.editBuruanSaeByKode(buruanSaeData, head.kode_buruan_sae);
        return `Success Edit ${buruanSaeData.name_buruan_sae}`;
    }
    async getBuruanSaeByKode(head) {
        return await this.buruansaeService.getBuruanSaeByKode(head.kode_buruan_sae);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BuruansaeController.prototype, "getAllBuruanSae", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BuruansaeController.prototype, "createBuruanSae", null);
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BuruansaeController.prototype, "getBuruanSae", null);
__decorate([
    (0, common_1.Delete)('/:kode_buruan_sae'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BuruansaeController.prototype, "deleteBuruanSae", null);
__decorate([
    (0, common_1.Get)('/check'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BuruansaeController.prototype, "checkNextKode", null);
__decorate([
    (0, common_1.Put)('/edit/:kode_buruan_sae'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BuruansaeController.prototype, "editBuruanSae", null);
__decorate([
    (0, common_1.Get)('/:kode_buruan_sae'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BuruansaeController.prototype, "getBuruanSaeByKode", null);
BuruansaeController = __decorate([
    (0, common_1.Controller)('buruan-sae'),
    __metadata("design:paramtypes", [buruansae_service_1.BuruanSaeService])
], BuruansaeController);
exports.BuruansaeController = BuruansaeController;
//# sourceMappingURL=buruansae.controller.js.map