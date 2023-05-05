import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MSchema } from 'mongoose';
import { Product } from 'src/product/product.model/product.model';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {
    // @Prop({ type: MSchema.Types.ObjectId })
    // _id?: string;

    @Prop({ required: true, unique: true, index: true })
    email: string;

    @Prop()
    name: string;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    raiting: number;

    @Prop()
    createdAt?: Date;

    @Prop({ type: MSchema.Types.ObjectId, ref: Product.name })
    productId: Product;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
