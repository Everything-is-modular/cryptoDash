import React from "react";
import styled, { css } from "styled-components";
import { toProperCase } from "./helpers";
import { AppContext } from "./app-provider";

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 5px 10px #04fa04;
    `}
`;

function ControlButton({ name, active }) {
  return (
    <AppContext.Consumer>
      {/* Consumer will take a callback */}
      {({page, setPage}) => (
        <ControlButtonElem active={page == name} onClick={() => setPage(name)}>
        {toProperCase(name)}
      </ControlButtonElem>
      )}

    </AppContext.Consumer>
  );
}

export default function () {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div></div>
      <ControlButton active name={"dashboard"} />
      <ControlButton name={"settings"} />
    </Bar>
  );
}

//every small component has its StyledComponent
// Bar styledComponent which provides grid display to the children