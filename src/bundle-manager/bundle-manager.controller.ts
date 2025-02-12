import { Controller, Get, Query } from '@nestjs/common';
import { BundleManagerService } from './bundle-manager.service';

@Controller('bundle')
export class BundleManagerController {
  constructor(private readonly bundleManagerService: BundleManagerService) {}

  @Get()
  getInfo() {
    return { version: globalVar.version };
  }

  @Get('save')
  saveVersion(@Query('version') version: string) {
    globalVar.version = version ? parseInt(version) : 0;
    return { message: 'Version saved', version: globalVar.version };
  }
}

const globalVar = {
  version: 0,
};
