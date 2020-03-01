import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBNarD4qIb0esajfbn94Ne7Pz9Za7Nh30E",
  authDomain: "video-74a59.firebaseapp.com",
  databaseURL: "https://video-74a59.firebaseio.com",
  projectId: "video-74a59",
  storageBucket: "video-74a59.appspot.com",
  messagingSenderId: "783144344357",
  appId: "1:783144344357:web:5d926258674d80627c18cc",
  measurementId: "G-QFH5ZB4335"
};
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);
