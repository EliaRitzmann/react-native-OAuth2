import React from 'react'
import { Text, Pressable, StyleSheet } from 'react-native';

export const Logout = (props) => {

    function logout() {
        props.setToken(null)
    }

  return (
    <Pressable style={styles.button} title='Logout' onPress={() => logout()}>
        <Text style={styles.text}>Logout</Text>
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
}
)