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
exports.SetupController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../masters/users/users.service");
const UserMockData_1 = require("../../mock/UserMockData");
const bcrypt = require("bcrypt");
const setup_service_1 = require("./setup.service");
let SetupController = class SetupController {
    constructor(userService, setupService) {
        this.userService = userService;
        this.setupService = setupService;
    }
    async setupApplications(body, head) {
        const data = UserMockData_1.default;
        for (const index in data) {
            const getUserData = await this.userService.findByUsername({ username: data[index].username });
            if (getUserData) {
                console.log(`${data[index].username} = Existed`);
            }
            else {
                const hashedPassword = await bcrypt.hash(data[index].password, 10);
                data[index].password = hashedPassword;
                await this.userService.createUser(data[index]);
                console.log(`${data[index].username} = Added`);
            }
        }
        if (body.command === 'UPDATE') {
            const appData = {
                kode_applications: head.kode_applications,
                version: body.version,
                status: body.status,
                toko: body.toko
            };
            await this.setupService.updateApplications(appData, head.kode_applications);
            return `Update Applications Success`;
        }
        else if (body.command === 'SETUP') {
            const appData = {
                kode_applications: head.kode_applications,
                version: body.version,
                status: body.status,
                toko: body.toko
            };
            await this.setupService.createApplications(appData);
            return `Setup Applications Success`;
        }
        else {
            return `Setup User Only`;
        }
    }
    async getApplications() {
        const result = await this.setupService.find();
        return result;
    }
};
__decorate([
    (0, common_1.Post)('/app/:kode_applications'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SetupController.prototype, "setupApplications", null);
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SetupController.prototype, "getApplications", null);
SetupController = __decorate([
    (0, common_1.Controller)('setup'),
    __metadata("design:paramtypes", [users_service_1.UsersService, setup_service_1.SetupService])
], SetupController);
exports.SetupController = SetupController;
//# sourceMappingURL=setup.controller.js.map