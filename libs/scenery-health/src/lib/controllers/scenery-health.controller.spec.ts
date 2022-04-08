import { Test, TestingModule } from '@nestjs/testing'
import { SceneryHealthService } from '../services/scenery-health.service'
import { SceneryHealthController } from './scenery-health.controller'

describe('AppController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [SceneryHealthController],
      providers: [SceneryHealthService],
    }).compile()
  })

  describe('getData', () => {
    it('should return "✅ Scenery API is running!"', () => {
      const appController = app.get<SceneryHealthController>(SceneryHealthController)
      expect(appController.getData()).toEqual({ message: '✅ Scenery API is running!' })
    })
  })
})
