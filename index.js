import * as React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import App from './App';
import {RestyleProvider, lightPalette} from './src/components';

export default function Main() {
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <RestyleProvider>
        <PaperProvider
          theme={{
            colors: {
              ...lightPalette,
              elevation: {
                level0: 'transparent',
                level1: 'rgb(240, 244, 251)',
                level2: 'rgb(233, 239, 249)',
                level3: 'rgb(225, 235, 246)',
                level4: 'rgb(223, 233, 245)',
                level5: 'rgb(218, 230, 244)',
              },
            },
          }}>
          <App />
        </PaperProvider>
      </RestyleProvider>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
