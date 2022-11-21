import { NumberValueObject } from "@context/shared/domain/value-object/IntValueObject";

export class RangeMax extends NumberValueObject {
    constructor(value: number) {
        super(value);
    }
}
