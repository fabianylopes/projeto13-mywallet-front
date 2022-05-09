import { useNavigate } from 'react-router';
import { useState, useContext } from 'react';

import { Container, Title, Input, Button, Form } from './style';
import UserContext from '../../contexts/UserContext';
import api from '../../services/api';

function Entries(){
    const navigate = useNavigate();
    const { token } = useContext(UserContext);

    const [newEntry, setNewEntry] = useState({type: 'entry'});

    function handleEntry(e){
        e.preventDefault();

        api.addEntry(newEntry, token).then(() => navigate('/records')).catch((error) => console.log(error));
    }

    return (
        <Container>
            <Title>Nova entrada</Title>
            <Form onSubmit={handleEntry}>
                <Input 
                type="number" 
                placeholder="Valor" 
                value={newEntry.value || ''} 
                onChange={e => setNewEntry({...newEntry, value: e.target.value})} 
                required
                >
                </Input>

                <Input 
                type="text"
                placeholder="Descrição"
                value={newEntry.description || ''} 
                onChange={e => setNewEntry({...newEntry, description: e.target.value})} 
                required
                >
                </Input>

                <Button type="submit">Salvar entrada</Button>
            </Form>
        </Container>
    );
}

export default Entries;
