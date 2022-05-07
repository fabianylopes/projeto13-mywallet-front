import { Title, Input, Button, Form, StyledLink } from '../Home/style';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

function SignUp(){
    const navigate = useNavigate();

    const [formInfo, setFormInfo] = useState({})


    function handleSignUp(e){
        e.preventDefault();

        const promise = axios.post('http://localhost:5000/sign-up', formInfo);

        promise.then(() => navigate('/sign-in'));
        promise.catch((error) => console.log(error));

    }

    return (
        <>
            <Title>MyWallet</Title>

            <Form onSubmit={handleSignUp}>
                <Input 
                type="text"
                placeholder="Nome"
                value={formInfo.name || ''} 
                onChange={e => setFormInfo({...formInfo, name: e.target.value})} 
                required
                >
                </Input>

                <Input 
                type="email" 
                placeholder="E-mail" 
                value={formInfo.email || ''} 
                onChange={e => setFormInfo({...formInfo, email: e.target.value})} 
                required
                >
                </Input>

                <Input 
                type="password"
                placeholder="Senha"
                value={formInfo.password || ''} 
                onChange={e => setFormInfo({...formInfo, password: e.target.value})} 
                required
                >
                </Input>

                {/* <Input placeholder="Confirme a senha"></Input> */}
                <Button type="submit">Cadastrar</Button>
            </Form>

            <StyledLink to="/sign-in">Já tem uma conta? Entre agora!</StyledLink>
        </>
    );
}

export default SignUp;