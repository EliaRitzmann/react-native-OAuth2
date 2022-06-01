import * as React from 'react';
import * as WebBrosser from 'expo-web-browser';
import { makeRedirectUri, ResponseType, useAuthRequest } from 'expo-auth-session';
import { Text, Pressable, StyleSheet } from 'react-native';
import { getClientID } from '../api/getApiKey.js';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

WebBrosser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export const Login = (props) => {

    const [request, response, promptAsync] = useAuthRequest(
        {
            responseType: ResponseType.Token,
            clientId: "fa0bd564791744e99627c65e0a3d7d2f",
            scopes: ['user-read-email'],
            usePKCE: false,
            redirectUri: makeRedirectUri({
                native: 'react-native-OAuth2://10.11.1.165:19000/'
            }),
        },
        discovery
    );

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { access_token } = response.params;
            props.setToken(access_token);
        }
    }, [response]);

    return (
        <Pressable style={styles.button} title='Login' onPress={() => promptAsync()}>
            <Text style={styles.text}>Login</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
})