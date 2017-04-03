import * as core from "platform-api";

/** Trigger object persistence */
export abstract class Trigger<T extends core.Object> implements core.Trigger<T> {

    abstract doCreate(obj: T): any;

}