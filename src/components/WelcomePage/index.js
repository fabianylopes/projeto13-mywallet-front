import Leave from '../../assets/leave.png';
import Plus from '../../assets/plus.png';
import Minus from '../../assets/minus.png';
import { Top, Title, LogOut, Container, Footer, Transaction, Balance, H2, Total, Date, Title, Value, InOutButton, Text} from './style';


function WelcomePage(){
    return (
        <>
            <Top>
                <Title>Olá, Fulano</Title>
                <img src={Leave}/>
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
                <InOutButton>
                    <img src={Plus}/>
                    <Text>Nova entrada</Text>
                </InOutButton>
                <InOutButton>
                    <img src={Minus}/>
                    <Text>Nova saída</Text>
                </InOutButton>
            </Footer>
        </>
    );
}

export default WelcomePage;
