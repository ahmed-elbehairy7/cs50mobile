import React from 'react';
import {
    View,
    TextInput,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    Dimensions
} from 'react-native';
import propTypes from 'prop-types';

const styles = StyleSheet.create({
    timerInput: {
        paddingBottom: 50
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
    },
    inputLabel: {
        fontWeight: 600,
        fontSize: 15,
        marginRight: 20,
    },
    inputItem: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 2,
        width: Dimensions.get('window').width / 2
    },
    typeLabel: {
        fontSize: 25,
        fontWeight: 700,
    },
    typeView: {
        display: 'flex',
        alignItems: 'center',
    },
});

export const TypeInput = (props) => {
    return (
        <View style={styles.typeView}>
            <Text style={styles.typeLabel}>{props.name}</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>minutes:</Text>
                <TextInput
                    onChangeText={(change) => props.onChangeText(change, 'minutes')}
                    style={styles.inputItem}
                    value={props.minutes}
                    placeholder="minutes"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>seconds:</Text>
                <TextInput
                    onChangeText={(change) => props.onChangeText(change, 'seconds')}
                    style={styles.inputItem}
                    value={props.seconds}
                    placeholder="seconds"
                    keyboardType="numeric"
                />
            </View>
        </View>
    );
};

TypeInput.propTypes = {
    first: propTypes.object.isRequired,
    second: propTypes.object.isRequired,
};

const TimerInput = (props) => {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.timerInput}>
            <TypeInput
                {...props.work}
                name="Work"
                onChangeText={(change, time) =>
                    props.onChangeText(change, 'work', time)
                }
            />
            <TypeInput
                {...props.rest}
                name="Break"
                onChangeText={(change, time) =>
                    props.onChangeText(change, 'rest', time)
                }
            />
        </KeyboardAvoidingView>
    );
};

export default TimerInput;
