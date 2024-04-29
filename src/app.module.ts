import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [RestaurantModule, CategoryModule, MongooseModule.forRoot('mongodb+srv://ivan:ZQQP5rcelzdyQmF5@pirafood.mebzoz2.mongodb.net/?retryWrites=true&w=majority&appName=PiraFood')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
