import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return (
    <View style={styles.button}>
      <Text>Press me: {props.title}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: "center",
  },
});

export { Button, ButtonProps };