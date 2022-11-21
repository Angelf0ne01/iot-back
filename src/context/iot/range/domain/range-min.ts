import { NumberValueObject } from "@context/shared/domain/value-object/IntValueObject";

export class RangeMin extends NumberValueObject {
    constructor(value: number) {
        super(value);
    }
}
