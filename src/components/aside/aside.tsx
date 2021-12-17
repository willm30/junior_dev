import * as React from "react";
import "twin.macro";
type Side = "Left" | "Right";

export default function Aside({ side }: { side: Side }) {
  const aside = {
    gridArea: getSide(side),
  };

  return (
    <aside tw="flex flex-col items-center" css={aside}>
      Aside
    </aside>
  );
}

function getSide(side: Side) {
  return side == "Left" ? "aside-l" : "aside-r";
}
