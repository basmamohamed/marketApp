import React from 'react'
import {Image,View,StatusBar} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import NavigationService from '../Navigations/NavigationService'

const OnboardingSwiper = () => {
    return (
        <View style={{flex:1}}>
            <StatusBar backgroundColor="#f1f1f1"/>
        <Onboarding
        showNext={false}
        showSkip={false}
        onDone={()=>NavigationService.navigate("Home")}
        bottomBarColor="#f1f1f1"
            pages={[
                {
                    backgroundColor: '#f1f1f1',
                    image: <Image source={require('../Assets/firstOnboard.png')} />,
                    title: 'What is Lorem Ipsum?',
                    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                },
                {
                    backgroundColor: '#f1f1f1',
                    image: <Image source={require('../Assets/secondOnboard.png')} />,
                    title: 'Why do we use it?',
                    subtitle: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                },
                {
                    backgroundColor: '#f1f1f1',
                    image: <Image source={require('../Assets/thirdOnboard.png')} />,
                    title: 'Where does it come from?',
                    subtitle: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                },
                ]}
        />
        </View>
    )
}
export default OnboardingSwiper
