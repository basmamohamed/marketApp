import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import NavigationService from './NavigationService'
import Splash from '../Components/Splash'
import Home from '../Components/Home'
import OnboardingSwiper from '../Components/OnboardingSwiper'
import ProductDetails from '../Components/ProductDetails'
import CatigoriesDetails from '../Components/CatigoriesDetails'

const TopLevelNavigator = createStackNavigator({
 Splash:{screen:Splash},
  
  Home: { screen: Home },
  OnboardingSwiper:{ screen: OnboardingSwiper},
  ProductDetails: { screen: ProductDetails },
  CatigoriesDetails:{screen:CatigoriesDetails},
  
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  })
 const AppContainer = createAppContainer(TopLevelNavigator)
const Routes = () => {
  return (
    
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    
  )
};
export default Routes;
