import { Module } from '@nestjs/common'
import { SceneryHealthController } from './controllers/scenery-health.controller'
import { SceneryHealthService } from './services/scenery-health.service'

@Module({
  controllers: [SceneryHealthController],
  providers: [SceneryHealthService],
  exports: [],
})
export class SceneryHealthModule {}
