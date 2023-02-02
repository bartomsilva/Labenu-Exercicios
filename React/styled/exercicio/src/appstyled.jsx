import styled from "styled-components";


export const ContainerTrailer = styled.section`
    
    visibility: ${ (props) => props.ver ? `visible` : `hidden`};
    z-index: ${ (props) => props.ver ?1:-1};
    
    width: 100vw;
    min-height: 100vh;
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
      
 


