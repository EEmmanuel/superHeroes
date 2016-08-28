/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    View,
    TouchableOpacity,

    BackAndroid
} from 'react-native';

let SplashPage          = require('./components_app/pages/SplashPage');
let LoginPage           = require('./components_app/pages/LoginPage');
let MainPage            = require('./components_app/pages/MainPage');
let PersonPage          = require('./components_app/pages/PersonPage');
let ListResultsHeroes   = require('./components_app/pages/HeroesResultPage');
let NoNavigatorPage     = require('./components_app/pages/NoNavigatorPage');
let EstadisticasPage    = require('./components_app/pages/EstadisticasPage');
let BiografiaPage       = require('./components_app/pages/BiografiaPage');
let WebViewPage         = require('./components_app/pages/WebViewPage');
let NotesPage           = require('./components_app/pages/NotesPage');


/**Codigo para que, el boton back de un dispositivo Android trabaje correctamente*/
var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
    return false;
  }
  _navigator.pop();
  return true;
});
class superHeroes extends Component {


  render() {
    return (
        <Navigator
            initialRoute={{id: 'SplashPage', name: 'Index'}}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => {
              if (route.sceneConfig) {
                return route.sceneConfig;
              }
              return Navigator.SceneConfigs.FloatFromRight;
            }} />
    );
  }
  renderScene(route, navigator) {
    _navigator =navigator;
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return <SplashPage
          navigator={navigator} />
    }

    if (routeId === 'LoginPage') {
      return <LoginPage
          navigator={navigator} />
    }

    if (routeId === 'MainPage') {
      return <MainPage
          navigator={navigator} />
    }

    if (routeId === 'PersonPage') {
      return <PersonPage
          navigator={navigator} {...route.passProps} />/*Con esta linea pasamos datos de una vista a otra*/
    }

    if (routeId === 'ResultPage') {

      return <ListResultsHeroes
          navigator={navigator} {...route.passProps} /> /*Con esta linea pasamos datos de una vista a otra*/
    }

    if (routeId === 'EstadisticasPage') {
      return <EstadisticasPage
          navigator={navigator} {...route.passProps} />/*Con esta linea pasamos datos de una vista a otra*/
    }

    if (routeId === 'BiografiaPage') {
      return <BiografiaPage
          navigator={navigator} {...route.passProps} />/*Con esta linea pasamos datos de una vista a otra*/
    }

    if (routeId === 'WebViewPage') {
      return <WebViewPage
          navigator={navigator} {...route.passProps} />/*Con esta linea pasamos datos de una vista a otra*/
    }

    if (routeId === 'NotesPage') {
      return <NotesPage
          navigator={navigator} {...route.passProps} />/*Con esta linea pasamos datos de una vista a otra*/
    }

    if (routeId === 'NoNavigatorPage') {
      return <NoNavigatorPage
          navigator={navigator} />
    }

    return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => navigator.pop()}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>View Unknown :(</Text>
          </TouchableOpacity>
        </View>
    );
  }


  back(navigator) {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      console.log("entro"+navigator.name)

      return false;
    });
  }


}


AppRegistry.registerComponent('superHeroes', () => superHeroes);
