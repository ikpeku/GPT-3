import React from "react";
import {
  Bannner,
  Blog,
  Library,
  Logos,
  RegisterBanner,
  TheFuture,
  ThePossibility,
} from "./HomeSection";

export const Home = () => {
  return (
    <div>
      <Bannner />
      <Logos />
      <Library />
      <TheFuture />
      <ThePossibility />
      <RegisterBanner />
      <Blog />
    </div>
  );
};
