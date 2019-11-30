import React from "react"
import { StatusBar } from "react-native"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { HomeScreen, DetailsScreen } from "./src/screens"
import { store } from "./redux/configureStore"
import { Provider } from "react-redux"

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#03C086"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    initialRouteName: "Home"
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle={"light-content"} backgroundColor={"#1365AF"} />
        <AppContainer />
      </Provider>
    )
  }
}
