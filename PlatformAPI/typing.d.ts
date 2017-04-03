/**
 * Platform API Typing v.1
 */

declare module 'platform-api' {

    /** core object data */
    export interface Object {
        _id: string;
        isDeleted: boolean;
        createdDate: Date;
        modifiedDate: Date;
    }

    /** IoC container */
    export interface Container {
        /** registers service type for interface */
        bind<T>(type: any);
        /** registers object singleton */
        bindInstance<T>(instance: any);
        /** get a service for type and name */
        get<T>();
    }    

    /** core data object store */
    export interface ObjectStore<T extends Object> {
        /** writes the object to storage and returns and id */
        create(obj: T): Promise<T>;
        /** reads an object from storage */
        read<T>(id: string): Promise<T>;
        /** read all objects from storage */
        readAll<T>(): Promise<Array<T>>;
        /** updates an object at storage */
        update<T>(obj: T): Promise<T>;
        /** deletes an object from storage */
        delete<T>(obj: T): Promise<any>;
    }

    /** data provider abstraction */
    export interface ObjectProvider<T extends Object> {        
        insert(obj: T): Promise<T>;
        find<T>(id: string): Promise<T>;
        findAll<T>(): Promise<Array<T>>;
        update<T>(obj: T): Promise<T>;
        remove<T>(obj: T): Promise<any>;
    }

    /** object store transaction trigger class */
    export interface Trigger<T extends Object> {
        /** fires function before create */
        doCreate(obj: T): any;
    }

}