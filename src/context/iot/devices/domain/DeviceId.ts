// import { StringValueObject } from "@context/shared/domain/value-object/StringValueObject";

// export class DeviceId extends StringValueObject {
//   constructor(value: string) {
//     super(value);
//   }
// }

import { Uuid } from "@context/shared/domain/value-object/Uuid";

export class TypeId extends Uuid { }