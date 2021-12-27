import { SafeAreaView, StatusBar } from "react-native";
import Toast from "react-native-toast-message";

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
        <Toast />
      </SafeAreaView>
    </AppContextProvider>
  );
}
