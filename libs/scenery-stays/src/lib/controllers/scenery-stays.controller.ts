import { Controller, Get } from '@nestjs/common'
import { SceneryStaysService } from '../services/scenery-stays.service'

@Controller()
export class SceneryStaysController {
  constructor(private readonly appService: SceneryStaysService) {}

  @Get('/stay')
  getData() {
    return this.appService.getData()
  }
}
