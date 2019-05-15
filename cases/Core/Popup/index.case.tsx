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
      <Flexbox alignItems="center" justifyContent="center" column>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <span>It's overflow hidden</span>
        <Flexbox
          css={css({
            width: "12rem",
            height: "3rem",
            overflow: "hidden",
            background: "red"
          })}
          alignItems="center"
          justifyContent="center"
        >
          <Popup
            content={<a css={css({ margin: "1rem .5rem" })}>Hello world!</a>}
            wrapperStyles={css({
              width: "fit-content"
            })}
          >
            <Button label="Trigger Popup" />
          </Popup>
        </Flexbox>
        <Flexbox
          css={css({
            width: "12rem",
            height: "3rem",
            overflow: "hidden",
            background: "yellow"
          })}
          alignItems="center"
          justifyContent="center"
        >
          <Popup
            content={<a css={css({ margin: "1rem .5rem" })}>Hello world!</a>}
            wrapperStyles={css({
              width: "fit-content"
            })}
          >
            <Button label="Trigger Popup" />
          </Popup>
        </Flexbox>
        <Flexbox
          css={css({
            width: "12rem",
            height: "3rem",
            overflow: "hidden",
            background: "blue"
          })}
          alignItems="center"
          justifyContent="center"
        >
          <Popup
            content={<a css={css({ margin: "1rem .5rem" })}>Hello world!</a>}
            wrapperStyles={css({
              width: "fit-content"
            })}
          >
            <Button label="Trigger Popup" />
          </Popup>
        </Flexbox>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
        <h1>SCROLL SCROLL SCROLL</h1>
      </Flexbox>
    );
  }
}

export default PopupStory;
