import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;

// export class AuthModel {
//     email: string;
//     passwordHash: string;
// }

@Schema()
export class Auth {
    // @Prop()
    // _id?: string;

    @Prop({ required: true, unique: true, index: true })
    email: string;

    @Prop({ required: true })
    passwordHash: string;

    @Prop()
    createdAt?: Date;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
