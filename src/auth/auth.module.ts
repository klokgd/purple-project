import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Auth, AuthSchema } from './auth.model/auth.model';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    ],
})
export class AuthModule {}
