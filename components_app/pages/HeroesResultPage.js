'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    ListView,
    Image
} from 'react-native';

/**Declaramos las variables globales*/
let styles = require('superHeroes/components_app/Styles');
/**Llamamos la vista del loading y a su interfaz*/
let BusyIndicator = require('superHeroes/components_app/componentes/BusyIndicator');
let loaderHandler = require('superHeroes/components_app/componentes/LoaderHandler');


class HeroesResultPage extends React.Component {
    constructor(props){
        super(props);
        //declaramos la lista
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            //dataSource contiene el arreglo de la respuesta este despues se lo pasaremos a la lista
            dataSource: ds.cloneWithRows(this.props.result),
        };
    }

     //Render del navigator
    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.listNavigator}
                        routeMapper={NavigationBarRouteMapper} />}/>
        );
    }

    //Cargamos la scene o la vista principal
    renderScene(route, navigator) {
        return (
            <ListView style={styles.listContainer}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }

    //este metodo se ejecutara igual veces que el numero de elementos que contenga el arreglo
    //rowData contiene el objeto del arrglo
    renderRow(rowData, sectinoID, rowID){
        var thumb="http://i.imgur.com/x2rx1g0.jpg";
        if(rowData.thumbnail && rowData.thumbnail.path && rowData.thumbnail.extension)
            thumb=`${rowData.thumbnail.path}/standard_fantastic.${rowData.thumbnail.extension}`


        return(
            <TouchableHighlight  onPress={() => this.rowPressed(rowData)} 
                    underlayColor='#dddddd' >
                <View>
                    <View style={styles.listRowContainer}>
                        <Image style={styles.listThumb} source={{uri: thumb}}/>
                            <View style={styles.listTextContainer}>
                                <Text style={styles.listRowResult}> 
                                    {rowData.name} 
                                </Text>
                            </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    //cuando presionemos un elemento de la lista nos enviara a la descripcion del mismo
    rowPressed(superHeroeId)
    {
        console.log("id"+superHeroeId.id)  
        let superHero = this.props.result.filter(prop =>prop.id===superHeroeId.id)[0];
        console.log("superHero: "+superHero)
        this.gotoProfile(superHero);
    }

    gotoProfile(superHeroe) {
        console.log("superHero: "+JSON.stringify(superHeroe))
        this.props.navigator.push({
            id: 'PersonPage',
            name: 'Profile heroe',
            passProps: {result:superHeroe}
        });
    }
}



/**Declaramos la funcionalidad de los lementos de la barra de navegacion*/
var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, nextState) {
        return (
            <TouchableOpacity style={styles.listButtonLeft}
                              onPress={() => navigator.parentNavigator.pop()}>
                <Text style={styles.listButtonTextLeft}>
                    Back
                </Text>
            </TouchableOpacity>
        );
    },
    RightButton(route, navigator, index, nextState) {
        {
            /*return (
            <TouchableOpacity style={styles.listButtonRight}
                              onPress={() => navigator.parentNavigator.push({id: 'unknown'})}>
                <Text style={styles.listButtonTextRight}>
                    Menu
                </Text>
            </TouchableOpacity>
        );*/

        }

        return null;
    },
    Title(route, navigator, index, nextState) {
        return (
            <TouchableOpacity style={styles.listTitleButton}>
                <Text style={styles.listTitleText}>
                    List caracters
                </Text>
            </TouchableOpacity>
        );
    }
};


module.exports = HeroesResultPage;