import { Module } from '@nestjs/common'
import { SceneryHealthModule } from '@scenery/scenery-health'
import { SceneryStaysModule } from '@scenery/scenery-stays'

@Module({
  imports: [SceneryStaysModule, SceneryHealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
