import React, { Fragment, useState } from "react";
import { Flexbox } from "../../../src/";
import { Card } from "../../../src";
import "../../../src/styles/scss/main.scss";

export default () => {
  const [active, setActive] = useState(0);

  return (
    <div style={{ padding: 20, width: 320 }}>
      <Flexbox m="1rem">
        <Card
          animation="waves"
          active={active === 0}
          onClick={() => {
            setActive(0);
          }}
        />
      </Flexbox>
      <Flexbox m="1rem">
        <Card
          animation="circles"
          active={active === 1}
          onClick={() => {
            setActive(1);
          }}
        />
      </Flexbox>
      <Flexbox m="1rem">
        <Card
          animation="waves"
          active={active === 2}
          onClick={() => {
            setActive(2);
          }}
        />
      </Flexbox>
    </div>
  );
};
