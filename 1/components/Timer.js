import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

const styles = StyleSheet.create({
    timerText: {
        fontSize: 50,
        fontWeight: 500,
    },
    timerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    row: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "space-between"
    },
    button: {
        marginHorizontal: 10,
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#000',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'sans-serif'
    }
});

export default class Timer extends React.Component {
    static propTypes = {
        minutes: propTypes.number.isRequired,
        seconds: propTypes.number.isRequired,
    };

    componentDidMount() {
        this.props.count()
    }

    render() {
        return (
            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{this.props.minutes}:{this.props.seconds}</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={this.props.onReset}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.props.onPlayOrPause}
                    ><Text style={styles.buttonText}>{this.props.playOrPause}</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

