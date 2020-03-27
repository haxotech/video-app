import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import Video from "./Video";
import * as firebase from "firebase";

var firebaseConfigold = {
  apiKey: "AIzaSyBNarD4qIb0esajfbn94Ne7Pz9Za7Nh30E",
  authDomain: "video-74a59.firebaseapp.com",
  databaseURL: "https://video-74a59.firebaseio.com",
  projectId: "video-74a59",
  storageBucket: "video-74a59.appspot.com",
  messagingSenderId: "783144344357",
  appId: "1:783144344357:web:5d926258674d80627c18cc",
  measurementId: "G-QFH5ZB4335"
};

var firebaseConfig = {
  apiKey: "AIzaSyAKxfCH4LGD3fjsjLt7pTLa7CRWv7mt6Xg",
  authDomain: "videoapp-1585181857488.firebaseapp.com",
  databaseURL: "https://videoapp-1585181857488.firebaseio.com",
  projectId: "videoapp-1585181857488",
  storageBucket: "videoapp-1585181857488.appspot.com",
  messagingSenderId: "783144344357",
  appId: "1:60114446297:android:7132b102bdb22a13d29bc8",
  measurementId: "G-QFH5ZB4335"
};
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: Video
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
