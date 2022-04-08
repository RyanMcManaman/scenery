import { Test } from '@nestjs/testing'

import { SceneryHealthService } from './scenery-health.service'

describe('SceneryStaysService', () => {
  let service: SceneryHealthService

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [SceneryHealthService],
    }).compile()

    service = app.get<SceneryHealthService>(SceneryHealthService)
  })

  describe('getData', () => {
    it('should return "✅ Scenery API is running!', () => {
      expect(service.smokeTest()).toEqual({ message: '✅ Scenery API is running!' })
    })
  })
})
