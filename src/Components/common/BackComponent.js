import React from 'react';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

class BackComponent extends React.Component {
    render() {
        return (
            <Icon color='#fff' name='md-arrow-back' size={20} onPress={() => { this.props.navigation.goBack() }} />
        )
    }
}

export default withNavigation(BackComponent);