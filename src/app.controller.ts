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

  @Post('/items/move')
  moveItem(
    @Body('sourceIndex') sourceIndex: number,
    @Body('destinationIndex') destinationIndex: number,
  ) {
    if (isNaN(sourceIndex) || isNaN(destinationIndex)) {
      throw new BadRequestException('유효하지 않은 인덱스입니다');
    }

    this.appService.move(sourceIndex, destinationIndex);
    return this.appService.find();
  }
}
