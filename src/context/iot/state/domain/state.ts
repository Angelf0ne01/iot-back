import { AggregateRoot } from "@context/shared/domain/AggregateRoot";
import { StateId } from "./state-id";
import { StateValue } from "./state-value";


export class Range extends AggregateRoot {
    private constructor(private readonly id: StateId, private readonly value: StateValue) {
        super()
    }

    static create(
        id: StateId,
        value: StateValue
    ) {
        const device = new Range(id, value);
        return device;
    }

    toPrimitives(): any {
        return {
            id: this.id.value,
            value: this.value.value,
        };
    }
}