import { Title, Input, Button, StyledLink } from '../Home/style';

function SignIn(){
    return (
        <>
            <Title>MyWallet</Title>
            <Input placeholder="E-mail"></Input>
            <Input placeholder="Senha"></Input>
            <Button>Entrar</Button>
            <StyledLink to="/signup">Primeira vez? Cadastre-se!</StyledLink>
        </>
    );
}

export default SignIn;