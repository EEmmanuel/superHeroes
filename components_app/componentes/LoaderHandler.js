/**
 * *********************************************************************************
 * *********************************************************************************
 *
 * Es la interfaz que escucha los eventos del componente BusyIndicator es una vista
 * semi transparente con texto indicando que se esta ejecutando una acción
 *
 * *********************************************************************************
 * *********************************************************************************
 **/



import { DeviceEventEmitter } from 'react-native';

const loaderHandler = {
    hideLoader () {
        DeviceEventEmitter.emit('changeLoadingEffect', {isVisible: false});
    },
    showLoader (title) {
        DeviceEventEmitter.emit('changeLoadingEffect', {title, isVisible: true});
    }
};

module.exports = loaderHandler;