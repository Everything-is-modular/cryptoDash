import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/app-provider";
import { fontSize1, greenBoxShadow, color3 } from "../Shared/styles";

const StyledConfirmButton = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1};
  padding: 5px;
  &:hover {
  ${greenBoxShadow};
  }
  cursor: pointer;
  // padding: 4px 12px;
  // border-radius: 4px;
  // border: 1px solid #f8ebed;
  // background-color: #5b87d2;
  // &:hover {
  //   background: #979be5;
  // }
  // &:active {
  //   background: #c4baed;
  // }
`;

const StyledCenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function () {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => {
        return (
          <StyledCenterDiv>
            <StyledConfirmButton onClick={confirmFavorites}>
              Confirm Favorites
            </StyledConfirmButton>
          </StyledCenterDiv>
        );
      }}
    </AppContext.Consumer>
  );
}
