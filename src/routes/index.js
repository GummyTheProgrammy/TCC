import React from 'react';
import { View, ActivityIndicator } from "react-native";

import {useAuth} from '../contexts/auth'

import AuthRoutes from '../routes/auth';
import AppRoutes from '../routes/app';
import { COLORS } from '../constants';


const Routes = () => {
  const {signed, loading} = useAuth();


   //return signed? <AppRoutes /*permissao={permissao}*/ />:<AuthRoutes/>;
   return loading? <View style={{ flex: 1, justifyContent: "center", alignItems: "center",  backgroundColor: COLORS.primary }}>
                      <ActivityIndicator size="large" color= {COLORS.white} />
                    </View>
   : (signed? <AppRoutes/>:<AuthRoutes/>)
};

export default Routes;