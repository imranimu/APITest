import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { useTheme } from 'react-native-paper';

import BaseLayout from '../components/BaseLayout'
import IconMap from '../components/IconMap';
import GlobalInput from '../components/GlobalInput';
import ScreenScroll from '../components/ScreenScroll';
import { RFValue } from '../lib';

const Login = ({ navigation }) => {

    const {colors} = useTheme();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {         
        navigation.navigate('Signup');
    };

    return ( 
        <BaseLayout>
            <ScreenScroll>
                <GlobalInput
                    placeholder="Username"
                    leftIcon={<IconMap type="Feather" name='user' size={ RFValue(22) } color={colors.textcolor} />}
                    onChangeText={username => setUsername(username)}
                    value={username}
                />
                <GlobalInput
                    placeholder="Password"
                    secureTextEntry={true}
                    leftIcon={<IconMap type="Feather" name='lock' size={RFValue(20)} color={colors.textcolor} />}
                    onChangeText={password => setPassword(password)}
                    value={password}
                /> 

                <Button
                    title='Login'
                    onPress={handleLogin} 
                />

                <TouchableOpacity onPress={() => navigation.push('Signup')}>
                    <View style={[styles.flexWrap]}>
                        <Text style={[{color: colors.textcolor}]}>
                            Don't have an account?
                        </Text> 
                        <IconMap 
                            type='AntDesign'
                            name='arrowright'
                            size={RFValue(18)}
                            color={colors.textcolor}
                        /> 
                    </View>
                </TouchableOpacity> 

            </ScreenScroll>
        </BaseLayout> 
    );
}

export default Login

const styles = StyleSheet.create({
    flexWrap:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        alignItems: "center"
    }
})