import React, {useState,useEffect }  from 'react'
import { View,Text, TouchableOpacity,TextInput, StyleSheet,FlatList } from 'react-native'

import GlobalStyles from '../../styles'
import LocalStyles from './styles.js'
import DefColors from '../../styles/defaultColors'
import Config from '../../config/config'
import {useAuth} from '../../contexts/auth'
import api from '../../services/api.js'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default function({route,navigation,}){    
    return(
        <View style={GlobalStyles.container}>
            
        </View>
    );
}