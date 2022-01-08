import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import theme from "../theme";

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

const initialSignInValues = {
    username: '',
    password: ''
};

const onSubmit = (values) => {
    console.log(values);
};

const SignInForm = ({ onSubmit }) => {
    return <View style={styles.container}>
        <FormikTextInput style={styles.textBox} name="username" placeholder="Username" />
        <FormikTextInput style={styles.textBox} name="password" placeholder="Password" secureTextEntry />
        <TouchableWithoutFeedback onPress={onSubmit}>
            <Text style={styles.button}>Sign In</Text>
        </TouchableWithoutFeedback>
    </View>;
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required!'),
    password: yup
        .string()
        .required('Password is required!'),
});

const SignIn = () => {
    return (
        <Formik
            initialValues={initialSignInValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;