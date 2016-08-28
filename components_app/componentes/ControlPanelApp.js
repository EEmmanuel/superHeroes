import { Alert,  NetInfo } from 'react-native';

//Aqui registramos todas las posibles acciones del usuario en la app.

var ControlPanelApp = {

    /**
     * @param  {String}  mensaje | valor que se mostrara en una alert con un solo boton 'aceptar'
     */
    alertAceptar: function(mensaje) {
        Alert.alert('Información',mensaje,
            [
                {
                    text:'Aceptar'
                }
            ]);
    },



}

module.exports = ControlPanelApp;
