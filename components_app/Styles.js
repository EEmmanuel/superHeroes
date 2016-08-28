/**
 * *********************************************************************************
 * *********************************************************************************
 *
 * Esta clase contiene los estilos de la app divididos por pantalla para que se
 * mas facil su mantenimiento
 *
 * *********************************************************************************
 * *********************************************************************************
 **/

var { StyleSheet, PixelRatio } = require('react-native')
var deviceScreen = require('Dimensions').get('window')

module.exports = StyleSheet.create({
    /**Splash screen*/
    splashContainer:{
        flex: 1,
        backgroundColor: '#246dd5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    splashTextContainer:{
        color: 'white',
        fontSize: 32,
    },
    /**End splash screen*/

    /**Login screen*/
    loginNavigator:{
        backgroundColor: '#246dd5',
        alignItems: 'center'
    },
    loginEscene:{
        marginTop:50,
        flex: 1,
    },
    loginButton:{
        flex: 1,
        justifyContent: 'center'
    },
    loginEsceneText:{
        alignSelf:'flex-end',
        fontSize:30,
        color:'white',
        fontWeight: 'bold'
    },
    /*Styles navigator*/
    loginTitleButton:{
        flex: 1,
        justifyContent: 'center'
    },
    loginButtonRightText:{
        color: 'white',
        margin: 10
    },
    loginButtonRight:{
        flex: 1,
        justifyContent: 'center'
    },
    loginNavbar:{
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: 320, //replace with screenWidth.
        paddingVertical: 5,
    },
    loginTitleText:{
        color: 'white',
        margin: 10,
        fontSize: 20,
        fontWeight:'bold'
    },
    /**End Login screen*/

    /**main screen*/
    principalContainer: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent:'center',
        backgroundColor: '#00C19E'

    },
    mainTitle: {
        marginBottom:20,
        fontSize:30,
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    },
    mainSearchInput: {
        height:50,
        padding:4,
        marginRight:5,
        fontSize:28,
        borderWidth:1,
        borderColor:'white',
        borderRadius:8,
        color:'white',
        fontWeight: 'bold'
    },
    mainButtonText: {
        alignSelf:'center',
        fontSize:28,
        color:'white',
        fontWeight: 'bold'
    },
    mainButton: {
        height:60,
        flexDirection:'row',
        backgroundColor: '#0094E0',
        marginBottom:10,
        marginTop:10,
        alignSelf:'stretch',
        justifyContent:'center'

    },
    mainDisclaimer:{
        textAlign:'center',
        color:'white',
        marginBottom:5
    },
    mainMsgError:{
        textAlign:'center',
        color:'yellow',
        marginBottom:5
    },
    /*Styles navigator*/
    mainNavigator:{
        backgroundColor: '#246dd5',
        alignItems: 'center',

    },
    mainTitleText:{
        color: 'white',
        margin: 10,
        fontSize: 17,
        fontWeight:'bold',
        justifyContent:'center'
    },
    mainTitleButton:{
        flex: 1,
        justifyContent: 'center'
    },
    mainButtonLeft:{
        flex: 1,
        justifyContent: 'center'
    },
    mainButtonTextLeft:{
        color: 'white',
        margin: 10
    },
    /**End main screen*/


    /**listResult screen*/

    listContainer: {
        marginTop: 50,
        flex:1
    },
    listThumb: {
        width:80,
        height: 80,
        marginRight: 10
    },
    listTextContainer: {
        flex:1
    },
    listRowResult: {
        fontSize:25,
        color:"#48BBEC",
        fontWeight: "bold"
    },
    listRowContainer: {
        padding:10,
        flexDirection:"row",
    },
    /*Styles navigator*/
    listNavigator:{
        backgroundColor: '#246dd5',
        alignItems: 'center'
    },
    listTitleText:{
        color: 'white',
        margin: 10,
        fontSize: 16
    },
    listTitleButton:{
        flex: 1,
        justifyContent: 'center'
    },
    listButtonLeft:{
        flex: 1,
        justifyContent: 'center'
    },
    listButtonTextLeft:{
        color: 'white',
        margin: 10
    },
    listButtonRight:{
        flex: 1,
        justifyContent: 'center'
    },
    listButtonTextRight:{
        color: 'white',
        margin: 10,
    },
    /**End listResult screen*/


    /**Profile screen*/
    circleImageContainer:{
        backgroundColor: '#00C19E',
        paddingBottom:10
    },
    circleImageName:{
       alignSelf:'center',
        fontSize: 21,
        marginTop:10,
        marginBottom:5,
        color:'white',
        fontWeight:'bold'
    },
    circleImagePhoto:{
       height:125,
        width:125,
        borderRadius:65,
        marginTop:10,
        alignSelf:'center'
    },
    circleImageHandle:{
        fontSize:16,
        alignSelf:'center',
        color:'white'
    },
    profileContainer:{
        marginTop: 50,
        flex:1
    },
    profileImage:{
       height:350
    },
    profileButtonText:{
        fontSize:28,
        color:'white',
        alignSelf:'center',
        fontWeight:'bold'
    },
    profileMsgError:{
        textAlign:'center',
        color:'red',
        marginBottom:5,
        fontSize:10,
    },
    /*Styles navigator*/
    profileNavigator:{
        backgroundColor: '#246dd5',
        alignItems: 'center'
    },
    profileTitleText:{
        color: 'white',
        margin: 10,
        fontSize: 16
    },
    profileTitleButton:{
        flex: 1,
        justifyContent: 'center'
    },
    profileButtonLeft:{
        flex: 1,
        justifyContent: 'center'
    },
    profileButtonTextLeft:{
        color: 'white',
        margin: 10
    },
    profileButtonRight:{
        flex: 1,
        justifyContent: 'center'
    },
    profileButtonTextRight:{
        color: 'white',
        margin: 10,
    },
    /**End Profile screen*/


    /**Estadisticas screen*/
    estatsContainer:{
        marginTop:50,
        flex: 1,
        backgroundColor: '#00C19E',
    },
    statsButtonText:{
        color: 'white',
        fontSize: 18,
        alignSelf:'center'
    },
    statsRowContaner:{
      padding:12
    },
    statsRowTitle:{
        color:'#48BBEC',
        fontSize:18
    },
    statsRowContent:{
        fontSize:22
    },
    statsButtonHighlightText:{
        color: 'white',
        fontSize: 28,
        alignSelf:'center',
        fontWeight:'bold'
    },
    /*Styles navigator*/
    statsNavigator:{
        backgroundColor: '#246dd5',
        alignItems: 'center'
    },
    statsTitleText:{
        color: 'white',
        margin: 10,
        fontSize: 16
    },
    statsTitleButton:{
        flex: 1,
        justifyContent: 'center'
    },
    statsButtonLeft:{
        flex: 1,
        justifyContent: 'center'
    },
    statsButtonTextLeft:{
        color: 'white',
        margin: 10
    },
    statsButtonRight:{
        flex: 1,
        justifyContent: 'center'
    },
    statsButtonTextRight:{
        color: 'white',
        margin: 10,
    },
    /**End Estadisticas screen*/



    /**Biografia screen*/
    bioContainer:{
        marginTop:50,
        flex: 1,
        backgroundColor: '#00C19E',
    },
    bioButtonText:{
        color: 'white',
        fontSize: 18,
        alignSelf:'center'
    },
    bioRowContaner:{
        padding:12,
        backgroundColor:'#2F485F'
    },
    bioRowTitle:{
        color:'#48BBEC',
        fontSize:18
    },
    bioRowContent:{
        fontSize:22,
        color:'white'
    },
    /*Styles navigator*/
    bioNavigator:{
        backgroundColor: '#246dd5',
        alignItems: 'center'
    },
    bioTitleText:{
        color: 'white',
        margin: 10,
        fontSize: 16
    },
    bioTitleButton:{
        flex: 1,
        justifyContent: 'center'
    },
    bioButtonLeft:{
        flex: 1,
        justifyContent: 'center'
    },
    bioButtonTextLeft:{
        color: 'white',
        margin: 10
    },
    bioButtonRight:{
        flex: 1,
        justifyContent: 'center'
    },
    bioButtonTextRight:{
        color: 'white',
        margin: 10,
    },
    /**End Biografia screen*/


    /**WebView screen*/
    webContainer:{
        flex: 1,
        backgroundColor: '#F6F6E6',
        flexDirection:'column'
    },
    /*Styles navigator*/
    webNavigator:{
        backgroundColor: '#246dd5',
        alignItems: 'center'
    },
    webTitleText:{
        color: 'white',
        margin: 10,
        fontSize: 16
    },
    webTitleButton:{
        flex: 1,
        justifyContent: 'center'
    },
    webButtonLeft:{
        flex: 1,
        justifyContent: 'center'
    },
    webButtonTextLeft:{
        color: 'white',
        margin: 10
    },
    webButtonRight:{
        flex: 1,
        justifyContent: 'center'
    },
    webButtonTextRight:{
        color: 'white',
        margin: 10,
    },
    /**End WebView screen*/


    /**Notes screen*/
    notesContainer:{
        marginTop:50,
        flex: 1,
        backgroundColor: '#00C19E',
        flexDirection:'column'
    },
    notesButtonText:{
        fontSize: 20,
        color: 'white',
        fontWeight:'bold'
    },
    notesButton:{
    height: 60,
        backgroundColor: '#0094E0',
        flex:3,
        alignItems:'center',
        justifyContent:'center'
    },

    notesSearchInput:{
        height: 60,
        padding:10,
        fontSize:18,
        color: '#111',
        flex:10,
      fontWeight:'bold'
    },
    notesRowContainer:{
        padding:10,
        backgroundColor: '#00D571',
    },
    notesRowText:{
        fontSize:18,
        color: 'white',
    },
    notesFooterContainer:{
        flexDirection:'row',
        backgroundColor: '#E3E3E3',
        alignItems: 'center',
    },
    /*Styles navigator*/
    noteNavigator:{
        backgroundColor: '#246dd5',
        alignItems: 'center'
    },
    noteTitleText:{
        color: 'white',
        margin: 10,
        fontSize: 16
    },
    noteTitleButton:{
        flex: 1,
        justifyContent: 'center'
    },
   noteButtonLeft:{
        flex: 1,
        justifyContent: 'center'
    },
    noteButtonTextLeft:{
        color: 'white',
        margin: 10
    },
    noteButtonRight:{
        flex: 1,
        justifyContent: 'center'
    },
    noteButtonTextRight:{
        color: 'white',
        margin: 10,
    },
    /**End Notes screen*/
    /**ejemplos*/
    /*
     scrollView: {
     backgroundColor: '#B99BC4',
     },
     controlPanelText: {
     color:'white',
     },
     welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 25,
     },
     categoryLabel: {
     fontSize: 15,
     textAlign: 'left',
     left: 10,
     padding:10,
     fontWeight:'bold',
     },
     row: {
     flexDirection: 'row',
     backgroundColor:'white',
     borderRadius: 0,
     borderWidth: 0,
     padding:0,
     borderTopWidth: 1 / PixelRatio.get(),
     borderColor: '#d6d7da',
     padding:10,
     alignItems: 'center'
     }
     btn:{
     backgroundColor:'#96E243',
     marginLeft:10,
     paddingRight:10,
     padding:15,
     marginTop:15,
     marginBottom:10,
     borderRadius:4,
     width: deviceScreen.width*.9,
     }
     */

});
