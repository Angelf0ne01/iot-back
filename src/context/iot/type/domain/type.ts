import { AggregateRoot } from "@context/shared/domain/AggregateRoot";
import { TypeDescription } from "./type-description";
import { TypeId } from "./type-id";

export class Type extends AggregateRoot {

    private constructor(private readonly id: TypeId, private readonly description: TypeDescription) {
        super()
    }

    static create(id: TypeId, description: TypeDescription) {
        const type = new Type(id, description);
        return type;
    }

    toPrimitives() {
        return {
            id: this.id.value,
            description: this.description.value,
        }
    }
}