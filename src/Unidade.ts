
import { GenericModel } from "./GenericModel";
import { Aula } from "./Aula";

export class Unidade extends GenericModel {
    ativo: boolean;
    aulas: Aula[];

    constructor(id: number, nome: string, ativo: boolean, aulas: Aula[]) {
        super(id, nome);
        this.ativo = ativo;
        this.aulas = aulas;
    }
}
