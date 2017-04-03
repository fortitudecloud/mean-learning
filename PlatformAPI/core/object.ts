import * as core from "platform-api";

/** Base core object */
export class Object implements core.Object {
    _id: string;    
    isDeleted: boolean;
    createdDate: Date;
    modifiedDate: Date;    
}