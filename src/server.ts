import App from '@/app';
import { UsersController } from '@controllers/users.controller';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([UsersController]);
app.listen();
