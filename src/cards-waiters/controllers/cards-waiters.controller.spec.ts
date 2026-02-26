import { Test, TestingModule } from '@nestjs/testing';
import { CardsWaitersController } from './cards-waiters.controller';

describe('CardsWaitersController', () => {
  let controller: CardsWaitersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardsWaitersController],
    }).compile();

    controller = module.get<CardsWaitersController>(CardsWaitersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
