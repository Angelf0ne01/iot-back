import { StringValueObject } from "@context/shared/domain/value-object/StringValueObject";

export class DeviceUserId extends StringValueObject {
    constructor(value: string) {
      super(value);
    }
  }
  