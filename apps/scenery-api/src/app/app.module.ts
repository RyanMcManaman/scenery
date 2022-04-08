import { Module } from '@nestjs/common'
import { SceneryStaysModule } from '@scenery/scenery-stays'

@Module({
  imports: [SceneryStaysModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
