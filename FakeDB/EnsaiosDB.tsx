
export interface Ensaio {
    id: number;
    nome: string;
    data: Date;
    concluidos: Array<string>;
    usuario: string;
}

const EnsaiosDB: Array<Ensaio> = [
    {   id: 1,
        nome: 'Ensaio 1',
        data: new Date('2023-09-27'),
        concluidos: ['Teor de Umidade'],
        usuario:  'Zezinho'
    },
    {   id: 2,
        nome: 'Ensaio Marajoara',
        data: new Date('2023-07-02'),
        concluidos: ['Teor de Umidade'],
        usuario: 'Kimberly'
    }

]


export default EnsaiosDB;