/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect, useRef } from "react";
import Types from "./types";
import createStyles from "./styles";

export default (props: Types.Props) => {
  const { children, type, content, position, className } = props;

  const popupRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const styles = createStyles(position);

  useEffect(() => {
    const container: HTMLElement | null = document.getElementById("ui-pop");
    container && container.addEventListener("click", handleToggle);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      container && container.removeEventListener("click", handleToggle);
    };
  }, []);

  function handleToggle() {
    if (popupRef.current) {
      popupRef.current.style.display =
        popupRef.current.style.display === "none" ? "block" : "none";
    }
  }

  function handleClickOutside(event: { target: any }) {
    if (
      popupRef.current &&
      !popupRef.current!.contains(event.target) &&
      triggerRef.current &&
      !triggerRef.current!.contains(event.target)
    ) {
      popupRef.current.style.display = "none";
      props.onClose && props.onClose();
    }
  }

  return (
    <div
      id="ui-pop"
      ref={triggerRef}
      css={css({ position: "relative" })}
      className={className}
    >
      {children}
      <div css={styles.popup} ref={popupRef} children={content} />
    </div>
  );
};
