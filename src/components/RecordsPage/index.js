import { useNavigate } from 'react-router';

import Leave from '../../assets/leave.png';
import Plus from '../../assets/plus.png';
import Minus from '../../assets/minus.png';
import { Top, Header, Container, Footer, Transaction, Balance, H2, Total, Date, Title, Value, InOutButton, Text} from './style';


function RecordsPage(){
    const navigate = useNavigate();

    return (
        <>
            <Top>
                <Header>Olá, Fulano</Header>
                <img src={Leave} alt=""/>
            </Top>
            <Container>
                <Transaction>
                    <Date>30/11</Date>
                    <Title>Almoço mãe</Title>
                    <Value>39,90</Value>
                </Transaction>
                <Balance>
                    <H2>SALDO</H2>
                    <Total>30/11</Total>
                </Balance>
            </Container>
            <Footer>
                <InOutButton onClick={() => navigate('/entries')}>
                    <img src={Plus} alt=""/>
                    <Text>Nova entrada</Text>
                </InOutButton>
                <InOutButton onClick={() => navigate('/outs')}>
                    <img src={Minus} alt=""/>
                    <Text>Nova saída</Text>
                </InOutButton>
            </Footer>
        </>
    );
}

export default RecordsPage;
