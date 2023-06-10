import { style } from "@vanilla-extract/css";

export const wallpaper = style({
  position: "fixed",
  inset: 0,
  zIndex: -1000000000000,
  width: "100vw",
  height: "100vh",
  userSelect: "none",
  pointerEvents: "none",
});
