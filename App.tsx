import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

import { Home } from "./containers";
import { Layout } from "./components/layout/layout";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle, { flex: 1 }]}
      >
        <Layout>
          <Home />
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
