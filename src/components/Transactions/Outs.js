import { useNavigate } from 'react-router';
import { useState, useContext } from 'react';

import { Container, Title, Input, Button, Form } from './style';
import UserContext from '../../contexts/UserContext';
import api from '../../services/api';

function Outs(){
    const navigate = useNavigate();
    const { token } = useContext(UserContext);

    const [newOut, setNewOut] = useState({});

    function handleOuts(e){
        e.preventDefault();

        api.addOut(newOut, token).then(() => navigate('/records')).catch((error) => console.log(error));
    }

    return (
        <Container>
            <Title>Nova saída</Title>
            <Form onSubmit={handleOuts}>
                <Input 
                type="text" 
                placeholder="Valor" 
                value={newOut.value || ''} 
                onChange={e => setNewOut({...newOut, value: e.target.value})} 
                required
                >
                </Input>

                <Input 
                type="text"
                placeholder="Descrição"
                value={newOut.description || ''} 
                onChange={e => setNewOut({...newOut, description: e.target.value})} 
                required
                >
                </Input>

                <Button type="submit">Salvar saída</Button>
            </Form>
        </Container>
    );
}

export default Outs;