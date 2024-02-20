import { Button, Card, Container, Grid, TextField } from "@mui/material";
import { Header } from "../components/Header";
import { LoginDTO } from "../models/login.model";
import { useAppDispatch } from "../config/hooks";
import { realizarLoginThunk } from "../config/modules/aluno.slice";

export const Login = () => {

    const dispatch = useAppDispatch()

    const submeterLogin = (event: any) => {
        event.preventDefault();
        
        const data: LoginDTO = {
            email: event.target.email.value,
            senha: event.target.senha.value
        }

       dispatch(realizarLoginThunk(data));

    }
    return (
        <>
            <Header />
            <Container>
                <h1>Hello world</h1>

                <Card>
                    <form onSubmit={submeterLogin}>
                        <Grid container spacing={2} padding={2}>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth name="E-mail" label="E-mail" type="email"/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField fullWidth name="Senha" label="Senha" type="password"/>
                            </Grid>
                        </Grid>
                        <Grid  item xs={12}>
                            <Button type="submit" variant="contained">
                                Realizar Login
                            </Button>
                        </Grid>
                    </form>
                </Card>
            </Container>
        </>
    );
};
