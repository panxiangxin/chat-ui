import React from "react";
import { ThemeProvider } from "styled-components";
import { addDecorator, addParameters } from "@storybook/react";
import theme from "../src/theme";

import "story.css";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));
addParameters({
  options: {
    showRoots: true,
  },
});

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// };
