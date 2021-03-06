import { useNavigate } from 'react-router';
import { useContext } from 'react';

import UserContext from '../../contexts/UserContext';
import { Box, Top, Header, Img, Footer, InOutButton, Text} from './style';
import Container from './Container';
import Leave from '../../assets/leave.png';
import Plus from '../../assets/plus.png';
import Minus from '../../assets/minus.png';

function Records(){
    const navigate = useNavigate();

    const { userName } = useContext(UserContext);

    function logOut(){
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <Box>
            <Top>
                <Header>Olá, {userName}</Header>
                <Img onClick={logOut}>
                    <img src={Leave} alt=""/>
                </Img>
            </Top>
            
            <Container/>

            <Footer>
                <InOutButton onClick={() => navigate('/transactions/entry')}>
                    <div>
                        <img src={Plus} alt=""/>
                    </div>
                    <Text>Nova <br/>entrada</Text>
                </InOutButton>
                <InOutButton onClick={() => navigate('/transactions/out')}>
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
