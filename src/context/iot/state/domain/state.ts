import { StateId } from "./state-id";
import { StateValue } from "./state-value";


export class Range {
    constructor(private readonly id: StateId, private readonly value: StateValue) {

    }
}