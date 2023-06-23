import {StyleSheet, StatusBar} from 'react-native';
import {COLORS,FONTS,SIZES} from '../../constants'


export default StyleSheet.create({

    countdowntimer :{
        position: 'relative',
        alignSelf:'center',
        width: 60,
        backgroundColor: '#ffa800',
        marginTop:50,
        left: 70,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#1f2aff',
    },
    
    texto : {
        margin: 4,
        fontSize: 20,
        alignSelf:'center',
        color: '#1f2aff',
        fontWeight: 'bold',
    }
    /*
    ,footButtons :{
        backgroundColor: COLORS.lightGray, 
        height: 70, 
        width: '80%', 
        
        //marginVertical: 12,
        //paddingLeft: 10,
        //paddingRight: 0,
        
        //borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',

        shadowColor: COLORS.black,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        flex: 1,
    }
    */

})