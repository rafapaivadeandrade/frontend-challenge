import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import colors from '../styles/colors';
import ProfileTabs from './ProfileTabs';
import Details from '../screens/Details';

const { Navigator, Screen } = createStackNavigator();


const AppRoutes: React.FC = () =>
  (
      <NavigationContainer>
        <Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: colors.secondWhite
           }
          }}
        >
          <Screen name="ProfileTabs" component={ProfileTabs}/>
          <Screen name="Details" component={Details}/>
       </Navigator>
     </NavigationContainer>
  )
export default AppRoutes;