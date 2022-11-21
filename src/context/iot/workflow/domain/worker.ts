import { DeviceId } from "@context/iot/devices/domain/devices-id";
import { RangeId } from "@context/iot/range/domain/range-id";
import { StateId } from "@context/iot/state/domain/state-id";
import { UserId } from "@context/iot/users/domain/UserId";
import { AggregateRoot } from "@context/shared/domain/AggregateRoot";
import { WorkerId } from "./worker-id";

export class Worker extends AggregateRoot {
  private constructor(
    private readonly id: WorkerId,
    private readonly userId: UserId,
    private readonly stateId: StateId,
    private readonly rangeId: RangeId,
    private readonly outputId: DeviceId,
    private readonly inputId: DeviceId
  ) {
    super()
  }
  static create(
    id: WorkerId,
    userId: UserId,
    stateId: StateId,
    rangeId: RangeId,
    outputId: DeviceId,
    inputId: DeviceId
  ) {

    const worker = new Worker(id,
      userId,
      stateId,
      rangeId,
      outputId,
      inputId,
    )

    return worker;
  }


  toPrimitives() {
    return {
      id: this.id.value,
      userId: this.userId.value,
      stateId: this.stateId.value,
      rangeId: this.rangeId.value,
      outputId: this.outputId.value,
      inputId: this.inputId.value,
    }
  }

}
