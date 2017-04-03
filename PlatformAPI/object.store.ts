import { injectable } from 'inversify';

import { IObject } from './object.interface';
import { IObjectProvider } from './object.provider';

/** core data object store */
export interface IObjectStore<T extends IObject> {
    /** writes the object to storage and returns and id */
    create(obj: T): Promise<T>;
    /** reads an object from storage */
    read(id: string): Promise<T>;
    /** read all objects from storage */
    readAll(): Promise<Array<T>>;
    /** updates an object at storage */
    update(obj: T): Promise<T>;
    /** deletes an object from storage */
    delete(obj: T): Promise<any>;
}

/**
 * Base object storage service
 */
@injectable()
export abstract class _ObjectStore<T extends IObject> implements IObjectStore<T>  {

    protected abstract objectProvider: IObjectProvider<T>;

    create(obj: T): Promise<T> {
        return this.objectProvider.insert(obj);
    }

    read(id: string): Promise<T> {
        return this.objectProvider.find(id);
    }

    readAll(): Promise<Array<T>> {
        return this.objectProvider.findAll();
    }

    update(obj: T): Promise<T> {
        return this.objectProvider.update(obj);
    }

    delete(obj: T): Promise<any> {
        return this.objectProvider.remove(obj);
    }

}