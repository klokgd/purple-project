import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;
class ProductCharacteristic {
    @Prop()
    name: string;

    @Prop()
    value: string;
}

@Schema()
export class Product {
    // @Prop()
    // _id: string;

    @Prop()
    image: string;

    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    oldPrice: number;

    @Prop()
    credit: number;

    @Prop()
    calculatedRaiting: number;

    @Prop()
    description: string;

    @Prop()
    advantages: string;

    @Prop()
    disAdvantages: string;

    @Prop([String])
    categories: string[];

    @Prop([String])
    tags: string[];

    @Prop([ProductCharacteristic])
    characteristics: ProductCharacteristic[];

    @Prop()
    createdAt?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
