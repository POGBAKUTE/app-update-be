import { Test, TestingModule } from '@nestjs/testing';
import { BundleManagerService } from './bundle-manager.service';

describe('BundleManagerService', () => {
  let service: BundleManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BundleManagerService],
    }).compile();

    service = module.get<BundleManagerService>(BundleManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
