/** @jsx jsx */
import { jsx } from "@emotion/core";
import { C2, Flexbox, Icon } from "../../../";
import createStyles from "../styles";
import Types from "../types";

export default (props: Types.MoreContainerProps) => {
  const styles = createStyles();
  const { minified, setMinified } = props;

  let moreLabel = props.moreLabel || "Раскрыть";
  let lessLabel = props.lessLabel || "Скрыть";

  return (
    <Flexbox
      mt="2rem"
      column
      alignItems="center"
      justifyContent="center"
      css={styles.moreContainer}
    >
      <C2
        mb="0.5rem"
        color="lowlight"
        children={minified ? moreLabel : lessLabel}
      />
      <Flexbox
        alignItems="center"
        justifyContent="center"
        css={styles.moreButton}
      >
        <Icon
          size="1.75rem"
          color="lowlight"
          type={minified ? "down_triangle" : "up_triangle"}
          onClick={setMinified}
        />
      </Flexbox>
    </Flexbox>
  );
};
