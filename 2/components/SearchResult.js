import React, {Component} from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    postercontainer : {
        width : Dimensions.get('window').width / 4,
    },
    flex : {
        flex : 1
    },
    resultcontainer : {
        flexDirection : 'row',
        width : Dimensions.get('window').width,
        padding : 5,
        height : 150,
        borderBottomWidth : 1,
        borderBottomColor : 'black'
    },
    moviedata : {
        paddingLeft : 20,
        paddingVertical : 30,
        justifyContent : 'space-evenly'
    }
})

export default (props) => {
    return (
<TouchableOpacity onPress={props.onPress} key={props.imdbID}>
    <View style={styles.resultcontainer}>
    <View style={[styles.postercontainer]}>
    <Image source={{
        uri : props.Poster,
    }}
    style={styles.flex} />
    </View>
    <View style={styles.moviedata}>
    <Text>{props.Title}</Text>
    <Text>{props.Year}</Text>
    <Text>{props.Type}</Text>
    </View>
    </View>
</TouchableOpacity>)
}
