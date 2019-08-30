import React from 'react'
import {View , Text ,TouchableOpacity } from 'react-native'

const Footer = () => {
    const {ContainerStyle , TextStyle} = style
    return (
        <View style={ContainerStyle}>
            <TouchableOpacity>
                <Text style={TextStyle}>Sort by</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={TextStyle}>Filter</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Footer

const style = {
    ContainerStyle:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: '#fd6768',
        height:50
    },
    TextStyle:{
        color:'#fff',
        alignSelf:'center',
        fontSize:18
    }
}