import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: #fff;
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
`

const Input = styled.input`
    width: 326px;
    height: 58px;
    border: none;
    border-radius: 5px;
    padding-left: 15px;
    outline: 0;
   
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

const StyledLink = styled(Link)`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
`

export { 
    Container,
    Title, 
    Input, 
    Button,
    Form, 
    StyledLink 
}
