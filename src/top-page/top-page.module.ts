import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { TopPageService } from './top-page.service';
import { TopPage, TopPageSchema } from './top-page.model/top-page.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    controllers: [TopPageController],
    providers: [TopPageService],
    imports: [
        MongooseModule.forFeature([
            { name: TopPage.name, schema: TopPageSchema },
        ]),
    ],
})
export class TopPageModule {}
