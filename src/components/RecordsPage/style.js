import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: column;

`

const Top = styled.div`
    height: 78px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Header = styled.h1`
    color: #fff;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
`

const Transactions = styled.div`
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    width: 326px;
    height: 446px;
    border-radius: 5px;
    padding: 23px 12px 10px 12px; 
    background-color: #fff;   
    color: #868686;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Footer = styled.div`
    height: 144px;
    
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const Transaction = styled.div`
    display: flex;
    justify-content: space-between;
`

const Img = styled.div`
    img{
        cursor: pointer;
    }
`

const Description = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 6px;
`

const Balance = styled.div`
    display: flex;
    justify-content: space-between;
`

const H2 = styled.h2`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000;
`

const Total = styled.h3`
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: ${({color}) => color >= 0 ? '#03AC00' : '#C70000'};
`

const Date = styled.h2`
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
`

const Title = styled.h2`
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`

const Value = styled.h2`
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({color}) => color === 'entry' ? '#03AC00' : '#C70000'};
`

const InOutButton = styled.button`
    width: 155px;
    height: 114px;
    padding: 10px;
    border-radius: 5px;
    background-color: #A328D6;
    border: none;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

const Text = styled.h2`
    color: #fff;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    text-align: start;
`

export { 
    Box,
    Top, 
    Header, 
    Transactions, 
    Img,
    Footer, 
    Transaction, 
    Description,
    Balance,
    H2,
    Total,
    Date,
    Title,
    Value,
    InOutButton,
    Text
}
