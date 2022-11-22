import { StringValueObject } from "../../../shared/domain/value-object/StringValueObject";

export class TypeDescription extends StringValueObject {
    constructor(value: string) {
        super(value);
    }
}
