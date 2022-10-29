/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { Header } from '../components/Themed';

import Colors from '../constants/Colors';
import { UserContext, UserContextProvider } from '../contexts/UserContext';
import useColorScheme from '../hooks/useColorScheme';
import AgendaScreen from '../screens/AgendaScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import ArticleScreen from '../screens/ArticleScreen';
import ContactScreen from '../screens/ContactScreen';
import InscriptionScreen from '../screens/InscriptionScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ProfileUserScreen from '../screens/ProfileUserScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { login } from '../services/AuthService';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { ContactProps } from '../components/ProfileUser';



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <UserContextProvider>
        <Header />
        <RootNavigator />
      </UserContextProvider>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const {token} = React.useContext(UserContext);
  if(!token){
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Article" component={ArticleScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Inscription" component={InscriptionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    );
  }else{
    return (
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Article" component={ArticleScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    );
  }
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Accueil',
          headerShown:false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      />
      <BottomTab.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          title: 'Appointment',
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Agenda"
        component={AgendaScreen}
        options={{
          title: 'Agenda',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => <TabBarIcon name="wechat" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="ProfileUser"
        component={ProfileUserScreen}
        options={{
          title: 'User Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const initContactsState= {
  contacts: [{firstname:"Joan", lastname:"François",
          phone:"0143417250", email:"j.francois@cfa-insta.fr"},
          {firstname:"Mounira", lastname:"Coste",
          phone:"0143417250", email:"j.francois@cfa-insta.fr"},
          {firstname:"Faizah", lastname:"Badabhai",
          phone:"0143417250", email:"f.badabhai@cfa-insta.fr"},
          {firstname:"Selin", lastname:"Sert",
          phone:"0143417250", email:"s.sert@cfa-insta.fr"}]
}

