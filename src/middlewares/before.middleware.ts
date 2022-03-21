import { NextFunction, Request, Response } from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'before', priority: Infinity })
export class BeforeMiddleware implements ExpressMiddlewareInterface {
  use(request: Request, response: Response, next: NextFunction): void {
    console.log('Global before Infinity');
    next();
  }
}

@Middleware({ type: 'before', priority: -Infinity })
export class BeforeNotInfinityMiddleware implements ExpressMiddlewareInterface {
  use(request: Request, response: Response, next: NextFunction): void {
    console.log('Global before -Infinity');
    next();
  }
}
