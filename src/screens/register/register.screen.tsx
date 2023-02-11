import {SafeAreaView, ScrollView, View} from 'react-native';
import {Appbar, Button, TextInput} from 'react-native-paper';

import {Platform} from 'react-native';
import {registerStyle} from './register.style'
import HeaderComponent from '../../components/header/header.component';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

function RegisterScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderComponent title="Regsiter" />
        <View  style={registerStyle.content}>
          <TextInput label="Name" />
          <TextInput label="Email" keyboardType="email-address" />
          <TextInput label="Password" secureTextEntry />
          <TextInput label="Confirm Password" secureTextEntry={true} />
          <TextInput label="Phone Number" keyboardType="phone-pad" />
          <Button mode="contained"
          style={registerStyle.button}
          > Register</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterScreen;
