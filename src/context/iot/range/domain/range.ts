import { AggregateRoot } from "@context/shared/domain/AggregateRoot";
import { RangeId } from "./range-id";
import { RangeMax } from "./range-max";
import { RangeMin } from "./range-min";

export class Range extends AggregateRoot {

    private constructor(private readonly id: RangeId, private readonly max: RangeMax, private readonly min: RangeMin) {
        super()
    }

    static create(
        id: RangeId, max: RangeMax, min: RangeMin
    ) {
        const range = new Range(id, max, min);
        return range;
    }


    toPrimitives(): any {
        return {
            id: this.id.value,
            max: this.max.value,
            min: this.min.value,
        };
    }

}