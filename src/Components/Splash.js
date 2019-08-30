import React, { Component } from 'react';
import { ImageBackground, ActivityIndicator,StatusBar} from 'react-native';
import NavigationService from '../Navigations/NavigationService';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      NavigationService.navigate("OnboardingSwiper")
    }, 3000)
  }

  render() {
      const {ContainerStyle} = style
    return (
      <ImageBackground source={require('../Assets/Splash.png')} style={ContainerStyle}>
        <StatusBar backgroundColor='#fd6768'/>
          <ActivityIndicator size="large" color="#fff"/>
      </ImageBackground>
    );
  }
}
const style={
    ContainerStyle:{
         justifyContent: 'center', 
         width: '100%', 
         height: '100%' 
        }
        }

