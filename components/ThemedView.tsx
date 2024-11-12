import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemeProvider, useTheme } from '@/components/ThemeContext'; // Import the useTheme hook

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  //const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const {currentTheme, toggleTheme} = useTheme();
  const backgroundColor = currentTheme.background;
  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
