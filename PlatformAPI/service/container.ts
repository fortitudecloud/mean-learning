import { Container as InversifyContainer, injectable } from "inversify";
import { Container as CoreContainer } from '../typing';

@injectable()
export class Container implements CoreContainer {

    private container: InversifyContainer;

    constructor() {
        this.container = new InversifyContainer();
    }

    bind<T>(type: any) {
        var value: T;
        var typeOf = (): string => {
            return typeof value;
        };

        this.container.bind<T>(typeOf()).to(type);
    }

    bindInstance<T>(instance: any) {
        var value: T;
        var typeOf = (): string => {
            return typeof value;
        };

        this.container.bind<T>(typeOf()).to(instance).inSingletonScope();
    }

    get<T>() {
        var value: T;
        var typeOf = (): string => {
            return typeof value;
        };

        this.container.get<T>(typeOf());
    }
}