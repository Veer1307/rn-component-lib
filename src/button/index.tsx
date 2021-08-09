import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return (
    <View style={styles.button}>
      <Text>I am second button: {props.title}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5,
    alignItems: "center",
  },
});

export { Button, ButtonProps };