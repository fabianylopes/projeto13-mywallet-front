import { useState, useContext, useEffect } from 'react';

import { Teste, Transactions, Transaction, Description, Balance, H2, Total, Date, Title, Value } from './style';
import UserContext from '../../contexts/UserContext';
import api from '../../services/api';

function Container(){
    
    const { token } = useContext(UserContext);

    const [records, setRecords] = useState([]);
    const [balance, setBalance] = useState(0);

    
    function getTransactions(){
        api.getRecords(token).then(handleSuccess).catch((error) => console.log(error));
    }
    
    function handleSuccess(response){
        setRecords(response.data.records);
        setBalance(response.data.sum);
    }
    
    useEffect(() => getTransactions(), [token]); // eslint-disable-line react-hooks/exhaustive-deps

    if(records.length === 0){
        return (
            <Transactions>Não há registros de<br/>entrada ou saída</Transactions>
        );
    }

    return (
        <Transactions>
            <Teste>

                {records.map((a, i) => {
                    return (
                        <Transaction key={i}>
                            <Description>
                                <Date>{a.date}</Date>
                                <Title>{a.description}</Title>
                            </Description>
                            <Value color={a.type}>{a.value}</Value>
                        </Transaction>                   
                    )
                })}

            </Teste>
            <Balance>
                <H2>SALDO</H2>
                <Total color={balance}>{(balance).toFixed(2)}</Total>
            </Balance>
        </Transactions>
    );
}

export default Container;