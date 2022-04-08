import { Injectable } from '@nestjs/common'

@Injectable()
export class SceneryStaysService {
  getData(): { message: string } {
    return { message: 'Welcome to scenery-stays!' }
  }
}
