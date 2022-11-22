import { StringValueObject } from "../../../shared/domain/value-object/StringValueObject";

export class DeviceNumberSerial extends StringValueObject {
    constructor(value: string) {
        super(value);
    }
}
