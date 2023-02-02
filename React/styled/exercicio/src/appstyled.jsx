import styled from "styled-components";


export const TelaInteira = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
`

export const Header = styled.header`
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    width: 100%;
    height: 10vh;
`

export const Footer = styled.footer`
    background: #333b3e;
    color: white;
    width: 100%;
    height: 10vh;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
`

export const ContainerTrailer = styled.section`
    
    visibility: ${(props) => props.ver ? `visible` : `hidden`};
    z-index: ${(props) => props.ver ? 1 : -1};
    
    width: 100%;
    min-height: 100%;
    background-color: rgba(0,0,0,.4);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 3px solid white; */

`

export const Main = styled.main`
    min-height: 80%;
    display: flex;
`




