'use strict';
import React, { Component } from 'react';
/**importamos las librerias*/
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

/**Declaramos las variables globales*/
let styles = require('superHeroes/components_app/Styles');

class circle extends Component {

    render() {
        var thumb="http://i.imgur.com/x2rx1g0.jpg";
        if(this.props.result.thumbnail && this.props.result.thumbnail.path && this.props.result.thumbnail.extension)
            thumb=`${this.props.result.thumbnail.path}/standard_fantastic.${this.props.result.thumbnail.extension}`

        return (
            <View style={styles.circleImageContainer}>
                <Image source={{uri:thumb}} style={styles.circleImagePhoto}/>
                <Text style={styles.circleImageName}>{this.props.result.name}</Text>
            </View>
        );
    }
}

module.exports = circle;