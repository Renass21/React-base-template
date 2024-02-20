import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Aluno } from "../../models/aluno.model";
import { realizarLogin } from "../../services/api.services";
import { LoginDTO } from "../../models/login.model";


export const realizarLoginThunk = createAsyncThunk("aluno/realizarLogin", (data: LoginDTO) =>{
    //Chamar o login na api
    return realizarLogin(data);
});


const alunoSlice = createSlice({
    name: "aluno",
    initialState: null as Aluno | null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(realizarLoginThunk.pending, (state, action)  => {
            console.log(action);
            return null;
        });

        builder.addCase(realizarLoginThunk.fulfilled, (state, action) => {
            console.log(action);
            return action.payload;
        });

        builder.addCase(realizarLoginThunk.rejected, (state, action)  => {
            console.log(action);
            return null;
        });
        

    },
});


export default alunoSlice.reducer;