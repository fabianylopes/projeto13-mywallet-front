import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Container, Title, Input, Button, StyledLink, Form } from '../Home/style';
import UserContext from '../../contexts/UserContext';
import api from '../../services/api';

function SignIn(){
    const navigate = useNavigate();

    const { token, setToken, setUserName } = useContext(UserContext);

    const [formInfo, setFormInfo] = useState({});

    useEffect(() => {
        if(token){
          navigate('/records');
        }
    }, [token]); // eslint-disable-line react-hooks/exhaustive-deps
    
    function handleSignIn(e){
        e.preventDefault();

        api.singnIn(formInfo).then(handleSuccess).catch(handleFailure)
    }

    function handleSuccess(response){
        setToken(response.data.token);
        setUserName(response.data.name);
        
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', response.data.name);
    }

    function handleFailure(error){
        alert(`${error}!\nPreencha os campos corretamente!`);
        setFormInfo({});
      }


    return (
        <Container>
            <Title>MyWallet</Title>
            <Form onSubmit={handleSignIn}>
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

                <Button type="submit">Entrar</Button>
            </Form>
            <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    );
}

export default SignIn;