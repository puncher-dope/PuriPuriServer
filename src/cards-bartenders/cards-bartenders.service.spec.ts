import { Test, TestingModule } from '@nestjs/testing';
import { CardsBartendersService } from './cards-bartenders.service';

describe('CardsBartendersService', () => {
  let service: CardsBartendersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardsBartendersService],
    }).compile();

    service = module.get<CardsBartendersService>(CardsBartendersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
