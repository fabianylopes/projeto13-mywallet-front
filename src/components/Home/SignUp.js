import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Container, Title, Input, Button, Form, StyledLink } from '../Home/style';
import api from '../../services/api';

function SignUp(){
    const navigate = useNavigate();

    const [formInfo, setFormInfo] = useState({})

    function handleSignUp(e){
        e.preventDefault();

        if(formInfo.password !== formInfo.confirmPassword){
            alert('As senhas devem ser iguais');
            return;
        }

        const userData = {...formInfo}
        delete userData.confirmPassword;

        api.singnUp(userData).then(() => navigate('/sign-in')).catch(handleFailure);   
    }

    function handleFailure(error){
        alert(`${error}!\nPreencha os campos corretamente!`);
        setFormInfo({});
    }

    return (
        <Container>
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

                <Input 
                type="password"
                placeholder="Confirme a senha"
                value={formInfo.confirmPassword || ''} 
                onChange={e => setFormInfo({...formInfo, confirmPassword: e.target.value})} 
                required
                >
                </Input>
                <Button type="submit">Cadastrar</Button>
            </Form>

            <StyledLink to="/sign-in">Já tem uma conta? Entre agora!</StyledLink>
        </Container>
    );
}

export default SignUp;