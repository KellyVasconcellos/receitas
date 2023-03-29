import { IIngredientes } from "./ingredientes";

export interface IReceitas {
    id: number,
    nome: string,
    tempo_de_preparo: string,
    rendimento: string,
    avaliacao: number,
    resumo: string,
    icone: string,
    ingredientes: Array<IIngredientes>,
    modo_preparo: Array<IIngredientes>
}
  
