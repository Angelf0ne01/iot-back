import { NumberValueObject } from "@context/shared/domain/value-object/IntValueObject";

export class StateValue extends NumberValueObject {
    constructor(value: number) {
        super(value);
    }
}
