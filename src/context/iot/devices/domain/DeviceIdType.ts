import { StringValueObject } from "@context/shared/domain/value-object/StringValueObject";

export class DeviceIdType extends StringValueObject {
    constructor(value: string) {
      super(value);
    }
  }
  