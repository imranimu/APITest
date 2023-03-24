import { StyleSheet, Text, View } from 'react-native'

import { Button, Input, Icon } from 'react-native-elements';


import React from 'react'

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {         
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder='Username'
                leftIcon={<Icon name='user' size={24} color='black' />}
                onChangeText={setUsername}
                value={username}
            />
            <Input
                placeholder='Password'
                secureTextEntry={true}
                leftIcon={<Icon name='lock' size={24} color='black' />}
                onChangeText={setPassword}
                value={password}
            />

            <Button
                title='Login'
                onPress={handleLogin}
            />

        </View>
    );
}

export default Login

const styles = StyleSheet.create({})