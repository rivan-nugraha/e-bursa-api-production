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
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const moment = require("moment");
const mongoose_2 = require("mongoose");
const stock_schema_1 = require("../../../schemas/transaction/stock.schema");
moment.locale('id');
let StockService = class StockService {
    constructor(stockModel) {
        this.stockModel = stockModel;
    }
    async getAllStock() {
        return await this.stockModel.find().exec();
    }
    async addTransactionStock(stock) {
        const addingStock = new this.stockModel(stock);
        return await addingStock.save();
    }
    async getVegetablesReadyStock() {
        const result = await this.stockModel.aggregate([
            {
                $lookup: {
                    from: 'vegetables',
                    localField: 'kode_vegetables',
                    foreignField: 'kode_vegetables',
                    as: 'vegetables_lookup'
                },
            },
            {
                $unwind: '$vegetables_lookup'
            },
            {
                $addFields: {
                    name_vegetables: "$vegetables_lookup.name_vegetables",
                }
            }
        ]);
        return result;
    }
    async getDataStock(ref_stock) {
        const result = await this.stockModel.aggregate([
            {
                $match: {
                    ref_stock: ref_stock
                }
            },
            {
                $lookup: {
                    from: 'vegetables',
                    foreignField: 'kode_vegetables',
                    localField: 'kode_vegetables',
                    as: 'vegetables_lookup'
                },
            },
            {
                $lookup: {
                    from: 'buruansaes',
                    foreignField: 'kode_buruan_sae',
                    localField: 'kode_buruan_sae',
                    as: 'buruan_sae_lookup'
                },
            },
            {
                $unwind: '$vegetables_lookup'
            },
            {
                $unwind: '$buruan_sae_lookup'
            },
            {
                $addFields: {
                    buruan_sae: "$buruan_sae_lookup.name_buruan_sae",
                    vegetables: "$vegetables_lookup.name_vegetables",
                    no_reff: "$ref_stock",
                }
            }
        ]);
        return result;
    }
    async getLatestStockIn() {
        const result = await this.stockModel.aggregate([
            {
                $match: {
                    keterangan: "IN"
                }
            },
            {
                $sort: {
                    _id: -1
                }
            }
        ]);
        return result;
    }
    async getLatestStockOut() {
        const result = await this.stockModel.aggregate([
            {
                $match: {
                    keterangan: "OUT"
                }
            },
            {
                $sort: {
                    _id: -1
                }
            }
        ]);
        return result;
    }
    async validationStock(ref_stock) {
        const result = await this.stockModel.updateOne({ ref_stock }, { status_valid: true });
        return result;
    }
    async getStockClosedIn() {
        const result = await this.stockModel.aggregate([
            {
                $match: {
                    status_valid: false,
                    keterangan: 'IN'
                }
            },
            {
                $sort: {
                    no_reff: 1
                }
            }
        ]);
        return result;
    }
    async getStockClosedOut() {
        const result = await this.stockModel.aggregate([
            {
                $match: {
                    status_valid: false,
                    keterangan: 'OUT'
                }
            },
            {
                $sort: {
                    no_reff: 1
                }
            }
        ]);
        return result;
    }
    async getStockDataReadyAmbil(ref_stock) {
        const result = await this.stockModel.find({ ref_stock }).exec();
        return result;
    }
    async getStockReadyAmbil() {
        const result = this.stockModel.aggregate([
            {
                $match: {
                    keterangan: "IN",
                    status_valid: true,
                    status_kembali: "OPEN"
                }
            },
            {
                $sort: {
                    no_reff: 1
                }
            }
        ]);
        return result;
    }
    async updateStock(ref_stock, status_kembali) {
        return await this.stockModel.updateOne({ ref_stock: ref_stock }, { status_kembali: status_kembali });
    }
    async getStockBarang() {
        const result = this.stockModel.aggregate([
            {
                $match: {
                    status_valid: true,
                }
            },
            {
                $lookup: {
                    from: 'vegetables',
                    localField: 'kode_vegetables',
                    foreignField: 'kode_vegetables',
                    as: 'vegetables'
                }
            },
            {
                $unwind: {
                    path: '$vegetables',
                    preserveNullAndEmptyArrays: true,
                }
            },
            {
                $group: {
                    _id: "$kode_vegetables",
                    price: { $first: "$vegetables.price" },
                    name_vegetables: { $first: "$vegetables.name_vegetables" },
                    stock_in: { $sum: "$stock_in" },
                    stock_out: { $sum: "$stock_out" },
                }
            },
            {
                $sort: {
                    _id: 1,
                }
            }
        ]);
        return result;
    }
    async generateCode(prev, kode_buruan_sae, kode_vegetables) {
        let code = "";
        if (prev.length <= 0) {
            const date = moment().format('L');
            const dateSplited = date.split('/');
            const getRomanNumber = this.convertToRoman(Number(dateSplited[1]));
            code = "01/Tmbh-Stck-" + kode_buruan_sae + "/E-Brs/" + kode_vegetables + "/" + getRomanNumber + "/" + dateSplited[2];
        }
        else {
            const splitedCode = prev[0].ref_stock.split('/');
            const newNumber = String(Number(splitedCode[0]) + 1).padStart(2, '0');
            const date = moment().format('L');
            const dateSplited = date.split('/');
            const getRomanNumber = this.convertToRoman(Number(dateSplited[1]));
            code = newNumber + "/Tmbh-Stck-" + kode_buruan_sae + "/E-Brs/" + kode_vegetables + "/" + getRomanNumber + "/" + dateSplited[2];
        }
        return code;
    }
    async generateCodeForTaking(prev, kode_buruan_sae, kode_vegetables) {
        let code = "";
        if (prev.length <= 0) {
            const date = moment().format('L');
            const dateSplited = date.split('/');
            const getRomanNumber = this.convertToRoman(Number(dateSplited[1]));
            code = "01/Ambl-Stck-" + kode_buruan_sae + "/E-Brs/" + kode_vegetables + "/" + getRomanNumber + "/" + dateSplited[2];
        }
        else {
            const splitedCode = prev[0].ref_stock.split('/');
            const newNumber = String(Number(splitedCode[0]) + 1).padStart(2, '0');
            const date = moment().format('L');
            const dateSplited = date.split('/');
            const getRomanNumber = this.convertToRoman(Number(dateSplited[1]));
            code = newNumber + "/Ambl-Stck-" + kode_buruan_sae + "/E-Brs/" + kode_vegetables + "/" + getRomanNumber + "/" + dateSplited[2];
        }
        return code;
    }
    convertToRoman(num) {
        var roman = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
        var str = '';
        for (var i of Object.keys(roman)) {
            var q = Math.floor(num / roman[i]);
            num -= q * roman[i];
            str += i.repeat(q);
        }
        return str;
    }
    async fixingStructure() {
        const result = await this.stockModel.updateMany({ status_valid: { $exists: false } }, { status_valid: false });
        return result;
    }
};
StockService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(stock_schema_1.Stock.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StockService);
exports.StockService = StockService;
//# sourceMappingURL=stock.service.js.map