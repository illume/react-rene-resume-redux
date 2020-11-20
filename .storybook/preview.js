export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
import { addDecorator, addParameters } from "@storybook/react";
import { muiTheme } from "storybook-addon-material-ui";
import { themes } from "@storybook/theming";
import { StylesProvider } from "@material-ui/styles";

addDecorator(muiTheme());

const StylesDecorator = (storyFn) => (
  <StylesProvider injectFirst>{storyFn()}</StylesProvider>
);

addDecorator(StylesDecorator);
