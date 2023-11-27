import { Injectable } from '@nestjs/common';
import { LoggerService } from './core/logger/logger.service';
import { CacheService } from './core/cache/cache.service';

@Injectable()
export class AppService {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly cacheService: CacheService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
