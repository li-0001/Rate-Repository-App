import React from 'react';
import { View, StyleSheet } from "react-native";
import { Route, Switch, Redirect } from 'react-router-native';
import { Formik } from 'formik';
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.appBackground,
    },
});

const initialSignInValues = {
    username: '',
    password: ''
};

const onSubmit = (values) => {
    console.log(values);
};

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Route path="/signin" exact>
                    <Formik initialValues={initialSignInValues} onSubmit={onSubmit}>
                        <SignIn onSubmit={onSubmit} />
                    </Formik>
                </Route>
                <Redirect to="/" />
            </Switch>
        </View>
    );
};

export default Main;