import React , {Component} from 'react'
import {View , Text} from 'react-native'

export default class ProductDetails extends Component {
    render(){
        return(
            <View style={style.ContainerStyle}>
                <Text style={style.textStyle}>{this.props.navigation.getParam("Title")}</Text>
            </View>
        )
    }
}
const style ={
    ContainerStyle:{
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:20
    }
}