/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Types from "./types";
import createStyles from "./styles";

export default (props: Types.Props) => {
  const {
    children,
    content,
    position,
    className,
    event,
    wrapperStyles
  } = props;

  const distance = props.distance || 8;

  const popupRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const id = Math.random().toString();

  let styles = createStyles(position);

  const viewport = document.getElementById(
    "0cd82567-7684-4147-ab02-dd3c56332364"
  );

  useEffect(() => {
    const container = document.getElementById(id);
    container && container.addEventListener("click", handleToggle);
    document.addEventListener("mousedown", handleClickOutside);
    viewport &&
      viewport.addEventListener("scroll", setPosition, {
        capture: true,
        passive: true
      });
    setPosition();
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      container && container.removeEventListener("click", handleToggle);
      viewport && viewport.removeEventListener("scroll", setPosition);
    };
  });

  function handleToggle() {
    if (popupRef.current) {
      popupRef.current.style.visibility =
        popupRef.current.style.visibility === "hidden" ? "visible" : "hidden";
    }
  }

  function handleClickOutside(event: { target: any }) {
    if (
      popupRef.current &&
      triggerRef.current &&
      !popupRef.current!.contains(event.target) &&
      !triggerRef.current!.contains(event.target)
    ) {
      popupRef.current.style.visibility = "hidden";
    }
  }

  function setPosition() {
    if (triggerRef.current && popupRef.current) {
      const trigger = triggerRef.current.getBoundingClientRect();
      const popup = popupRef.current.getBoundingClientRect();
      const top = (trigger.top + trigger.height + distance || 0).toString();
      const left = (trigger.right - popup.width || 0).toString();
      popupRef.current.style.top = top + "px";
      popupRef.current.style.left = left + "px";
    }
  }

  return (
    <div id={id} ref={triggerRef} css={wrapperStyles}>
      {children}
      {ReactDOM.createPortal(
        <div
          css={styles.popup}
          ref={popupRef}
          style={{ visibility: "hidden", top: 0, left: 0 }}
          children={content}
          className={className}
        />,
        viewport || document.body
      )}
    </div>
  );
};
