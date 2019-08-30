import React, { Component } from 'react'
import { ImageBackground, Image, ScrollView, Text, Dimensions, View, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import NavigationService from '../Navigations/NavigationService'
import Icon from 'react-native-vector-icons/Ionicons'
import Card from './common/Card'
import Footer from './common/Footer';
import BackComponent from './common/BackComponent';

let Height = Dimensions.get('window').height
let Width = Dimensions.get('window').width

class CatigoriesDetails extends Component {

    render() {
        const { backgroundImage,
            HeaderStyle,
            BackgroundImageStyle,
            detailsTextStyle,
            subHeaderStyle,
            IconStyle,
            TitleText,
            CatigoryNameStyle,
            FlatListStyle } = style

        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <ImageBackground style={BackgroundImageStyle} source={{ uri: this.props.navigation.getParam("Item").category_img }}>
                        <StatusBar translucent backgroundColor='transparent' />
                        <View style={HeaderStyle}>
                            <View style={subHeaderStyle}>
                                <BackComponent/>
                                <Text style={CatigoryNameStyle}>{this.props.navigation.getParam("Item").name}</Text>
                            </View>
                            <View style={subHeaderStyle}>
                                <Icon color='#fff' name='md-search' size={20} style={IconStyle} />
                                <Icon color='#fff' name='md-cart' size={20} />
                            </View>
                        </View>
                    </ImageBackground>

                    <FlatList
                        style={FlatListStyle}
                        data={this.props.navigation.getParam("Item").products}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => NavigationService.navigate("ProductDetails", {
                                    Title: item.name,
                                })}>
                                    <Card>
                                        <Image source={{ uri: item.product_img }} style={backgroundImage} />

                                        <Text style={TitleText}>{item.name}</Text>
                                        <Text style={detailsTextStyle}>{item.weight}</Text>
                                        <Text style={detailsTextStyle}>{item.price}</Text>
                                    </Card>
                                </TouchableOpacity>
                            )
                        }

                        }
                    />
                </ScrollView>
                <Footer />
            </View>
        );
    }
}
export default CatigoriesDetails

const style = {
    HeaderStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 8,
        marginBottom: 10,
        marginTop: 30
    },
    subHeaderStyle: {
        flexDirection: 'row'
    },
    IconStyle: {
        marginRight: 8
    },
    SwiperContainer: {
        height: Height / 3,
        marginBottom: 5
    },
    BackgroundImageStyle: {
        width: Width,
        height: Height / 3
    },
    backgroundImage: {
        width: Width * 0.46,
        height: Width * 0.46,
        margin: 6,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    TitleText: {
        fontSize: 20,
        margin: 10
    },
    detailsTextStyle: {
        fontSize: 12,
        margin: 6
    },
    FlatListStyle: {
        marginTop: 10
    },
    CatigoryNameStyle: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 8
    }

}