import * as React from "react";
import "twin.macro";
import Post from "./post";

export default function List() {
  return (
    <ul>
      Job Listings
      <Post />
      <Post />
      <Post />
    </ul>
  );
}
