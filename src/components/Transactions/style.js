import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`

const Title = styled.h1`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #fff;
`

const Input = styled.input`
    width: 326px;
    height: 58px;
    border: none;
    border-radius: 5px;
    outline: 0;
    padding-left: 15px;
   
    ::placeholder{
        color: #000;
        font-family: 'Raleway';
        font-size: 20px;
        font-weight: 400;
    }
`

const Button = styled.button`
    background-color: #A328D6;
    color: #fff;
    width: 326px;
    height: 46px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`

const Form = styled.form`
    margin-top: 26px;
    margin-bottom: 36px;

    display: flex;
    flex-direction: column;
    gap: 12px;
`
export { 
    Container,
    Title, 
    Input, 
    Button,
    Form  
}
