'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    Image

} from 'react-native';
/**Declaramos las variables globales*/
let styles = require('superHeroes/components_app/Styles');
let EstadisticasPage = require('superHeroes/components_app/pages/EstadisticasPage');
let superHeroesAPI = require('superHeroes/components_app/connectionAPI/superHeroesAPI');
/**Llamamos la vista del loading y a su interfaz*/
let BusyIndicator = require('superHeroes/components_app/componentes/BusyIndicator');
let loaderHandler = require('superHeroes/components_app/componentes/LoaderHandler');

class PersonPage extends Component {

    /**Delaracion del contrsuctor y seteamos los primeros valores de las variables*/
    constructor(props){
        super(props)
        this.state={  error:false }
    }
    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
                navigationBar={
                    <Navigator.NavigationBar style={styles.profileNavigator}
                                             routeMapper={NavigationBarRouteMapper} />
                } />
        );
    }
    renderScene(route, navigator) {
        var showErr=(
            this.state.error ?<Text style={styles.profileMsgError}> {this.state.error}</Text> : <View/>
        )
        var thumb="http://i.imgur.com/x2rx1g0.jpg";
        if(this.props.result.thumbnail && this.props.result.thumbnail.path && this.props.result.thumbnail.extension)
            thumb=`${this.props.result.thumbnail.path}/standard_fantastic.${this.props.result.thumbnail.extension}`


        return (
       <View style={styles.profileContainer}>
           <Image source={{uri:thumb}} style={styles.profileImage}/>
           {showErr}
           <TouchableHighlight
           style={this.profileBoton(0)}
           onPress={this.goToBio.bind(this)}
           underlayColor='#A947B6'>
               <Text style={styles.profileButtonText}>
                   BIOGRAFIA
               </Text>
           </TouchableHighlight>

           <TouchableHighlight
               style={this.profileBoton(1)}
               onPress={this.goToStats.bind(this)}
               underlayColor='#A947B6'>
               <Text style={styles.profileButtonText}>
                   ESTADISTICAS
               </Text>
           </TouchableHighlight>

           <TouchableHighlight
               style={this.profileBoton(2)}
               onPress={this.goToNotes.bind(this)}
               underlayColor='#A947B6'>
               <Text style={styles.profileButtonText}>
                   NOTAS
               </Text>
           </TouchableHighlight>

           <BusyIndicator />

        </View>
    );
    }


    profileBoton(btn){
        var  obj={
            flexDirection:'row',
            alignSelf:'stretch',
            justifyContent:'center',
            flex: 1
        }
        if(btn ==0) obj.backgroundColor='#00C19E'
        if(btn ==1) obj.backgroundColor='#00D571'
        if(btn ==2) obj.backgroundColor='#0094E0'
        return obj;

    }

    goToBio(){

            this.props.navigator.push({
                id: 'BiografiaPage',
                name: 'Estadisticas herores',
                sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
                passProps: {result:this.props.result}
            });

    }
    goToStats(){
        this.props.navigator.push({
            id: 'EstadisticasPage',
            name: 'Estadisticas herores',
            sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            passProps: {result:this.props.result}
        });
    }
    goToNotes(){
        loaderHandler.showLoader("Loading"); // Show indicator with message 'loading'
        this.setState({ error:""});
        superHeroesAPI.getSuperHeroesNotes(this.props.result.id)
            .then((jsonRes) =>{
                jsonRes=jsonRes||{};
                loaderHandler.hideLoader();  // Hide the loader
                this.props.navigator.push({
                    id: 'NotesPage',
                    name: 'Notas Super Heroe',
                    sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
                    passProps: {
                        result:this.props.result,
                        notes:jsonRes
                    }
                });
            })
            .catch((err) =>{
                this.setState({error:`Error: ${err}` });
                loaderHandler.hideLoader();  // Hide the loader
            })

    }
}

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, nextState) {
        return (
            <TouchableOpacity style={styles.profileButtonLeft}
                              onPress={() => navigator.parentNavigator.pop()}>
                <Text style={styles.profileButtonTextLeft}>
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
            <TouchableOpacity style={styles.profileTitleButton}>
                <Text style={styles.profileTitleText}>
                    Profile
                </Text>
            </TouchableOpacity>
        );
    }
};

module.exports = PersonPage;