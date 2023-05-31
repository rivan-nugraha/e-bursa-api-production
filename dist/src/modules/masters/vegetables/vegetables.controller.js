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
exports.VegetablesController = void 0;
const common_1 = require("@nestjs/common");
const vegetables_service_1 = require("./vegetables.service");
let VegetablesController = class VegetablesController {
    constructor(vegetablesService) {
        this.vegetablesService = vegetablesService;
    }
    async getAllVegetables() {
        return await this.vegetablesService.getAllVegetables();
    }
    async getVegetablesByKode(kode) {
        return await this.vegetablesService.getVegetablesByKode(kode);
    }
    async getVegetables() {
        return await this.vegetablesService.getVegetables();
    }
    async deleteVegetables(head) {
        try {
            await this.vegetablesService.deleteVegetables(head.kode_vegetables);
        }
        catch (e) {
            throw new Error("Error During Deleting Data");
        }
    }
    async createVegetables(body) {
        try {
            const kode_vegetables = await this.vegetablesService.getKode();
            const check = await this.vegetablesService.getVegetablesByLatest(kode_vegetables);
            if (check.length > 0) {
                const vegetablesData = {
                    name_vegetables: body.name_vegetables,
                    price: body.price,
                    img_url: body.img_url,
                    input_by: "SYSTEM",
                    input_date: Date.now(),
                    active_status: true
                };
                await this.vegetablesService.editVegetablesByKode(vegetablesData, kode_vegetables);
                return `Re-Active Succesfull`;
            }
            else {
                const vegetablesData = {
                    kode_vegetables: kode_vegetables,
                    name_vegetables: body.name_vegetables,
                    price: body.price,
                    img_url: body.img_url,
                    input_by: "SYSTEM",
                    input_date: Date.now(),
                    active_status: true
                };
                await this.vegetablesService.createVegetables(vegetablesData);
                return `Adding Vegetables Successfull`;
            }
        }
        catch (e) {
            throw new Error(`Error During Adding New Vegetables Because : ${e}`);
        }
    }
    async editVegetables(body, head) {
        const data = {
            name_vegetables: body.name_vegetables,
            price: body.price,
            img_url: body.img_url,
        };
        await this.vegetablesService.editVegetablesByKode(data, head.kode_vegetables);
        return `Edit ${head.kode_vegetables} Success`;
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VegetablesController.prototype, "getAllVegetables", null);
__decorate([
    (0, common_1.Get)('/:kode_vegetables'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VegetablesController.prototype, "getVegetablesByKode", null);
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VegetablesController.prototype, "getVegetables", null);
__decorate([
    (0, common_1.Delete)('/:kode_vegetables'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VegetablesController.prototype, "deleteVegetables", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VegetablesController.prototype, "createVegetables", null);
__decorate([
    (0, common_1.Put)('/edit/:kode_vegetables'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VegetablesController.prototype, "editVegetables", null);
VegetablesController = __decorate([
    (0, common_1.Controller)('vegetables'),
    __metadata("design:paramtypes", [vegetables_service_1.VegetablesService])
], VegetablesController);
exports.VegetablesController = VegetablesController;
//# sourceMappingURL=vegetables.controller.js.map