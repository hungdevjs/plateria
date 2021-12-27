import { SafeAreaView, StatusBar } from "react-native";

import { AppContextProvider } from "./contexts/app.context";
import Loading from "./components/Loading";
import AppNavigator from "./navigations/AppNavigator";

export default function App() {
  return (
    <AppContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <AppNavigator />
        <Loading />
      </SafeAreaView>
    </AppContextProvider>
  );
}
