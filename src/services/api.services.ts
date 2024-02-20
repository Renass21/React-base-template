import axios from "axios"
import { LoginDTO } from "../models/login.model";
import { Aluno } from "../models/aluno.model";


const api = axios.create({
    baseURL: "http://localhost:3335"
});

export async function realizarLogin(data: LoginDTO) {
    try {
    //1- entrada

    //2 - processamento
    const result = await api.post("/login", data)
    //3 - saida
        return result.data.data as Aluno;

    } catch (error: any) {
        console.log(error);
        alert(error.toString());
        return null;
    }
}
