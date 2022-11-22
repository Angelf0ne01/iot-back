import { StringValueObject } from "../../../shared/domain/value-object/StringValueObject";

export class DeviceName extends StringValueObject {
    constructor(value: string) {
        super(value);
    }
}
