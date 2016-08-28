
'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    ScrollView,
    TouchableOpacity,
WebView

} from 'react-native';
/**Declaramos las variables globales*/
let styles = require('superHeroes/components_app/Styles');

let nameScreen;
class WebViewPage extends Component {

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
                navigationBar={
                    <Navigator.NavigationBar style={styles.webNavigator}
                                             routeMapper={NavigationBarRouteMapper} />
                } />
        );
    }
    renderScene(route, navigator) {
        nameScreen =this.props.name;
        return (
            <View style={styles.webContainer}>
                <WebView source={{uri : this.props.result}}
                         startInLoadingState={true}/>
            </View>

        );
    }


}

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, nextState) {
        return (
            <TouchableOpacity style={styles.webButtonLeft}
                              onPress={() => navigator.parentNavigator.pop()}>
                <Text style={styles.webButtonTextLeft}>
                    Back
                </Text>
            </TouchableOpacity>
        );
    },
    RightButton(route, navigator, index, nextState) {
        {/*
         return (
         <TouchableOpacity style={styles.profileButtonRight}
         onPress={() => navigator.parentNavigator.push({id: 'unknown'})}>
         <Text style={styles.profileButtonTextRight}>
         Menu
         </Text>
         </TouchableOpacity>
         );*/
        }
        return null;
    },
    Title(route, navigator, index, nextState) {
        return (
            <TouchableOpacity style={styles.webTitleButton}>
                <Text style={styles.webTitleText}>
                    {nameScreen}
                </Text>
            </TouchableOpacity>
        );
    }
};

module.exports = WebViewPage;
