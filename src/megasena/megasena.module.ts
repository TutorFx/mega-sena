import { MegasenaService } from './megasena.service';
import { Module } from '@nestjs/common';
import { MegasenaController } from './megasena.controller';

@Module({
  imports: [],
  controllers: [MegasenaController],
  providers: [MegasenaService],
})
export class MegasenaModule {}
