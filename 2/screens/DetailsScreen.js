import React, {Component} from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Dimensions, KeyboardAvoidingView, Image} from 'react-native'

const styles = StyleSheet.create({
    flex : {
        flex : 1
    },
    image : {
        height : Dimensions.get('window').height * 0.4
    }
})

export default ({ route, navigation }) => {
    const {params} = route

    return (
        <View>
            <Image
            source={{
                uri : params.Poster
            }}
            style={styles.image}/>
            <View>
                <Text>{params.Title}</Text>
                <Text>{params.Year}</Text>
                <Text>{params.Type}</Text>
            </View>
        </View>
    )
}
