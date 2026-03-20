import { Test, TestingModule } from '@nestjs/testing';
import { CardsBartendersController } from './cards-bartenders.controller';

describe('CardsBartendersController', () => {
  let controller: CardsBartendersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardsBartendersController],
    }).compile();

    controller = module.get<CardsBartendersController>(
      CardsBartendersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
