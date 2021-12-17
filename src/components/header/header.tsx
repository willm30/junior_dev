import * as React from "react";
import "twin.macro";
import Hero from "./hero";
import Nav from "./nav";

export default function Header() {
  return (
    <header tw="border-2 border-black flex flex-col" css={header}>
      <Nav />
      <Hero />
    </header>
  );
}

const header = {
  gridArea: "header",
};
