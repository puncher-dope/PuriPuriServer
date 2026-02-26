import { Test, TestingModule } from '@nestjs/testing';
import { CardsWaitersService } from './cards-waiters.service';

describe('CardsWaitersService', () => {
  let service: CardsWaitersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardsWaitersService],
    }).compile();

    service = module.get<CardsWaitersService>(CardsWaitersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
