import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { CategoryModule } from './category/category.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [RestaurantModule, CategoryModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
