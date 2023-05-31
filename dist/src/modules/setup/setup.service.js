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
exports.SetupService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const applications_schema_1 = require("../../schemas/applications.schema");
let SetupService = class SetupService {
    constructor(applicationsModel) {
        this.applicationsModel = applicationsModel;
    }
    async findOne(kode_applications) {
        return await this.applicationsModel.findOne({ kode_applications });
    }
    async createApplications(appData) {
        const createdApplications = new this.applicationsModel(appData);
        return await createdApplications.save();
    }
    async updateApplications(appData, kode_applications) {
        return await this.applicationsModel.updateOne({ kode_applications }, appData);
    }
    async find() {
        const result = await this.applicationsModel.find();
        return result[0];
    }
};
SetupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(applications_schema_1.Applications.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SetupService);
exports.SetupService = SetupService;
//# sourceMappingURL=setup.service.js.map