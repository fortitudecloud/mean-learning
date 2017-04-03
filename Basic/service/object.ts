import { injectable, inject } from 'inversify';
import { IObjectStore, _ObjectStore } from '../../PlatformAPI/object.store';
import { IObjectProvider } from '../../PlatformAPI/object.provider';
import { IPlatformObject, PlatformObject } from '../../PlatformAPI/class/platform.object';
import TYPES from '../constant/types';

@injectable()
export class PlatformObjectStorage extends _ObjectStore<PlatformObject> {
    
    protected objectProvider: IObjectProvider<PlatformObject>;

    constructor(@inject(TYPES._PlatformObjectProvider) objectProvider: IObjectProvider<PlatformObject>) {
        super();
        this.objectProvider = objectProvider;
    }

}