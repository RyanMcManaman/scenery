import { Module } from '@nestjs/common'
import { SceneryStaysModule } from '@scenery/scenery-stays'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [SceneryStaysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
