import { UseInterceptor } from 'routing-controllers';
import { UseInterceptorMetadataArgs } from 'routing-controllers/types/metadata/args/UseInterceptorMetadataArgs';

export const Extra = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    return UseInterceptor({ priority: 5 } as UseInterceptorMetadataArgs, (action: any, result: any) => {
      console.log('Interceptor other file prio 5');
      return result;
    })(target, propertyKey, descriptor);
  };
};
