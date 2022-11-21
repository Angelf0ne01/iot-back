import { TypeDescription } from "@context/iot/type/domain/type-description";
import { UserId } from "@context/iot/users/domain/UserId";
import { AggregateRoot } from "@context/shared/domain/AggregateRoot";
import { DeviceId } from "./devices-id";
import { DeviceName } from "./devices-name";
import { DeviceNumberSerial } from "./devices-number-serial";

export class Device extends AggregateRoot {

    private constructor(
        private readonly id: DeviceId,
        private readonly name: DeviceName,
        private readonly numberSerial: DeviceNumberSerial,
        private readonly userId: UserId,
        private readonly typeId: TypeDescription
    ) {
        super();
    }


    static create(
        id: DeviceId,
        name: DeviceName,
        numberSerial: DeviceNumberSerial,
        userId: UserId,
        typeId: TypeDescription
    ) {
        const device = new Device(id, name, numberSerial, userId, typeId);
        return device;
    }

    toPrimitives(): any {
        return {
            id: this.id.value,
            name: this.name.value,
            numberSerial: this.numberSerial.value,
            userId: this.userId.value,
            typeId: this.typeId.value,
        };
    }
}
