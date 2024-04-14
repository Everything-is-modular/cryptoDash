import React from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../Shared/styles";
import { AppContext } from "../App/app-provider";
import { debounce, pickBy, includes } from "lodash";
import { filter } from 'fuzzy'

const StyledSearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
    color: #0096c7;
  height: 25px;
  place-self: center left;
  //vertically center and move it to left
  // align-self justify-self
`;

const handleFilter = debounce((inputValue, coinsList, setFilteredCoins) => {
    // get All the coins symbol
    let coinSymbol = Object.keys(coinsList)
    // Get all the name and mao symbol to name
    let coinNames = coinSymbol.map(sym => coinsList[sym].CoinName)
    let allStringToSearch = coinSymbol.concat(coinNames)
    let fuzzyResults = filter(inputValue, allStringToSearch, {}).map(result => result.string)
    // filter function in fuzzy library which takes inputValue as 1st argument, array of strings that needs to be filtered as 2nd argument, third argument is a filter
    let filteredCoins = pickBy(coinsList, (result, symKey) => {
        // pickBy in lodash says pick the specific object in coins list  
        let coinName = result.CoinName
        return includes(fuzzyResults, symKey) || includes(fuzzyResults, coinName)
    })
    setFilteredCoins(filteredCoins)
}, 500)

function filterCoins(e, setFilteredCoins, coinsList) {
    let inputValue = e.target.value
    if(!inputValue) {
        setFilteredCoins(null)
    } else {
        handleFilter(inputValue, coinsList, setFilteredCoins)
    }
}

export default function () {
  return (
    <AppContext.Consumer>
      {({ coinsList, setFilteredCoins }) => {
        return (
          <StyledSearchGrid>
            <h2>Search all coins</h2>
            <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinsList)} />
          </StyledSearchGrid>
        );
      }}
    </AppContext.Consumer>
  );
}
