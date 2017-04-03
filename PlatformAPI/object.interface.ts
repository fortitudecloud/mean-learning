/** core object data */
export interface IObject {
    _id: string;
    isDeleted: boolean;
    createdDate: Date;
    modifiedDate: Date;
}

/**
 * Object class implementation
 */
export class Object implements IObject {
    _id: string;
    isDeleted: boolean;
    createdDate: Date;
    modifiedDate: Date;
}