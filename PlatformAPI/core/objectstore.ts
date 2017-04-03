import * as core from "platform-api";

/** Object storage service */
export abstract class ObjectStore<T extends core.Object> implements core.ObjectStore<T> {
    /** Provider implementation */

    protected abstract objProvider: core.ObjectProvider<T>;

    create(obj: T): Promise<T> {
        return this.objProvider.insert(obj);
    }

    read<T>(id: string): Promise<T> {
        return this.objProvider.find<T>(id);
    }

    readAll<T>(): Promise<Array<T>> {
        return this.objProvider.findAll<T>();
    }

    update(obj: T): Promise<T> {
        return this.objProvider.update(obj);
    }

    delete(obj: T): Promise<any> {
        return this.objProvider.remove(obj);
    }
}