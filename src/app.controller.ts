import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('items')
  getItems() {
    return this.appService.find();
  }

  @Post('items')
  addItem(@Body('data') data: string) {
    if (!data) {
      throw new BadRequestException('데이터가 필요합니다.');
    }
    this.appService.insert(data);
    return this.appService.find();
  }

  @Post('items/move')
  moveItem(@Body('itemId') itemId: number, @Body('whereId') whereId: number) {
    if (
      isNaN(itemId) ||
      isNaN(whereId) ||
      whereId < 0 ||
      whereId >= this.appService.items.length
    ) {
      throw new BadRequestException(
        '유효하지 않은 데이터 또는 인덱스 값입니다.',
      );
    }

    this.appService.move(itemId, whereId);
    return this.appService.find();
  }
}
