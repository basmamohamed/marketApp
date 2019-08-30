import React from 'react'
import {View} from 'react-native'

const Card = (props) => {
    const{ ContainerStyle } = style
    return(
        <View style={ContainerStyle}>
            {props.children}
        </View>
    )
}
const style = {
    ContainerStyle:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width:5 , height:5 },
        shadowOpacity: 0.3,
        shadowRadius:10,
        elevation:1,
        marginHorizontal:19,
        marginBottom:15,
        backgroundColor:'#fff'
    }
}
export default Card