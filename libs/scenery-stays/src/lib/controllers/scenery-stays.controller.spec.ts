import { Test, TestingModule } from '@nestjs/testing'
import { SceneryStaysService } from '../services/scenery-stays.service'
import { SceneryStaysController } from './scenery-stays.controller'

describe('AppController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [SceneryStaysController],
      providers: [SceneryStaysService],
    }).compile()
  })

  describe('getData', () => {
    it('should return "Welcome to scenery-api!"', () => {
      const appController = app.get<SceneryStaysController>(SceneryStaysController)
      expect(appController.getData()).toEqual({ message: 'Welcome to scenery-api!' })
    })
  })
})
