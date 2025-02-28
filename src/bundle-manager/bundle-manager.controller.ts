import { Controller, Get, Query, OnModuleInit } from '@nestjs/common';
import { readFileSync, writeFileSync, existsSync } from 'fs';

@Controller('bundle')
export class BundleManagerController implements OnModuleInit {
  private cacheFile = 'cache.json'; // File to store data

  constructor() {
    this.loadCache(); // Load cache on startup
  }

  onModuleInit() {
    this.loadCache(); // Ensure cache is loaded on module initialization
  }

  private loadCache() {
    if (existsSync(this.cacheFile)) {
      try {
        const data = readFileSync(this.cacheFile, 'utf-8');
        Object.assign(globalVar, JSON.parse(data));
      } catch (error) {
        console.error('Failed to load cache:', error);
      }
    }
  }

  private saveCache() {
    try {
      writeFileSync(this.cacheFile, JSON.stringify(globalVar, null, 2));
    } catch (error) {
      console.error('Failed to save cache:', error);
    }
  }

  @Get()
  getInfo() {
    return { version: globalVar.version };
  }

  @Get('version')
  getInfoApp(@Query('appName') appName: string) {
    return { version: globalVar.versions[appName] || 1 };
  }

  @Get('save')
  saveVersion(@Query('version') version: string) {
    globalVar.version = version ? parseInt(version) : 0;
    this.saveCache();
    return { message: 'Version saved', version: globalVar.version };
  }

  @Get('saveVersion')
  saveVersionApp(@Query('version') version: string, @Query('appName') appName: string) {
    if (!appName) {
      return { message: 'App name is required', success: false };
    }

    if (!globalVar.versions) {
      globalVar.versions = {};
    }

    globalVar.versions[appName] = version ? parseInt(version) : 1;
    this.saveCache();

    return { message: 'Version saved', version: globalVar.versions[appName] };
  }
}

// Global variable (now loaded from a file)
const globalVar: any = {
  version: 0,
  versions: {},
};
