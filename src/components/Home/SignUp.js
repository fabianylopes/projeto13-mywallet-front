import { Title, Input, Button, StyledLink } from '../Home/style';

function SignUp(){
    return (
        <>
            <Title>MyWallet</Title>
            <Input placeholder="Nome"></Input>
            <Input placeholder="E-mail"></Input>
            <Input placeholder="Senha"></Input>
            <Input placeholder="Confirme a senha"></Input>
            <Button>Cadastrar</Button>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </>
    );
}

export default SignUp;