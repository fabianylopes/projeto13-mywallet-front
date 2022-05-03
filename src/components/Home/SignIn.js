import { Title, Input, Button, Link } from '../Home/style';

function SignIn(){
    return (
        <>
            <Title>MyWallet</Title>
            <Input placeholder="E-mail"></Input>
            <Input placeholder="Senha"></Input>
            <Button>Entrar</Button>
            <Link>Primeira vez? Cadastre-se!</Link>
        </>
    );
}

export default SignIn;