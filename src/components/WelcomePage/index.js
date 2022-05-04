import Leave from '../../assets/leave.png';
import Plus from '../../assets/plus.png';
import Minus from '../../assets/minus.png';
import { Top, Title, LogOut, Container, Footer, Transaction, Icon, Text} from './style';


function WelcomePage(){
    return (
        <>
            <Top>
                <Title>Olá, Fulano</Title>
                <img src={Leave}/>
            </Top>
            <Container>Não há registros de entrada ou saída</Container>
            <Footer>
                <Transaction>
                    <img src={Plus}/>
                    <Text>Nova entrada</Text>
                </Transaction>
                <Transaction>
                    <img src={Minus}/>
                    <Text>Nova saída</Text>
                </Transaction>
            </Footer>
        </>
    );
}

export default WelcomePage;