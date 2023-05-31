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
exports.StockController = void 0;
const common_1 = require("@nestjs/common");
const stock_service_1 = require("./stock.service");
let StockController = class StockController {
    constructor(stockServices) {
        this.stockServices = stockServices;
    }
    async getStockBarang() {
        try {
            const result = await this.stockServices.getStockBarang();
            return result;
        }
        catch (error) {
            throw new Error(`Error Server: ${error}`);
        }
    }
    async getStockClosedIn() {
        try {
            const result = await this.stockServices.getStockClosedIn();
            return result;
        }
        catch (error) {
            throw new Error(`Error Server: ${error}`);
        }
    }
    async getStockClosedOut() {
        try {
            const result = await this.stockServices.getStockClosedOut();
            return result;
        }
        catch (error) {
            throw new Error(`Error Server: ${error}`);
        }
    }
    async getStockDataReadyAmbil(body) {
        try {
            const response = await this.stockServices.getStockDataReadyAmbil(body.ref_stock);
            return { message: "Berhasil Ambil Data Stock", response };
        }
        catch (error) {
            throw new Error(`Error Server: ${error}`);
        }
    }
    async getStockReadyAmbil() {
        try {
            const result = await this.stockServices.getStockReadyAmbil();
            return result;
        }
        catch (error) {
            throw new Error(`Error Server: ${error}`);
        }
    }
    async validationStock(body) {
        try {
            await this.stockServices.validationStock(body.ref_stock);
            return `Validasi Berhasil`;
        }
        catch (error) {
            throw new Error(`Error Server: ${error}`);
        }
    }
    async getVegetablesReadyStock() {
        try {
            const result = await this.stockServices.getVegetablesReadyStock();
            return result;
        }
        catch (error) {
            throw new Error(`Error Server: ${error}`);
        }
    }
    async addStockBarang(body) {
        try {
            const prev = await this.stockServices.getLatestStockIn();
            const getKode = await this.stockServices.generateCode(prev, body.kode_buruan_sae, body.kode_vegetables);
            const data = {
                ref_stock: getKode,
                kode_buruan_sae: body.kode_buruan_sae,
                kode_vegetables: body.kode_vegetables,
                keterangan: 'IN',
                stock_in: body.stock_in,
                status_valid: false,
                status_kembali: "OPEN",
                stock_out: 0,
                tanggal: new Date()
            };
            await this.stockServices.addTransactionStock(data);
            const getDataBukti = await this.stockServices.getDataStock(data.ref_stock);
            return { message: `Tambah Stock Berhasil`, getDataBukti };
        }
        catch (error) {
            throw new Error(`Error Server: ${error}`);
        }
    }
    async takeStockBarang(body) {
        try {
            const prev = await this.stockServices.getLatestStockOut();
            const getKode = await this.stockServices.generateCodeForTaking(prev, body.kode_buruan_sae, body.kode_vegetables);
            const data = {
                ref_stock: getKode,
                kode_buruan_sae: body.kode_buruan_sae,
                kode_vegetables: body.kode_vegetables,
                keterangan: 'OUT',
                status_valid: false,
                status_kembali: "OPEN",
                stock_in: 0,
                stock_out: body.stock_out,
                tanggal: new Date()
            };
            await this.stockServices.addTransactionStock(data);
            await this.stockServices.updateStock(body.no_reff, "CANC");
            const getDataBukti = await this.stockServices.getDataStock(data.ref_stock);
            return { message: `Ambil Stock Berhasil`, getDataBukti };
        }
        catch (error) {
            throw new Error(`Error Server: ${error}`);
        }
    }
    async fixingStructure() {
        try {
            const result = await this.stockServices.fixingStructure();
            return result;
        }
        catch (error) {
            throw new Error(`Error Server: ${error}`);
        }
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getStockBarang", null);
__decorate([
    (0, common_1.Get)('/closed/in'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getStockClosedIn", null);
__decorate([
    (0, common_1.Get)('/closed/out'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getStockClosedOut", null);
__decorate([
    (0, common_1.Post)('/ready-ambil-with-reff'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getStockDataReadyAmbil", null);
__decorate([
    (0, common_1.Get)('/ready-ambil'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getStockReadyAmbil", null);
__decorate([
    (0, common_1.Put)('/validasi'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "validationStock", null);
__decorate([
    (0, common_1.Get)('/ready/jual'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getVegetablesReadyStock", null);
__decorate([
    (0, common_1.Post)('/tambah-stock'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "addStockBarang", null);
__decorate([
    (0, common_1.Post)('/ambil-stock'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "takeStockBarang", null);
__decorate([
    (0, common_1.Post)('/fixing-structure'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockController.prototype, "fixingStructure", null);
StockController = __decorate([
    (0, common_1.Controller)('stock'),
    __metadata("design:paramtypes", [stock_service_1.StockService])
], StockController);
exports.StockController = StockController;
//# sourceMappingURL=stock.controller.js.map