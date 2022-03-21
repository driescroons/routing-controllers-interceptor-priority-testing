import { NextFunction, Request, Response } from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'after', priority: Infinity })
export class AfterInfinityMiddleware implements ExpressMiddlewareInterface {
  use(request: Request, response: Response, next: NextFunction): void {
    console.log('Global after Infinity');
    next();
  }
}

@Middleware({ type: 'after', priority: -Infinity })
export class AfterNegativeInfinityMiddleware implements ExpressMiddlewareInterface {
  use(request: Request, response: Response, next: NextFunction): void {
    console.log('Global after -Infinity');
    next();
  }
}
