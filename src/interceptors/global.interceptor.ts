import { Action, Interceptor, InterceptorInterface } from 'routing-controllers';

@Interceptor({ priority: 100 })
export class NameCorrectionInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    console.log('Interceptor: Global', 100);
    return content;
  }
}

@Interceptor({ priority: Infinity })
export class OtherNameCorrectionInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    console.log('Interceptor: Global', Infinity);
    return content;
  }
}
