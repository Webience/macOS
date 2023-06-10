import { style } from "@vanilla-extract/css";

export const clock = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  lineHeight: "1",
  letterSpacing: "-0.1rem",
  color: "rgb(255 255 255 / 50%)",
});

export const time = style({
  fontSize: "8rem",
  fontWeight: "800",
});

export const date = style({
  fontSize: "2.25rem",
  fontWeight: "400",
});
