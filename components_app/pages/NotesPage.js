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
    Image,
    TextInput
} from 'react-native';

/**Declaramos las variables globales*/
let styles = require('superHeroes/components_app/Styles');
var FotoCircular = require('superHeroes/components_app/componentes/circleImage');
let superHeroesAPI = require('superHeroes/components_app/connectionAPI/superHeroesAPI');
/**Llamamos la vista del loading y a su interfaz*/
let BusyIndicator = require('superHeroes/components_app/componentes/BusyIndicator');
let loaderHandler = require('superHeroes/components_app/componentes/LoaderHandler');
let Control = require('superHeroes/components_app/componentes/ControlPanelApp');


class NotesPage extends React.Component {
    constructor(props){
        super(props);
        //declaramos la lista
         this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            //dataSource contiene el arreglo de la respuesta este despues se lo pasaremos a la lista
            dataSource: this.ds.cloneWithRows(this.props.notes),
            superNote: "",
            error: ""
        }
    }

    //Render del navigator
    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.noteNavigator}
                        routeMapper={NavigationBarRouteMapper} />}/>
        );
    }

    //Cargamos la scene o la vista principal
    renderScene(route, navigator) {
        return (
                <View style={styles.notesContainer}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                        enableEmptySections={true}
                        renderHeader={()=> <FotoCircular
                            result={this.props.result}/>} />
                    {this.footer()}
                    <BusyIndicator />
                </View>
        );
    }

    handleSubmit(){

        if(this.state.superNote!== ""){
            loaderHandler.showLoader("Loading"); // Show indicator with message 'loading'
            var note=this.state.superNote;
            //Cada que envie una nota se vaciara el textInput
            this.setState({ superNote : "" })
            //Hacemos la conexion a la API de FireBase le pasamos el id del superheroe y la nota
            superHeroesAPI.createSuperHeroeNotes(this.props.result.id  , note)
                .then((data)=> {
                    superHeroesAPI.getSuperHeroesNotes(this.props.result.id)
                        .then((data) =>{
                            loaderHandler.hideLoader();  // Hide the loader
                            this.setState({
                                dataSource:this.ds.cloneWithRows(data)
                            })
                        })

                }).catch((error)=>{
                loaderHandler.hideLoader();  // Hide the loader
                this.setState({ error }) })
        }else{
            Control.alertAceptar("Campo \"Nota\" vacio");
        }


    }

    //Cada que hacemos uncambio en el textinput se actualiza el valor de supernote que es la nota que  se enviara
    handleChange(e){
      this.setState({ superNote: e.nativeEvent.text })
    }


    //Creamos el pie de pagina de la lista el cual sera un textInput y un botom
    footer(){
        return(

            <View style={styles.notesFooterContainer}>
                <TextInput style={styles.notesSearchInput}
                           value={this.state.superNote}
                           onChange={this.handleChange.bind(this)}
                           placeholder="Nota"/>
                <TouchableHighlight
                    style={styles.notesButton}
                    onPress={this.handleSubmit.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={styles.notesButtonText}>
                        ENVIAR
                    </Text>
                </TouchableHighlight>
            </View>

        )
    }
    //Llenamos la lista con las notas
    renderRow(rowData){
        return (
            <TouchableHighlight onPress={() => this.rowPressed(rowData)}
                                underlayColor='#dddddd'>
            <View>
                <View style={styles.notesRowContainer}>
                    <Text style={styles.notesRowText}>
                        {rowData}
                    </Text>
                </View>
            </View>
            </TouchableHighlight>
        )
    }

    //este metodo se puede agregar a la lista si se le quiere agregar un pressed a cada una de las notas de super heroe
    rowPressed(superHeroeId)
    {
         //this.setState({ superNote: superHeroeId})
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
        {/* return (
         <TouchableOpacity style={styles.noteButtonRight}
         onPress={() => navigator.parentNavigator.push({id: 'unknown'})}>
         <Text style={styles.noteButtonTextRight}>
         Menu
         </Text>
         </TouchableOpacity>
         );*/
        }
        return null;
    },
    Title(route, navigator, index, nextState) {
        return (
            <TouchableOpacity style={styles.noteTitleButton}>
                <Text style={styles.noteTitleText}>
                    Notes
                </Text>
            </TouchableOpacity>
        );
    }
};


module.exports = NotesPage;