import { Title, Input, Button } from './style';

function Outs(){
    return (
        <>
            <Title>Nova saída</Title>
            <Input placeholder="Valor"></Input>
            <Input placeholder="Descrição"></Input>
            <Button>Salvar saída</Button>
        </>
    );
}

export default Outs;