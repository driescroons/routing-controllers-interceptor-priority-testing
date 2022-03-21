import { Extra } from '@/decorators/extra.decorator';
import { User } from '@interfaces/users.interface';
import userService from '@services/users.service';
import { Action, Controller, Get, UseAfter, UseBefore, UseInterceptor } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { UseInterceptorMetadataArgs } from 'routing-controllers/types/metadata/args/UseInterceptorMetadataArgs';

@Controller()
@UseInterceptor({ priority: 50 } as UseInterceptorMetadataArgs, (action: Action, content: object) => {
  console.log('Interceptor controller prio 50');
  return content;
})
export class UsersController {
  public userService = new userService();

  @Get('/users')
  @OpenAPI({ summary: 'Return a list of users' })
  @UseBefore((req, res, next) => {
    console.log('Middleware local before second');
    next();
  })
  @UseBefore((req, res, next) => {
    console.log('Middleware local before first');
    next();
  })
  @UseAfter((req, res, next) => {
    console.log('Middleware local after second');
    next();
  })
  @UseAfter((req, res, next) => {
    console.log('Middleware local after first');
    next();
  })
  @UseInterceptor({ priority: 1 } as UseInterceptorMetadataArgs, (action: Action, content: object) => {
    console.log('Interceptor local prio 1');
    return content;
  })
  @UseInterceptor({ priority: 2 } as UseInterceptorMetadataArgs, (action: Action, content: object) => {
    console.log('Interceptor local prio 2');
    return content;
  })
  @UseInterceptor({ priority: 3 } as UseInterceptorMetadataArgs, (action: Action, content: object) => {
    console.log('Interceptor local prio 3');
    return content;
  })
  @UseInterceptor((action: Action, content: object) => {
    console.log('Interceptor local no prio');
    return content;
  })
  @Extra()
  async getUsers() {
    const findAllUsersData: User[] = await this.userService.findAllUser();
    return { data: findAllUsersData, message: 'findAll' };
  }
}
