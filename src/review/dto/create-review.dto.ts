import { Product } from 'src/product/product.model/product.model';

export class CreateReviewDto {
    email: string;
    name: string;
    title: string;
    description: string;
    raiting: number;
    productId: string;
}
