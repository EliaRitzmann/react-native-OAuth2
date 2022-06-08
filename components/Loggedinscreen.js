import React from 'react'
import { Logout } from './Logout';
import { TopTracks } from './TopTracks'
import { StyleSheet, View, Text } from 'react-native';

export const Loggedinscreen = (props) => {

  return (
      <View>
        <Logout setToken={props.setToken}/>
        <TopTracks token={props.token} />
      </View>
  )
}
