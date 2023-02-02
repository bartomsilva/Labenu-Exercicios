import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    
    body {
         width: 100vw;
         max-width: 100vw;
    }
    #root {
        width: 100vw;
        border: 5px solid green;
    }
    
`