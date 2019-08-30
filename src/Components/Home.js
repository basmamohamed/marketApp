import React, { Component } from 'react'
import {ActivityIndicator ,  ImageBackground, Image, ScrollView, Text, Dimensions , View , FlatList, StatusBar, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getProducts } from '../actions'
import NavigationService from '../Navigations/NavigationService'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'

let Height = Dimensions.get('window').height
let Width = Dimensions.get('window').width

class Home extends Component {

    componentDidMount() {
        this.props.getProducts()
    }

    renderData(){
        const { backgroundImage,
            HeaderStyle,
            SwiperImageStyle,
            SwiperContainer,
            subHeaderStyle,
            IconStyle,
            LoaderStyle,
            TitleText } = style

        if(this.props.loading){
            return(
                <ActivityIndicator size='large' style={LoaderStyle} />
            )
        }
        else{
            return(
                <View>
                <StatusBar backgroundColor='#fff'/>
                <View style={HeaderStyle}>
                    <Icon name='md-menu' size={20}/>
                    <View style={subHeaderStyle}>
                        <Icon name='md-search' size={20} style={IconStyle}/>
                        <Icon name='md-cart' size={20} />
                    </View>
                </View>
                <Swiper showsButtons={false} style={SwiperContainer}>
                {this.props.products.map((item) => (
                        <Image key={item.id} source={{uri: item.category_img}} style={SwiperImageStyle}/>
                            
                    ))}
                </Swiper>
                    <FlatList
                        data={this.props.products}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => NavigationService.navigate("CatigoriesDetails", {
                                    Item: item,
                                })}>
                                    <ImageBackground source={{ uri: item.category_img }} style={backgroundImage}>
                                       
                                            <Text style={TitleText}>{item.name}</Text>
                                        
                                    </ImageBackground>
                                </TouchableOpacity>
                            )
                        }

                        }
                        numColumns={2}
                        keyExtractor={item => item.id}
                    />
            </View>
            )
        }
    }

    render() {
        
        return (
            <ScrollView>
                {this.renderData()}
            </ScrollView>
        );
    }
}
const mapStateToProps = state => {
    return {
        products: state.Products.allProducts,
        loading : state.Products.loading,
        error : state.Products.erroe
    }
}
export default connect(mapStateToProps, { getProducts })(Home)

const style = {
    LoaderStyle:{
        alignSelf:'center',
        marginTop:Height/2
    },
    HeaderStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:8,
        marginBottom:10
    },
    subHeaderStyle:{
        flexDirection:'row'
    },
    IconStyle:{
        marginRight:8
    },
    SwiperContainer:{
        height:Height/3,
        marginBottom:5
    },
    SwiperImageStyle:{
        width:Width,
        height:Height/3
    },
    backgroundImage: {
        width: Width * 0.46,
        height: Width * 0.46,
        margin:6,
        alignItems: 'flex-end',
        justifyContent:'flex-end'
    },
    TitleText: {
        color: '#fff',
        fontSize: 20,
        margin:10
    }

}