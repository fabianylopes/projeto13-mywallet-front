import { useNavigate } from 'react-router';
import { useContext } from 'react';

import UserContext from '../../contexts/UserContext';
import Leave from '../../assets/leave.png';
import Plus from '../../assets/plus.png';
import Minus from '../../assets/minus.png';
import { Box, Top, Header, Img, Footer, InOutButton, Text} from './style';
import Container from './Container';

function Records(){
    const navigate = useNavigate();

    const { userInfo } = useContext(UserContext);

    return (
        <Box>
            <Top>
                <Header>Olá, {userInfo.name}</Header>
                <Img>
                    <img src={Leave} alt=""/>
                </Img>
            </Top>
            
            <Container/>

            <Footer>
                <InOutButton onClick={() => navigate('/entries')}>
                    <div>
                        <img src={Plus} alt=""/>
                    </div>
                    <Text>Nova <br/>entrada</Text>
                </InOutButton>
                <InOutButton onClick={() => navigate('/outs')}>
                    <div>
                        <img src={Minus} alt=""/>
                    </div>
                    <Text>Nova <br/>saída</Text>
                </InOutButton>
            </Footer>
        </Box>
    );
}

export default Records;
