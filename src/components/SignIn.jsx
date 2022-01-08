import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import Text from "./Text";


const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        padding: 15
    },
    textBox: {
        borderWidth: 1,
        borderColor: theme.colors.textSecondary,
        padding: 10,
        marginBottom: 8,
    },
    button: {
        backgroundColor: theme.colors.primary,
        color: '#FFFFFF',
        textAlign: "center",
        padding: 10
    }
});

const SignIn = ({onSubmit}) => {
    return (
        <View style={styles.container}>
            <FormikTextInput style={styles.textBox} name="username" placeholder="Username" />
            <FormikTextInput style={styles.textBox} name="password" placeholder="Password" secureTextEntry />
            <TouchableWithoutFeedback onPress={onSubmit}>
                <Text style={styles.button}> Sign In </Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default SignIn;