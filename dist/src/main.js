"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("dotenv/config");
const swagger_1 = require("@nestjs/swagger");
const helmet_1 = require("helmet");
const ip = require("ip");
const corsOptions = {
    origin: true,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
    optionSuccessStatus: 200
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.setGlobalPrefix('api/v1');
    app.use((0, helmet_1.default)());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('E-Bursa')
        .setDescription('API of E-Bursa')
        .setVersion('1.0')
        .build();
    const options = {
        deepScanRoutes: true,
    };
    const document = swagger_1.SwaggerModule.createDocument(app, config, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT, () => {
        console.log(`Server Running on: ${ip.address()}:${process.env.PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map