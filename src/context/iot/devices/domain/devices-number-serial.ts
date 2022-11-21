import { StringValueObject } from "@context/shared/domain/value-object/StringValueObject";

export class DeviceNumberSerial extends StringValueObject {
    constructor(value: string) {
        super(value);
    }
}
