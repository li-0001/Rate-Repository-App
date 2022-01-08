import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from "./AppBarTab";
import theme from "../theme";

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
            <ScrollView horizontal style={{flexDirection:'row'}}>
                <AppBarTab name="Repositories" path="/" />
                <AppBarTab name="   "/>
                <AppBarTab name="Sign In" path="/signin" />
            </ScrollView>
        </View>
    )
};

export default AppBar;