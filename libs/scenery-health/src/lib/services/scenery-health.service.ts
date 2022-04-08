import { Injectable } from '@nestjs/common'

@Injectable()
export class SceneryHealthService {
  smokeTest(): { message: string } {
    return { message: '✅ Scenery API is running!' }
  }
}
