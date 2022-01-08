import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../theme';

const styles = StyleSheet.create({
    tab: {
        color: theme.colors.white,
        fontWeight: theme.fontWeights.bold,
    }
});

const AppBarTab = ({name, path}) => {
    return (
        <Link to={path}>
            <Text style={styles.tab}>{ name }</Text>
        </Link>
    );
};

export default AppBarTab;