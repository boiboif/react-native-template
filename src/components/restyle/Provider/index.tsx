import {ThemeProvider} from '@shopify/restyle';
import React, {PropsWithChildren} from 'react';
import {theme} from '../theme';

const RestyleProvider = (props: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default RestyleProvider;
