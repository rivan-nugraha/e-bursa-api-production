"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modules = void 0;
const common_1 = require("@nestjs/common");
const vegetables_module_1 = require("./masters/vegetables/vegetables.module");
const buruansae_module_1 = require("./masters/buruansae/buruansae.module");
const users_module_1 = require("./masters/users/users.module");
const beli_module_1 = require("./transaction/beli/beli.module");
const stock_module_1 = require("./transaction/stock/stock.module");
const jual_module_1 = require("./transaction/jual/jual.module");
const kelurahan_module_1 = require("./masters/kelurahan/kelurahan.module");
const auth_module_1 = require("./auth/auth.module");
const event_module_1 = require("./transaction/event/event.module");
let Modules = class Modules {
};
Modules = __decorate([
    (0, common_1.Module)({
        imports: [
            vegetables_module_1.VegetablesModule,
            buruansae_module_1.BuruanSaeModule,
            users_module_1.UsersModule,
            beli_module_1.BeliModule,
            stock_module_1.StockModule,
            jual_module_1.JualModule,
            kelurahan_module_1.KelurahanModule,
            auth_module_1.AuthModule,
            event_module_1.EventModule,
        ],
    })
], Modules);
exports.Modules = Modules;
//# sourceMappingURL=modules.js.map