import { injectable } from 'inversify';
import { IObject } from '../../PlatformAPI/object.interface';
import { IObjectProvider } from '../../PlatformAPI/object.provider';

@injectable()
export abstract class _ObjectProvider<T extends IObject> implements IObjectProvider<T> {
    
    protected abstract objectStorage: T[];    

    insert(obj: T): Promise<T> {
        return new Promise<T>((res, rej) => {
            try {
                obj._id = obj._id || this.objectStorage.length.toString();
                obj.createdDate = new Date();
                obj.isDeleted = false;
                obj.modifiedDate = new Date();

                this.objectStorage.push(obj);
                res(obj);
            }catch (err) {
                rej(err);
            }
        });
    }

    find(id: string): Promise<T> {
        return new Promise<T>((res, rej) => {
            try {
                this.objectStorage.map(_obj => {
                    if(_obj._id === id) res(_obj);
                });
            } catch (err) {
                rej(err);
            }
        });
    }

    findAll(): Promise<Array<T>> {
        return new Promise<Array<T>>((res, rej) => {
            res(this.objectStorage);
        });
    }

    update(obj: T): Promise<T> {        
        return new Promise<T>((res, rej) => {
            var found = false;
            var idx;
            this.objectStorage.map((_obj, index) => {
                if(_obj._id === obj._id) {
                    found = true;
                    idx = index;                    
                }
            });
            if(found) {
                this.objectStorage[idx] = obj;
                res(obj);
            }
            else rej(false);
        });
    }

    remove(obj: T): Promise<any> {
        return new Promise<any>((res, rej) => {
            var found = false;
            let tempStorage: T[] = [];
            this.objectStorage.map((_obj, index) => {
                if(_obj._id === obj._id) {
                    found = true;                    
                } else {
                    tempStorage.push(_obj);
                }
            });
            if(found) {
                this.objectStorage = tempStorage;
                res(true);
            } else {
                rej(false);
            }
        });
    }

}