import axios from 'axios';
import { Aluno } from '../model/aluno.model';


export const api = axios.create({
    baseURL: 'https://tubular-starlight-9884d8.netlify.app',
});

export async function criarAluno(id: string) {
    try {
        const result = await api.post(`/aluno/${id}`);
        return result.data as Aluno;

    } catch (error: any) {
        alert(error.toString());
        console.log(error);
        return null;
    }
}