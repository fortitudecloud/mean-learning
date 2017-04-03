import { IObject } from './object.interface';

/** object store transaction trigger class */
export interface ITrigger<T extends IObject> {
    /** fires function before create */
    doCreate(obj: T): any;
}