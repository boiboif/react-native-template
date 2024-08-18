import {createTheme} from '@shopify/restyle';
import {MD3Colors} from 'react-native-paper/lib/typescript/types';

export const lightPalette: Omit<MD3Colors, 'elevation'> = {
  primary: 'rgb(0, 95, 175)',
  onPrimary: 'rgb(255, 255, 255)',
  primaryContainer: 'rgb(212, 227, 255)',
  onPrimaryContainer: 'rgb(0, 28, 58)',
  secondary: 'rgb(84, 95, 113)',
  onSecondary: 'rgb(255, 255, 255)',
  secondaryContainer: 'rgb(216, 227, 248)',
  onSecondaryContainer: 'rgb(17, 28, 43)',
  tertiary: 'rgb(110, 86, 118)',
  onTertiary: 'rgb(255, 255, 255)',
  tertiaryContainer: 'rgb(247, 216, 255)',
  onTertiaryContainer: 'rgb(39, 20, 48)',
  error: 'rgb(186, 26, 26)',
  onError: 'rgb(255, 255, 255)',
  errorContainer: 'rgb(255, 218, 214)',
  onErrorContainer: 'rgb(65, 0, 2)',
  background: 'rgb(253, 252, 255)',
  onBackground: 'rgb(26, 28, 30)',
  surface: 'rgb(253, 252, 255)',
  onSurface: 'rgb(26, 28, 30)',
  surfaceVariant: 'rgb(224, 226, 236)',
  onSurfaceVariant: 'rgb(67, 71, 78)',
  outline: 'rgb(116, 119, 127)',
  outlineVariant: 'rgb(195, 198, 207)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(47, 48, 51)',
  inverseOnSurface: 'rgb(241, 240, 244)',
  inversePrimary: 'rgb(165, 200, 255)',
  surfaceDisabled: 'rgba(26, 28, 30, 0.12)',
  onSurfaceDisabled: 'rgba(26, 28, 30, 0.38)',
  backdrop: 'rgba(45, 49, 56, 0.4)',
};

export const theme = createTheme({
  colors: {
    ...lightPalette,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    defaults: {
      color: 'onBackground',
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;
