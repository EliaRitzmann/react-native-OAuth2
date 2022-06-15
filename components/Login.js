import * as React from 'react';
import * as WebBrosser from 'expo-web-browser';
import { makeRedirectUri, ResponseType, useAuthRequest } from 'expo-auth-session';
import { Text, Pressable, StyleSheet, Platform } from 'react-native';
import { getClientID } from '../api/getApiKeys';

WebBrosser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const path = () => {
    switch(Platform.OS) {
        case "ios":
            return ""
        case "web":
            return "/"
    }
}

export const Login = (props) => {

    const [request, response, promptAsync] = useAuthRequest(
        {
            responseType: ResponseType.Token,
            clientId: getClientID(),
            scopes: ['user-read-email', 'user-top-read'],
            usePKCE: false,
            redirectUri: makeRedirectUri({
                scheme: 'react-native-oauth2',
                path: path()
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