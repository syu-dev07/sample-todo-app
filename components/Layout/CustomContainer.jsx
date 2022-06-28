import { Container } from "@mantine/core";
import React from "react";
import { Header } from "./Header";

export const CustomContainer = ({ children }) => {
  return (
    <div>
      <Header />
      <Container className="mx-auto max-w-lg">{children}</Container>
    </div>
  );
};
