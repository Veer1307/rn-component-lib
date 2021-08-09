'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Button = function (props) {
    return (React__default['default'].createElement(reactNative.View, { style: styles.button },
        React__default['default'].createElement(reactNative.Text, null,
            "Press me: ",
            props.title,
            "!")));
};
var styles = reactNative.StyleSheet.create({
    button: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        alignItems: "center",
    },
});

exports.Button = Button;
