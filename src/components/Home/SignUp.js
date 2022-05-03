import { Title, Input, Button, Link } from '../Home/style';

function SignUp(){
    return (
        <>
            <Title>MyWallet</Title>
            <Input placeholder="Nome"></Input>
            <Input placeholder="E-mail"></Input>
            <Input placeholder="Senha"></Input>
            <Input placeholder="Confirme a senha"></Input>
            <Button>Cadastrar</Button>
            <Link>Já tem uma conta? Entre agora!</Link>
        </>
    );
}

export default SignUp;