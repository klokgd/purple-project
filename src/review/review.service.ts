import { Inject, Injectable } from '@nestjs/common';
import { Review, ReviewDocument } from './review.model/review.model';
import { CreateReviewDto } from './dto/create-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document, Types } from 'mongoose';

@Injectable()
export class ReviewService {
    constructor(
        @InjectModel(Review.name)
        private readonly reviewModel: Model<ReviewDocument>,
    ) {}
    async create(dto: CreateReviewDto) {
        const newReview = new this.reviewModel({
            ...dto,
            productId: new Types.ObjectId(dto.productId),
        });
        return newReview.save();
    }
    async delete(id: string) {
        return this.reviewModel.findByIdAndDelete(id).exec();
    }
    async findByProductId(productId: string) {
        return this.reviewModel
            .find({ productId: new Types.ObjectId(productId) })
            .exec();
    }
    async deleteByProductId(productId: string) {
        return this.reviewModel
            .deleteMany({
                productId: new Types.ObjectId(productId),
            })
            .exec();
    }
}
