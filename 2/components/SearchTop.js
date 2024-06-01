import React from 'react'
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native'


const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    center : {
        alignItems : 'center',
        justifyContent : 'center'
    },
    textinput : {
        backgroundColor : '#eee',
        borderWidth : 1,
        marginVertical : 20
    },
    sixthOfWidth : {
        width : Dimensions.get('window').width * 0.6
    },
    searchbutton : {
        backgroundColor : '#333',
        height : 30
    },
    buttontext : {
        color : 'white'
    },
    resultsview : {
        borderTopWidth : 1,
        borderTopColor : '#444',
        marginTop : 15,
        paddingTop : 15,
        width : Dimensions.get('window').width,
    }
})

export default props => (
    <View style={styles.center}>
    <KeyboardAvoidingView
    behavior='padding' >
    <TextInput
    style={[styles.textinput, styles.sixthOfWidth]}
    placeholder="Search for movie"
    value={props.text}
    onChangeText={props.onChangeText}
    />
    </KeyboardAvoidingView>
    <TouchableOpacity
    style={
        [styles.searchbutton,
        styles.sixthOfWidth,
        styles.center]}
    onPress={props.search}
        >
    <Text style={styles.buttontext}>
        Search
    </Text>
    </TouchableOpacity>
    {props.resultsCount > 0 ? <Text>Total results: {props.resultsCount}</Text> : null}
    </View>
)
