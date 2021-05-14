import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

html, body {
    max-width: 100vw;
    background-color: #e5e5e5;
}

p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
}

input {
    border-radius: 3px
}

`;
