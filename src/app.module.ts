import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
// const config = new ConfigService();
// const mongoString = getMongoString(config);

const getMongoString = (config: ConfigService) => {
    const login = config.get<string>('MONGO_LOGIN');
    const password = config.get<string>('MONGO_PASSWORD');
    const host = config.get<string>('MONGO_HOST', 'localhost');
    const port = config.get<string>('MONGO_PORT', '27017');
    const authDatabase = config.get<string>('MONGO_AUTHDATABASE', 'admin');

    if (login && password) {
        return `mongodb://${login}:${password}@${host}:${port}/${authDatabase}`;
    } else {
        return `mongodb://${host}:${port}/${authDatabase}`;
    }
};

@Module({
    imports: [
        // ConfigModule.forRoot(),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => {
                const uri = getMongoString(configService);
                return {
                    uri: uri,
                    // useCreateIndex: true,
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                };
            },
            inject: [ConfigService],
        }),
        AuthModule,
        TopPageModule,
        ProductModule,
        ReviewModule,
        // DatabaseModule,
        ConfigModule.forRoot(),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
