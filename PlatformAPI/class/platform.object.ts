import { IObject, Object } from '../object.interface';

/**
 * Platform object interface
 */
export interface IPlatformObject extends IObject {
    name: string;
    description: string;    
}

/**
 * Platform object
 */
export class PlatformObject extends Object implements IPlatformObject {
    name: string;
    description: string;
}
