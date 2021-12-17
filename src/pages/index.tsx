import * as React from "react";
import "twin.macro";
import Aside from "../components/aside/aside";
import Header from "../components/header/header";
import Layout from "../components/layout/layout";
import Main from "../components/main/main";

export default function Index() {
  return (
    <Layout>
      <Header />
      <Aside side="Left" />
      <Main />
      <Aside side="Right" />
    </Layout>
  );
}
