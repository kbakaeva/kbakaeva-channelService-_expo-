import * as React from 'react';
import { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { RootNavigation } from './app/components/navigation/RootNavigation';

const App: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;