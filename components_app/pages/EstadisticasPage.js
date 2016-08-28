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

class Estadisticas extends Component {

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
                navigationBar={
                    <Navigator.NavigationBar style={styles.statsNavigator}
                                             routeMapper={NavigationBarRouteMapper} />
                } />
        );
    }
    renderScene(route, navigator) {

        let comics = this.props.result.comics.available ||0;
        let series = this.props.result.series.available ||0;
        let historias = this.props.result.stories.available ||0;
        let eventos = this.props.result.events.available ||0;
        let Total =comics+series+historias+eventos;

        return (
       <ScrollView style={styles.estatsContainer}>
           <FotoCircular
               result={this.props.result}/>
           <TouchableHighlight
               style={this.profileBoton(3)}
               underlayColor='#A947B6'>
               <Text style={styles.statsButtonHighlightText}>
                   TOTAL {Total}
               </Text>
           </TouchableHighlight>

           <TouchableHighlight
           style={this.profileBoton(0)}

           underlayColor='#A947B6'>
               <Text style={styles.statsButtonText}>
                  HISTORIAS {historias}
               </Text>
           </TouchableHighlight>

           <TouchableHighlight
               style={this.profileBoton(1)}
               underlayColor='#A947B6'>
               <Text style={styles.statsButtonText}>
                   COMICS {comics}
               </Text>
           </TouchableHighlight>

           <TouchableHighlight
               style={this.profileBoton(2)}
               underlayColor='#A947B6'>
               <Text style={styles.statsButtonText}>
                   SERIES {series}
               </Text>
           </TouchableHighlight>

           <TouchableHighlight
               style={this.profileBoton(4)}
               underlayColor='#A947B6'>
               <Text style={styles.statsButtonText}>
                 EVENTOS {eventos}
               </Text>
           </TouchableHighlight>



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
        if(btn ==3) obj.backgroundColor='#00A388'
        if(btn ==4) obj.backgroundColor='#00D571'

        return obj;

    }



    goToBio(){
        console.log("BIO")
    }
    goToStats(){
        console.log("STATS")
    }
    goToNotes(){
        console.log("NOTES")
    }
}

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, nextState) {
        return (
            <TouchableOpacity style={styles.statsButtonLeft}
                              onPress={() => navigator.parentNavigator.pop()}>
                <Text style={styles.statsButtonTextLeft}>
                    Back
                </Text>
            </TouchableOpacity>
        );
    },
    RightButton(route, navigator, index, nextState) {
        {/* return (
         <TouchableOpacity style={styles.statsButtonRight}
         onPress={() => navigator.parentNavigator.push({id: 'unknown'})}>
         <Text style={styles.statsButtonTextRight}>
         Menu
         </Text>
         </TouchableOpacity>
         );
         */
        }
        return null;
    },
    Title(route, navigator, index, nextState) {
        return (
            <TouchableOpacity style={styles.statsTitleButton}>
                <Text style={styles.statsTitleText}>
                    Statistics
                </Text>
            </TouchableOpacity>
        );
    }
};

module.exports = Estadisticas;