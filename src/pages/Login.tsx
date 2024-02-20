import { Button, Card, Container, Grid, TextField } from "@mui/material";
import { Header } from "../components/Header";

export const Login = () => {
    return (
        <>
            <Header />
            <Container>
                <h1>Hello world</h1>

                <Card>
                    <form>
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
