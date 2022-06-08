import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';

export const TopTracks = (props) => {

    const [json, setJson] = useState();
    const tracks = []

    async function getData() {
        await fetch('https://api.spotify.com/v1/me/top/tracks?limit=5', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+props.token
          }
        })
        .then((response) => response.json())
        .then(data => setJson(data))
    }

    useEffect(() => {
      getData()
    }, [])

    console.log(json)
    if (json != null) {
        json.items.forEach(item => {
            tracks.push(item.artists[0].name +" - ")
            tracks.push(item.name +"\n")
        })
    }

    return (
        <View>
            <Text>
                {tracks}
            </Text>
        </View>
    )
}
