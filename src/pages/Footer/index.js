import React, {useState, useEffect }  from 'react'
import { View, TouchableOpacity, Image, ScrollView } from 'react-native';
import LocalStyles from './style.js'
import {COLORS,FONTS, icons, images, SIZES} from '../../constants'

const Footer = ({ navigation, init }) => {

  const [load, setLoad] = useState(true);
  const [lstRanking, setLstRanking] = useState([{usuario: 'carregando'}]);
  const [kgReciclados, setKgReciclados] = useState(0)
  const [userPoints,setUserPoints] = useState(0);

  const setHomeVariables =(contents) =>{
    //console.log(contents),
    //setLstRanking(contents[0]),
    //setKgReciclados(contents[1]),
    //setUserPoints(contents[2].pontos)
}

  useEffect(() => {
    navigation.addListener('focus', async ()=>setLoad(!load))
    init()
    .then(contents=> setHomeVariables(contents))
    .catch(error => console.log('Error during init:', error));
  }, [load,navigation]);

  return (
    <ScrollView
      horizontal={false}
      style={LocalStyles.footerContainer}>
      <View style={LocalStyles.footerRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
          style={LocalStyles.footerButton}>
          <Image
            source={icons.home}
            style={LocalStyles.footerButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Game');
          }}
          style={LocalStyles.footerButton}>
          <Image
            source={icons.game}
            style={LocalStyles.footerButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('About');
          }}
          style={LocalStyles.footerButton}>
          <Image
            source={icons.about}
            style={LocalStyles.footerButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Footer;