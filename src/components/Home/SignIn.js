import { Title, Input, Button, StyledLink, Form } from '../Home/style';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';

function SignIn(){
    const navigate = useNavigate();

    const { token, setToken, setUserInfo } = useContext(UserContext);

    const [formInfo, setFormInfo] = useState({});

    useEffect(() => {
        if(token){
          navigate('/records');
        }
    }, [token]); // eslint-disable-line react-hooks/exhaustive-deps
    
    function handleSignIn(e){
        e.preventDefault();

        const promise = axios.post('http://localhost:5000/sign-in', formInfo);

        promise.then(handleSuccess);
        promise.catch((error) => console.log(error));
    }

    function handleSuccess(response){
        setToken(response.data.token);
        setUserInfo(response.data);
   
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userInfo', JSON.stringify(response.data));
    }

    return (
        <>
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
        </>
    );
}

export default SignIn;