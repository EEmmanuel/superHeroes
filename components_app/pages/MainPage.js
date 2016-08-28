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
    TextInput,
    Image,
} from 'react-native';

/**Declaramos las variables globales*/
let styles = require('superHeroes/components_app/Styles');
let superHeroesAPI = require('superHeroes/components_app/connectionAPI/superHeroesAPI');
/**Llamamos la vista del loading y a su interfaz*/
let BusyIndicator = require('superHeroes/components_app/componentes/BusyIndicator');
let loaderHandler = require('superHeroes/components_app/componentes/LoaderHandler');

class MainPage extends Component {

    /**Delaracion del contrsuctor y seteamos los primeros valores de las variables*/
    constructor(props){
        super(props)
        this.state={ searchQuery:"",  error:false }
    }
    //Render del navigator
    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.mainNavigator}
                        routeMapper={NavigationBarRouteMapper}/>
                }


            />

        );
    }

    renderScene(route, navigator) {
        var showErr=(
            this.state.error ?<Text style={styles.mainMsgError}> {this.state.error}</Text> : <View/>
        )
        return (
            <View style={styles.principalContainer}>
                <Text style={styles.mainTitle}>
                    Buscar super heroes
                </Text>
                <TextInput
                    style={styles.mainSearchInput}
                    value={this.state.searchQuery}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Spider"/>
                <TouchableHighlight
                    style={styles.mainButton}

                    /*
                    Se comenta  metodo para llamar a la siguiente pantalla
                    onPress={this.gotoPersonPage.bind(this)}*/
                    onPress={this.handleSubmit.bind(this)}
                    underlayColor="#A947B6">
                    <Text style={styles.mainButtonText}>Buscar</Text>
                </TouchableHighlight>
                {showErr}
                <Text style={styles.mainDisclaimer}>
                    Data provided by Marvel. © 2016 MARVEL
                </Text>
                <BusyIndicator />

            </View>
        );
    }

    /**--------Lista de metodos-----------*/
    //Metodo que actualiza el estado de la variable searchQuery cada que tecleamos
    handleChange(e){
        this.setState({ searchQuery:e.nativeEvent.text })
    }

    //Metodo que realiza que ejecuta el metodo que esta en el archivo superHeroesAPI y
    //obtiene la respuesta
    handleSubmit(){
        if(this.state.searchQuery !== ""){
            loaderHandler.showLoader("Loading"); // Show indicator with message 'loading'
            this.setState({ error:""});
            superHeroesAPI.getSuperHeroes(this.state.searchQuery)
                .then((jsonres) => this.handleRespose(jsonres)) //Recibimos la respuesta de los super heroes
                .catch((err) =>{
                    loaderHandler.hideLoader();  // Hide the loader
                    this.setState({ error:`Error: ${err}` })
                })
        }else{
            this.setState({ error:"Campo vacio"});
        }

    }

    handleRespose(res){
        var resDataCount=res.data.count || '0';
        if(resDataCount==0){
            loaderHandler.hideLoader();  // Hide the loader
            this.setState({
                error:'No hay resultados',
            });
        }else{
            this.setState({ searchQuery:""});
            this.gotoListSuperHeroes(res)
        }
    }

    //declaracion de metodo *push para empujar la otra vista
    gotoListSuperHeroes(res) {
        loaderHandler.hideLoader();  // Hide the loader
        this.props.navigator.push({
            id: 'ResultPage',
            name: 'List result superHeroes',
            passProps: {result:res.data.results}
        });
    }

}


/**Declaramos la funcionalidad de los lementos de la barra de navegacion*/
var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity
                style={styles.mainButtonLeft}
                onPress={() => navigator.parentNavigator.pop()}>
                    <Text style={styles.mainButtonTextLeft}>
                        Back
                    </Text>
            </TouchableOpacity>
        );
    },
    RightButton(route, navigator, index, navState) {
        return null;
    },
    Title(route, navigator, index, navState) {
        return (
            <TouchableOpacity
                style={styles.mainTitleButton}>
                    <Text style={styles.mainTitleText}>
                        BUSCAR
                    </Text>
            </TouchableOpacity>
        );
    }
};



module.exports = MainPage;