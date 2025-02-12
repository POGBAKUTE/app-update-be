import { Module } from '@nestjs/common';
import { BundleManagerService } from './bundle-manager.service';
import { BundleManagerController } from './bundle-manager.controller';

@Module({
  controllers: [BundleManagerController],
  providers: [BundleManagerService],
})
export class BundleManagerModule {}
