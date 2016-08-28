'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    ScrollView,
    TouchableOpacity

} from 'react-native';
/**Declaramos las variables globales*/
let styles = require('superHeroes/components_app/Styles');
var FotoCircular = require('superHeroes/components_app/componentes/circleImage');
var WebViewPage = require('superHeroes/components_app/pages/WebViewPage');
class Estadisticas extends Component {

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
                navigationBar={
                    <Navigator.NavigationBar style={styles.bioNavigator}
                                             routeMapper={NavigationBarRouteMapper} />
                } />
        );
    }
    renderScene(route, navigator) {
        return (
       <ScrollView style={styles.bioContainer}>
           <FotoCircular
               result={this.props.result}/>
           <View style={styles.bioRowContaner}>
               <Text style={styles.bioRowContent}>
                   {this.props.result.description.trim() ? this.props.result.description : "No exist result :("}
               </Text>
           </View>

           <View style={styles.bioContainer}>
               <TouchableHighlight
                   style={this.profileBoton(3)}
                   onPress={this.goToDetail.bind(this)}
                   underlayColor='#A947B6'>
                   <Text style={styles.bioButtonText}>
                       SUPER DETALLE
                   </Text>
               </TouchableHighlight>

               <TouchableHighlight
               style={this.profileBoton(0)}
               onPress={this.goToWiki.bind(this)}
               underlayColor='#A947B6'>
                   <Text style={styles.bioButtonText}>
                     SUPER WIKI
                   </Text>
               </TouchableHighlight>

               <TouchableHighlight
                   style={this.profileBoton(1)}
                   onPress={this.goToComics.bind(this)}
                   underlayColor='#A947B6'>
                   <Text style={styles.bioButtonText}>
                       SUPER COMICS
                   </Text>
               </TouchableHighlight>
           </View>

        </ScrollView>

    );
    }


    profileBoton(btn){
        var  obj={
            flexDirection:'row',
            alignSelf:'stretch',
            justifyContent:'center',
            flex: 1,
            height:80
        }
        if(btn ==0) obj.backgroundColor='#00D571'
        if(btn ==1) obj.backgroundColor='#0094E0'
        if(btn ==2) obj.backgroundColor='#2F485F'

        return obj;

    }



    goToDetail(){
        var url = `http://duckduckgo.com?q=${this.props.result.name}`
        if(this.props.result.urls.length>=1)
            url=this.props.result.urls[0].url
        this.openPage(url,"Details")
    }
    goToWiki(){
        var url = `http://duckduckgo.com?q=${this.props.result.name} wiki`
        if(this.props.result.urls.length>=2)
            url=this.props.result.urls[1].url
        this.openPage(url, "Wiki")
    }
    goToComics(){
        var url = `http://duckduckgo.com?q=${this.props.result.name} comics`
        if(this.props.result.urls.length>=3)
            url=this.props.result.urls[2].url
        this.openPage(url, "Comics")
    }


    openPage(url,name){
        this.props.navigator.push({
            id: 'WebViewPage',
            name: 'Web view page',
            sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            passProps: {result:url, name:name}
        });
    }
}

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, nextState) {
        return (
            <TouchableOpacity style={styles.bioButtonLeft}
                              onPress={() => navigator.parentNavigator.pop()}>
                <Text style={styles.bioButtonTextLeft}>
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
            <TouchableOpacity style={styles.bioTitleButton}>
                <Text style={styles.bioTitleText}>
                    Biography
                </Text>
            </TouchableOpacity>
        );
    }
};

module.exports = Estadisticas;