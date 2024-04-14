import React from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../Shared/styles";

const StyledSearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;

`

const SearchInput = styled.input`
    ${backgroundColor2}
    ${fontSize2}
    color: #0096c7;
    height: 25px;
    place-self: center left;
    //vertically center and move it to left
    // align-self justify-self

`

export default function(){
    return (
        <StyledSearchGrid>
            <h2>Search all coins</h2>
            <SearchInput />
        </StyledSearchGrid>
    )
}