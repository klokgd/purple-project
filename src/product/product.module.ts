import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { Product, ProductSchema } from './product.model/product.model';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    controllers: [ProductController],
    providers: [ProductService],
    imports: [
        MongooseModule.forFeature([
            { name: Product.name, schema: ProductSchema },
        ]),
    ],
})
export class ProductModule {}
