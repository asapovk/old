/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { Flexbox, Popup, Button } from "../../../src";
import "../../../src/styles/scss/main.scss";

interface PopupStory {
  tooltip: any;
}

class PopupStory extends React.Component {
  render() {
    return (
      <Flexbox alignContent="center" justifyContent="center" column>
        <Popup content={<a>Hello</a>} css={css({ width: "fit-content" })}>
          <Button label="Call Tooltip" />
        </Popup>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>
        <var>
          <h1>2356534634563</h1>
        </var>
        <h1>2356534634563</h1>v v v<h1>2356534634563</h1>v v
        <h1>2356534634563</h1>
        <h1>2356534634563</h1>v
      </Flexbox>
    );
  }
}

export default PopupStory;
