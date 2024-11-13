
import { GenericModel } from "./GenericModel";
import { Unidade } from "./Unidade";

export class Curso extends GenericModel {
    unidades: Unidade[];

    constructor(id: number, nome: string, unidades: Unidade[]) {
        super(id, nome);
        this.unidades = unidades;
    }
}
