'use strict';

import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    BackAndroid,
    Image
} from 'react-native';

/**Declaramos las variables globales*/
let styles = require('superHeroes/components_app/Styles');
var _navigator;

class LoginPage extends Component {
    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.loginNavigator}
                        routeMapper={NavigationBarRouteMapper} /> }/>
        );
    }
    renderScene(route, navigator) {
        _navigator =navigator;
        return (
            <Image style={styles.loginEscene}
                   source={{uri: 'http://k31.kn3.net/taringa/E/5/8/0/9/A/timhard/04F.jpg'}}
                   >
                 <TouchableOpacity style={styles.loginEscene}
                    onPress={this.gotoNext.bind(this)}>
                </TouchableOpacity>

            </Image>
        );
    }
    gotoNext() {
        this.props.navigator.push({
            id: 'MainPage',
            name: 'Principal View',
        });
    }
}


/**Declaramos la funcionalidad de los lementos de la barra de navegacion*/
var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {

        return (
            <View style={styles.loginTitleButton}>
                <Image source={{uri:'http://www.austinbooks.com/wp-content/uploads/2016/07/avengerslogo.png'}} style={{ width: 100, height: 50 }} />
            </View>
        );
    },
    RightButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity style={styles.loginButtonRight}
                              onPress={() => navigator.parentNavigator.push({id: 'MainPage',name: 'Principal View',})}>
                <Text style={styles.loginButtonRightText}>
                    GO
                </Text>
            </TouchableOpacity>
        );
    },
    Title(route, navigator, index, navState) {
        return null;
    }
};

module.exports = LoginPage;