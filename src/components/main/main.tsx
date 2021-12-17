import * as React from "react";
import "twin.macro";
import Filter from "./filter";
import List from "./list";

export default function Main() {
  return (
    <main tw="border-2 border-black flex flex-col items-center" css={main}>
      <Filter />
      <List />
    </main>
  );
}

const main = {
  gridArea: "main",
};
