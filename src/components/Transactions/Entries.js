import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

import { Title, Input, Button, Form } from './style';

function Entries(){
    const navigate = useNavigate();

    const [newEntry, setNewEntry] = useState({});

    function handleEntry(e){
        e.preventDefault();

        const promise = axios.post('http://localhost:5000/entries', newEntry);

        promise.then(() => navigate('/records'));
        promise.catch((error) => console.log(error));
    }

    return (
        <>
            <Title>Nova entrada</Title>

            <Form onSubmit={handleEntry}>
                <Input 
                type="text" 
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
        </>
    );
}

export default Entries;
