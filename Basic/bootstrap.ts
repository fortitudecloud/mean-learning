import 'reflect-metadata';
import { interfaces, Controller, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { Container } from 'inversify';
import * as bodyParser from 'body-parser';
import TYPES from './constant/types';
import TAGS from './constant/tags';
import { HomeController } from './controller/home';
import { UserController } from './controller/user';
import { PlatformObjectController } from './controller/platform.object';
import { UserService } from './service/user';
import { PlatformObject } from '../PlatformAPI/class/platform.object';
import { _PlatformObjectProvider } from './provider/platformobject.provider';
import { IObjectStore, _ObjectStore } from '../PlatformAPI/object.store';
import { IObjectProvider } from '../PlatformAPI/object.provider';
import { PlatformObjectStorage } from './service/object';

// load everything needed to the Container
let container = new Container();

container.bind<interfaces.Controller>(TYPE.Controller).to(HomeController).whenTargetNamed(TAGS.HomeController);
container.bind<interfaces.Controller>(TYPE.Controller).to(UserController).whenTargetNamed(TAGS.UserController);
container.bind<interfaces.Controller>(TYPE.Controller)
  .to(PlatformObjectController).whenTargetNamed(TAGS.PlatformObjectController);

container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<IObjectProvider<PlatformObject>>(TYPES._PlatformObjectProvider).to(_PlatformObjectProvider);
container.bind<IObjectStore<PlatformObject>>(TYPES.PlatformObjectStorage).to(PlatformObjectStorage);

// start the server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let app = server.build();
app.listen(3000);
console.log('Server started on port 3000 :)');
