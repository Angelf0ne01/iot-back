import { StringValueObject } from "@context/shared/domain/value-object/StringValueObject";

export class UserEmail extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
