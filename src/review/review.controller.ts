import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
} from '@nestjs/common';
import { Review } from './review.model/review.model';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { REVIEW_NOT_FOUND, REVIEWS_NOT_FOUND } from './review.constants';

@Controller('review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {}
    @Post('create')
    async create(@Body() dto: Omit<CreateReviewDto, '_id'>) {
        return this.reviewService.create(dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const deletedDoc = await this.reviewService.delete(id);
        if (!deletedDoc) {
            throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Delete('byProduct/:productId')
    async deleteByProductId(@Param('productId') productId: string) {
        const deletedDocs = await this.reviewService.deleteByProductId(
            productId,
        );
        if (deletedDocs.deletedCount < 1) {
            throw new HttpException(REVIEWS_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Get('byProduct/:productId')
    async getByProduct(@Param('productId') productId: string) {
        return this.reviewService.findByProductId(productId);
    }
}
