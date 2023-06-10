import { style } from "@vanilla-extract/css";

export const card = style({
  display: "grid",
  gridTemplateRows: "1fr 1.5rem auto",
  justifyItems: "center",
  gap: "1rem",
  color: "#fff",
});

export const profile = style({
  display: "flex",
  position: "relative",
  "::after": {
    content: `url("./icons/checkmark.svg")`,
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "1rem",
    height: "1rem",
    transform: "translate(-50%, -50%)",
    boxSizing: "content-box",
    filter: "drop-shadow(0 0 0.25rem #fff)",
  },
});

export const pic = style({
  width: "5rem",
  aspectRatio: "1",
  borderRadius: "50%",
  overflow: "hidden",
  position: "relative",
});

export const passwordInput = style({
  borderRadius: "50vmax",
  border: "none",
  padding: "0.5rem 1rem",
  outline: "none",
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  color: "inherit",
});

export const name = style({
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "capitalize",
});

export const caption = style({
  fontSize: "0.75rem",
  opacity: "0.75",
});
