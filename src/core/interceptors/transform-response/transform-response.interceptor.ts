import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((response) => {
        if (!response) {
          return {
            data: [],
          };
        }
        if (response.data && response.metadata) {
          return {
            data: response.data,
            metadata: response.metadata,
          };
        }

        return { data: response };
      }),
    );
  }
}
