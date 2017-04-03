import { injectable } from 'inversify';
import { IPlatformObject, PlatformObject } from '../../PlatformAPI/class/platform.object';
import { IObjectProvider } from '../../PlatformAPI/object.provider';

import { _ObjectProvider } from './object.provider';

@injectable()
export class _PlatformObjectProvider extends _ObjectProvider<PlatformObject> {   

    protected objectStorage: PlatformObject[] = [<PlatformObject>{
        _id: "1",
        isDeleted: false,
        createdDate: new Date(2017, 1, 1),
        modifiedDate: new Date(2017, 1, 1),
        name: "Package",
        description: "Packages of service and product offerings"
    }, <PlatformObject>{
        _id: "2",
        isDeleted: false,
        createdDate: new Date(2017, 1, 1),
        modifiedDate: new Date(2017, 1, 1),
        name: "Vendor",
        description: "Vendor of services and products"
    }];

}