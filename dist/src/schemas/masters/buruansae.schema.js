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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuruanSaeSchema = exports.BuruanSae = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let BuruanSae = class BuruanSae {
};
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], BuruanSae.prototype, "kode_buruan_sae", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], BuruanSae.prototype, "name_buruan_sae", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], BuruanSae.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], BuruanSae.prototype, "kelurahan", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], BuruanSae.prototype, "rw", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], BuruanSae.prototype, "rate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], BuruanSae.prototype, "active_status", void 0);
BuruanSae = __decorate([
    (0, mongoose_1.Schema)()
], BuruanSae);
exports.BuruanSae = BuruanSae;
exports.BuruanSaeSchema = mongoose_1.SchemaFactory.createForClass(BuruanSae);
//# sourceMappingURL=buruansae.schema.js.map