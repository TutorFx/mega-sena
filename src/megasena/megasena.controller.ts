import { Controller, Get, HttpCode } from '@nestjs/common';
import { MegasenaService } from './megasena.service';

@Controller()
export class MegasenaController {
  constructor(private readonly megasenaService: MegasenaService) {}
  @HttpCode(200)
  @Get('megasena/')
  getMegasena() {
    this.megasenaService.getMegasena();
    return this.megasenaService.getUsecase();
  }
}
