import { injectable } from 'inversify';

import { IObject } from './object.interface';

/** data provider abstraction */
export interface IObjectProvider<T extends IObject> {        
    insert(obj: T): Promise<T>;
    find(id: string): Promise<T>;
    findAll(): Promise<Array<T>>;
    update(obj: T): Promise<T>;
    remove(obj: T): Promise<any>;
}