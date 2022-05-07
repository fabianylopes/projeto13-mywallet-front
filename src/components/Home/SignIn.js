import { Title, Input, Button, StyledLink, Form } from '../Home/style';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';

function SignIn(){
    const navigate = useNavigate();

    const { setToken } = useContext(UserContext);

    const [login, setLogin] = useState({});
    
    function handleSignIn(e){
        e.preventDefault();

        const promise = axios.post('http://localhost:5000/sign-in', login);

        promise.then(handleSuccess);
        promise.catch((error) => console.log(error));
    }

    function handleSuccess(response){
        setToken(response.data.token);
        navigate('/records');
    }

    return (
        <>
            <Title>MyWallet</Title>
            <Form onSubmit={handleSignIn}>
                <Input 
                type="email" 
                placeholder="E-mail" 
                value={login.email || ''} 
                onChange={e => setLogin({...login, email: e.target.value})} 
                required
                >
                </Input>

                <Input 
                type="password"
                placeholder="Senha"
                value={login.password || ''} 
                onChange={e => setLogin({...login, password: e.target.value})} 
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