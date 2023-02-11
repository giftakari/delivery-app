import {SafeAreaView} from 'react-native';
import {View} from 'react-native'
import {Avatar, Button, Card, Text, TextInput} from 'react-native-paper';
import CardTitle from 'react-native-paper/lib/typescript/components/Card/CardTitle';
import { loginStyle } from './long.styles';


//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

function Loginscreen() {
  return (
    <SafeAreaView style={loginStyle.content}>
        <View style={loginStyle.view}>
        <Card>
        <Card.Title title="Delivery App" titleStyle={loginStyle.cartTitle} >
            </Card.Title>
        <Card.Content>
          <TextInput label="Email" keyboardType="email-address"></TextInput>
          <TextInput label="Password" secureTextEntry={true}></TextInput>
          <Button mode="outlined" style={loginStyle.cardButton}>Forgot Emal / Password</Button>
          <Button mode="contained" style={loginStyle.cardButton}>Login</Button>
          <Button mode="elevated" style={loginStyle.cardButton}>Register</Button>
        </Card.Content>
      </Card>
        </View>
     
    </SafeAreaView>
  );
}

export default Loginscreen;
