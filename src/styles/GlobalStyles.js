import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        border: 0;
    }

    body {
        font-family: "Poppins", sans-serif;
        color: #333;
    }

    a {
        text-decoration: none;
        color: unset;
    }
`;
