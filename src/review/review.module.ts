import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { Review, ReviewSchema } from './review.model/review.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    controllers: [ReviewController],
    providers: [ReviewService],
    imports: [
        MongooseModule.forFeature([
            { name: Review.name, schema: ReviewSchema },
        ]),
    ],
})
export class ReviewModule {}
