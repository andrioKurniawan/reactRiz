import * as React from 'react';
import { Button, View, TextInput, StyleSheet, Alert } from 'react-native';

// Data pengguna yang valid
const validUserData = {
    username: 'r',
    password: 'r'
};

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        // Lakukan pengecekan login
        if (username === validUserData.username && password === validUserData.password) {
            // Jika login berhasil, navigasikan ke halaman Transaction
            navigation.navigate('Home');
        } else {
            // Jika login gagal, tampilkan pesan kesalahan
            Alert.alert('Login Failed', 'Username or password is incorrect.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Password"
                secureTextEntry
            />
            <Button
                title="Login"
                onPress={handleLogin}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});
