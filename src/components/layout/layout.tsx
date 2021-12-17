import * as React from "react";
import { GlobalStyles } from "twin.macro";

export default function Layout({ children }) {
  return (
    <div css={grid}>
      <GlobalStyles />
      {children}
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplate: `
    'header header header' 25%
    'aside-l main aside-r' 1fr
    'footer footer footer' auto
    / 10% 1fr 10%
  `,
  minHeight: "100vh",
  minWidth: "100vw",
  "@media (max-width: 768px)": {
    gridTemplate: `
    'header header' 15%
    'aside-l aside-l' auto
    'main main' 1fr
    'aside-r aside-r' auto
    'footer footer' auto
    / 1fr 1fr
    `,
  },
};
