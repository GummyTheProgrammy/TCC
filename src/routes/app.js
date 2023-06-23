import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Home/index';
import Coletas from '../pages/Coletas/index';
import QRCode from '../pages/QRCode';
import HomeColetor from '../pages/HomeColetor';
import {useAuth} from '../contexts/auth'
import ScannerQRCode from '../pages/ScannerQRCode';
import InfoColeta from '../pages/InfoColeta';
import HomeQuiz from '../pages/HomeQuiz';
import Quiz from '../pages/Quiz';
import Coletor from '../pages/Coletor';
import Ranking from '../pages/Ranking';
import Historico from '../pages/Historico';
import Game from '../pages/Game';
//import Game from '../pages/Recicloteste';
import About from '../pages/About';
import Reciclotron from '../pages/ConversaoPontos/index';
import UseTerms from '../pages/UseTerms/index';
import Sobre from '../pages/Sobre/index';
import Desenvolvedores from '../pages/Desenvolvedores/index';

const AppStack = createStackNavigator();

const screenOptions = {
  headerShown: true,
  headerTransparent : true,
  headerShadowVisible : false,
  headerTitle : '', 
  headerLeft: null
}


function AppRoutes(){
  const {user} = useAuth();
  
  if(user.permissao==0){
    return(
      <AppStack.Navigator screenOptions={screenOptions}>
      <AppStack.Screen name="Dashboard" component={Dashboard} />
      <AppStack.Screen name="Coletas" component={Coletas} />
      <AppStack.Screen name="QRCode" component={QRCode} />
      <AppStack.Screen name="HomeQuiz" component={HomeQuiz}/>
      <AppStack.Screen name="Quiz" component={Quiz} />
      <AppStack.Screen name="Historico" component={Historico} />
      <AppStack.Screen name="Ranking" component={Ranking} />
      <AppStack.Screen name="Game" component={Game} />
      <AppStack.Screen name="About" component={About} />
      <AppStack.Screen name="Reciclotron" component={Reciclotron} />
      <AppStack.Screen name="UseTerms" component={UseTerms} />
      <AppStack.Screen name="Sobre" component={Sobre} />
      <AppStack.Screen name="Desenvolvedores" component={Desenvolvedores} />

      </AppStack.Navigator>
    )
  }

  if(user.permissao==1){
    return(
      <AppStack.Navigator screenOptions={screenOptions}>
      <AppStack.Screen name="HomeColetor" component={HomeColetor} />
      <AppStack.Screen name="ScannerQRCode" component={ScannerQRCode} />
      <AppStack.Screen name="InfoColeta" component={InfoColeta} />
      <AppStack.Screen name="Coletor" component={Coletor} />
      </AppStack.Navigator>
    )
  }

}

export default AppRoutes;