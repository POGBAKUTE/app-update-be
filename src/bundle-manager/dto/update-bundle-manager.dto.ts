import { PartialType } from '@nestjs/mapped-types';
import { CreateBundleManagerDto } from './create-bundle-manager.dto';

export class UpdateBundleManagerDto extends PartialType(CreateBundleManagerDto) {}
