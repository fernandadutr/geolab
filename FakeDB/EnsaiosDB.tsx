
export interface Ensaio {
    id: number;
    nome: string;
    data: Date;
    concluidos: Array<string>;
}

const EnsaiosDB: Array<Ensaio> = [
    {   id: 1,
        nome: 'Ensaio 1',
        data: new Date('2023-09-27'),
        concluidos: ['Teor de Umidade']
    },
    {   id: 2,
        nome: 'Ensaio Marajoara',
        data: new Date('2023-07-02'),
        concluidos: ['Teor de Umidade']
    }

]


export default EnsaiosDB;