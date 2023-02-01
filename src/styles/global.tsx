import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root {
    --primary-blue: #0F52BA;
    --primary-background: #E5E5E5;
    --primary-white: #FFFFFF;
    --primary-grey:  #2C2C2C;
    --secondary-grey: #373737;
    --border-grey: #BFBFBF;
    --primary-footer: #EEEEEE;
}

body {
    background: var(--primary-background);
    color: black;
}

body, input, button, p, h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}

`;