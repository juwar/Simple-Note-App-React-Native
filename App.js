import React,{ Component } from 'react'
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import Home from './src/Screens/home'
import Add from './src/Screens/add'
import CustomDrawerComponent from './src/Components/customDrawer';
import Edit from './src/Screens/edit'
import store  from './src/Publics/Redux/store'
import { Provider } from 'react-redux'

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
      screen: Home,
    },
  }, 
  {
    contentComponent: CustomDrawerComponent
  },

)

const AppNavigator = createStackNavigator({
  Home: {
    screen: AppDrawerNavigator,
  },
  Add: {
    screen: Add,
  },
  Edit: { 
    screen: Edit,
  }
},
  {
    headerMode:'none',
    defaultNavigationOptions : {
      title: 'NOTE',
  }
  }
);


const AppContainer = createAppContainer(AppNavigator);

// wrap all component with redux Provider and the store
export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

// export default appContainer;