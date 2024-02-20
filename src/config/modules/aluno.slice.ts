import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Aluno } from "../../models/aluno.model";
import { realizarLogin } from "../../services/api.services";
import { LoginDTO } from "../../models/login.model";


export const realizarLoginThunk = createAsyncThunk("aluno/realizarLogin", (data: LoginDTO) =>{
    //Chamar o login na api
    return realizarLogin(data);
})


const alunoSlice = createSlice({
name: "aluno",
initialState: null as Aluno | null,
reducers: {}

});


export default alunoSlice.reducer;