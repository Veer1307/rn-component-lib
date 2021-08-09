/* eslint-disable */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

var Button = function (props) {
    return (React.createElement(View, { style: styles.button },
        React.createElement(Text, null,
            "Press me: ",
            props.title,
            "!")));
};
var styles = StyleSheet.create({
    button: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        alignItems: "center",
    },
});

export { Button };
