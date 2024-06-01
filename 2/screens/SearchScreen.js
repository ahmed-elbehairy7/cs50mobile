import React, {Component} from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Dimensions, KeyboardAvoidingView} from 'react-native'
import SearchResult from '../components/SearchResult'
import SearchTop from '../components/SearchTop'

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

export default class SearchScreen extends Component {
    state = {
        text : 'star',
        results : [],
        resultsCount : 0,
        page : 0
    }

    onChangeText = text => {
        this.setState({text})
    }

    search = async (page = null) => {
        const res = await fetch(`https://omdbapi.com/?apikey=a54f6854&s=${this.state.text}&page=${page}`)
        const JSONres = await res.json()
        const search = await JSONres.Search
        if (!page) {
            page = this.state.page + 1
        }
        this.setState({results : await JSONres.Search, resultsCount : await JSONres.totalResults, page})
    }

    render() {
        return (
            <View style={[styles.container, styles.center]}>
                <SearchTop {...this.state} search={this.search} onChangeText={this.onChangeText} />
                <FlatList
                style={styles.resultsview}
                contentContainerStyle={styles.center}
                data={this.state.results}
                renderItem={({item}) => (<SearchResult {...item} onPress={() => this.props.navigation.navigate('details', item)} />)}
                />
            </View>
        )
    }
}
