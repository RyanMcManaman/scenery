import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { configuration } from './config/scenery-stays.configuration'
import { validationSchema } from './config/scenery-stays.validation'
import { SceneryStaysController } from './controllers/scenery-stays.controller'
import { SceneryStaysService } from './services/scenery-stays.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
  ],
  controllers: [SceneryStaysController],
  providers: [SceneryStaysService],
  exports: [SceneryStaysService],
})
export class SceneryStaysModule {}
