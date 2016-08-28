'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

class NoNavigatorPage extends Component {
    render() {
        var navigator = this.props.navigator;
        return (
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity
                    onPress={() => navigator.pop()}>
                    <Text style={{color: 'yellow'}}>Mostrar image view</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = NoNavigatorPage;