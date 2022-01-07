import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: theme.colors.appBar
    },
    bar: {
        color: theme.colors.appBarText,
        fontWeight: theme.fontWeights.bold
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab name="Repositories" />
        </View>
    )
};

export default AppBar;