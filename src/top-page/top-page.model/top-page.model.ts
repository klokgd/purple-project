import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Produtcs,
}

class hhData {
    @Prop()
    count: number;

    @Prop()
    juniorSalary: number;

    @Prop()
    middleSalary: number;

    @Prop()
    seniorSalary: number;
}

class pageAdvantage {
    @Prop()
    title: string;

    @Prop()
    description: string;
}

@Schema()
export class TopPage {
    // @Prop()
    // _id: string;
    @Prop({ type: String, enum: TopLevelCategory })
    firstLevelCategory: TopLevelCategory;

    @Prop()
    secondCategory: string;

    @Prop({ unique: true })
    alias: string;

    @Prop()
    title: string;

    @Prop()
    category: string;

    @Prop()
    hh?: hhData;

    @Prop([pageAdvantage])
    advantages: [];

    @Prop()
    seoText: string;

    @Prop()
    tagsTitle: string;

    @Prop([String])
    tags: string[];
}

export type TopPageDocument = HydratedDocument<TopPage>;

export const TopPageSchema = SchemaFactory.createForClass(TopPage);
