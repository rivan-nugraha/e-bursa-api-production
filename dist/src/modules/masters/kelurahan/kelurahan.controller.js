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
exports.KelurahanController = void 0;
const common_1 = require("@nestjs/common");
const kelurahan_service_1 = require("./kelurahan.service");
let KelurahanController = class KelurahanController {
    constructor(kelurahanService) {
        this.kelurahanService = kelurahanService;
    }
    async getAllKelurahan() {
        return await this.kelurahanService.getAllKelurahan();
    }
    async createKelurahan(body) {
        const kode_kelurahan = await this.kelurahanService.getKode();
        const checker = await this.kelurahanService.getLatestKelurahan(kode_kelurahan);
        if (checker) {
            const kelurahanData = {
                name_kelurahan: body.name_kelurahan,
                location: body.location,
                active_status: true
            };
            await this.kelurahanService.editKelurahan(kelurahanData, kode_kelurahan);
            return `Berhasil Re-Active ${kode_kelurahan}`;
        }
        else {
            const kelurahanData = {
                kode_kelurahan: kode_kelurahan,
                name_kelurahan: body.name_kelurahan,
                location: body.location,
                active_status: true,
            };
            const result = await this.kelurahanService.createKelurahan(kelurahanData);
            return result;
        }
    }
    async editKelurahan(head, body) {
        const kelurahanData = {
            name_kelurahan: body.name_kelurahan,
            location: body.location
        };
        const result = await this.kelurahanService.editKelurahan(kelurahanData, head.kode_kelurahan);
        return result;
    }
    async getKelurahan() {
        return await this.kelurahanService.getKelurahan();
    }
    async getKelurahanById(head) {
        return await this.kelurahanService.getKelurahanByKode(head.kode_kelurahan);
    }
    async deleteKelurahan(head) {
        return await this.kelurahanService.deleteKelurahan(head.kode_kelurahan);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KelurahanController.prototype, "getAllKelurahan", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KelurahanController.prototype, "createKelurahan", null);
__decorate([
    (0, common_1.Put)('/edit/:kode_kelurahan'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], KelurahanController.prototype, "editKelurahan", null);
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KelurahanController.prototype, "getKelurahan", null);
__decorate([
    (0, common_1.Get)('/:kode_kelurahan'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KelurahanController.prototype, "getKelurahanById", null);
__decorate([
    (0, common_1.Delete)('/:kode_kelurahan'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KelurahanController.prototype, "deleteKelurahan", null);
KelurahanController = __decorate([
    (0, common_1.Controller)('kelurahan'),
    __metadata("design:paramtypes", [kelurahan_service_1.KelurahanService])
], KelurahanController);
exports.KelurahanController = KelurahanController;
//# sourceMappingURL=kelurahan.controller.js.map