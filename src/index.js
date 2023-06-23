import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import{AuthProvider} from "./contexts/auth.tsx";
import Routes from "./routes/index";

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
         <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;