import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class BundleManagerService {
  private readonly bundleDir = path.join(__dirname, '../../bundles'); // Folder for ZIP files

  getBundleInfo() {
    const filePath = path.join(this.bundleDir, 'bundle.zip');
    if (!fs.existsSync(filePath)) {
      return { error: 'Bundle not found' };
    }

    const stats = fs.statSync(filePath);
    return {
      fileName: 'bundle.zip',
      size: stats.size, // in bytes
      lastModified: stats.mtime,
    };
  }

  getBundleFilePath(): string {
    return path.join(this.bundleDir, 'bundle.zip');
  }
}
