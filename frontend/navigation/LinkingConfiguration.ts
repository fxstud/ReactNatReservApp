/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      Main: 'main',
      Article: 'article',
      Login: 'login',
      Inscription: 'inscription',
      Modal: 'modal',
      NotFound: '*',
      Appointment: 'appointment',
      Contact: 'contact',
      Agenda: 'agenda',
      ProfileUser: 'profileuser',
    },
  },
};

export default linking;
