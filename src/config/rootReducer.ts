import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import alunoSlice from "./modules/aluno.slice";

const combinedReducers = combineReducers({
    aluno: alunoSlice,
});

export const persistedReducers = persistReducer(
    {
        key: "root",
        storage,
    },
    combinedReducers
);
