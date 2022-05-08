import { Transactions, Transaction, Description, Balance, H2, Total, Date, Title, Value } from './style';

function Container(){
    const x = false;

    if(x){
        return (
            <Transactions>Não há registros de<br/>entrada ou saída</Transactions>
        );
    }

    return (
        <Transactions>
            <Transaction>
                <Description>
                    <Date>30/11</Date>
                    <Title>Almoço mãe</Title>
                </Description>
                <Value>39,90</Value>
            </Transaction>
            <Balance>
                <H2>SALDO</H2>
                <Total>3000</Total>
            </Balance>
        </Transactions>
    );
}

export default Container;