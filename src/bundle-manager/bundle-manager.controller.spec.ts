import { Test, TestingModule } from '@nestjs/testing';
import { BundleManagerController } from './bundle-manager.controller';
import { BundleManagerService } from './bundle-manager.service';

describe('BundleManagerController', () => {
  let controller: BundleManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BundleManagerController],
      providers: [BundleManagerService],
    }).compile();

    controller = module.get<BundleManagerController>(BundleManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
