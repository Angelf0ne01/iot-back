import { TypeDescription } from "@context/iot/type/domain/type-description";
import { UserId } from "@context/iot/users/domain/UserId";
import { DeviceId } from "./devices-id";
import { DeviceName } from "./devices-name";
import { DeviceNumberSerial } from "./devices-number-serial";

export class Devices {
    constructor(
        private readonly id: DeviceId,
        private readonly name: DeviceName,
        private readonly numberSerial: DeviceNumberSerial,
        private readonly userId: UserId,
        private readonly typeId: TypeDescription
    ) { }
}
