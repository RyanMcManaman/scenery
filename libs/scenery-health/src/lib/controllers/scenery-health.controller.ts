import { Controller, Get } from '@nestjs/common'
import { SceneryHealthService } from '../services/scenery-health.service'

@Controller()
export class SceneryHealthController {
  constructor(private readonly healthService: SceneryHealthService) {}

  @Get('/smoke')
  getData() {
    return this.healthService.smokeTest()
  }
}
