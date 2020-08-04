import React from "react";
import { Button, useColorMode } from "@chakra-ui/core";

export const ToggleThemeMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
};
