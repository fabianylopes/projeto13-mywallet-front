import { Title, Input, Button } from './style';

function Ins(){
    return (
        <>
            <Title>Nova entrada</Title>
            <Input placeholder="Valor"></Input>
            <Input placeholder="Descrição"></Input>
            <Button>Salvar entrada</Button>
        </>
    );
}

export default Ins;