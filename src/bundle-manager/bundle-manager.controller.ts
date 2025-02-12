import { Controller, Get } from '@nestjs/common';
import { BundleManagerService } from './bundle-manager.service';

@Controller('bundle')
export class BundleManagerController {
  constructor(private readonly bundleManagerService: BundleManagerService) {}

  @Get()
  getInfo() {
    return { version: 1 };
  }
}
