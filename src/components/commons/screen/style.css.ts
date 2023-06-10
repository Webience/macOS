import { style } from "@vanilla-extract/css";

export const screen = style({
  display: "flex",
  position: "fixed",
  inset: "0",
  height: "100vh",
  width: "100vw",
  backgroundColor: "rgb(0 0 0 / 50%)",
  backdropFilter: "blur(10px)",
  zIndex: "1",
});
