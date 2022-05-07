import styled from "styled-components";

const Title = styled.h1`
    font-family: 'Saira Stencil One', cursive;
`

const Input = styled.input`
    width: 326px;
    height: 58px;
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
`

export { 
    Title, 
    Input, 
    Button,
    Form  
}
