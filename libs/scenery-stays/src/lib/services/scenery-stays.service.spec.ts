import { Test } from '@nestjs/testing'

import { SceneryStaysService } from './scenery-stays.service'

describe('SceneryStaysService', () => {
  let service: SceneryStaysService

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [SceneryStaysService],
    }).compile()

    service = app.get<SceneryStaysService>(SceneryStaysService)
  })

  describe('getData', () => {
    it('should return "Welcome to scenery-stays!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to scenery-stays!' })
    })
  })
})
