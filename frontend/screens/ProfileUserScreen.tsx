import { ScrollView, StyleSheet } from 'react-native';
import ProfileUser from '../components/ProfileUser';
import ContactFormProps from '../components/ProfileUser';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ProfileUserScreen({ navigation }: RootTabScreenProps<'ProfileUser'>) {

  return (
    <View style={styles.container}>
      <ProfileUser onSave={()=>{
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


