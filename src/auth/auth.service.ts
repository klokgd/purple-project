import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from './auth.model/auth.model';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Auth.name) private authModel: Model<AuthDocument>,
    ) {}

    async getByEmail(email: string) {
        return this.authModel.findOne({ email });
    }

    async createAuth({ email, password }: { email: string; password: string }) {
        const passwordHash = password;
        const newAuth = new this.authModel({ email, passwordHash });
        return newAuth.save();
    }
}
