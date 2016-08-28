'use strict';
import React, { Component } from 'react';
/**importamos las librerias*/
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

/**Declaramos las variables globales*/
let styles = require('superHeroes/components_app/Styles');

class SplashPage extends Component {
    componentWillMount() {
        var navigator = this.props.navigator;
        setTimeout(() => {
            navigator.replace({
                id: 'LoginPage',
            });
        }, 1000);
    }
    render() {
        return (
            <View style={styles.splashContainer}>
                <Text style={styles.splashTextContainer}>Descargando datos...</Text>
            </View>
        );
    }
}

module.exports = SplashPage;