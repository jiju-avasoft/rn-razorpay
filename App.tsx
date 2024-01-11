import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={{color: '#000', fontSize: 24, fontWeight: "600"}}>Welcome</Text>
    </View>
  );
};

export default App;
