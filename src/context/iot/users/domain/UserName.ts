import { StringValueObject } from "@context/shared/domain/value-object/StringValueObject";

export class UserName extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
