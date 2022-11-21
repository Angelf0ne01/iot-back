import { TypeDescription } from "./type-description";
import { TypeId } from "./type-id";

export class Type {
    constructor(private readonly typeId: TypeId, private readonly typeDescription: TypeDescription) { }
}