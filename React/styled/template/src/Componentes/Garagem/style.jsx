import styled from "styled-components";

export const Button = styled.button`
    background-color: #6c6ceb;
    color: #ffffff;
    font-size: 1.2rem;
    width: 8rem;
    height: 3rem;
    border-radius: 0.45rem;
    padding: 5px;
    border: none;
`

export const GaragemContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Estacionamento = styled.section`
    width: 80%;
    margin-top: 50px;
    grid-gap: 5px;  
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));        
    grid-template-rows: repeat(2, 100px);  
`
export const HeaderGaragem = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    color: #fff;
    height: 22vh;
`

