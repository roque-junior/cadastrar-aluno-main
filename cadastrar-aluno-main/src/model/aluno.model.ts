import { randomUUID } from "crypto";

export class Aluno {
    public id: string;

    constructor(
        public nome: string,
        public email: string,
        public senha: string,
        public tipo: "M" | "T" | "F",
    ) {
        this.id = randomUUID();
    }
}
