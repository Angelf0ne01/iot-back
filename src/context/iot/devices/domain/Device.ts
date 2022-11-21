import { AggregateRoot } from "@context/shared/domain/AggregateRoot";
import { DeviceUserId } from "./DeviceUserId";
import { DeviceId } from "./DeviceId";
import { DeviceName } from "./DeviceName";
import { DeviceIdType } from "./DeviceIdType";

export class Device extends AggregateRoot {
    readonly id: DeviceId;
    readonly name: DeviceName;
    readonly userId: DeviceUserId;
    readonly idType: DeviceIdType;
    private constructor(
      id: DeviceId,
      name: DeviceName,
      userId: DeviceUserId,
      idType: DeviceIdType
    ) {
      super();
      this.id = id;
      this.name = name;
      this.userId = userId;
      this.idType = idType;
    }
  
    static create(
      id: DeviceId,
      name: DeviceName,
      userId: DeviceUserId,
      idType: DeviceIdType
    ) {
      const device = new Device(id, name, userId, idType);
      return device;
    }

    
  
    toPrimitives(): any {
      return {
        id: this.id.value,
        name: this.name.value,
        userId: this.userId.value,
        idType: this.idType.value,
      };
    }
  }
  