import { Grid } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Grid)`
    min-height: 100vh;
    background-color: #1A1A1A;
`

export const Input = styled.input`
    width: 100%;
    padding: 9px;
    margin: 0 0 22px;
    border-radius: 5px;
    border: 1px solid #E0E0E0;
`

export const Button = styled.button`
    background-color: #e31a13;
    width: 100%;
    color: #FFF;
    padding: 9px;
    margin: 0 0 22px;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
`

export const Error = styled.p`
    color: #e31a13;
    font-weight: 800;
`