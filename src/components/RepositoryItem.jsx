import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    item: {
        backgroundColor: theme.colors.white,
        padding: 15,
    },
    info: {
        flexDirection: 'row',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius: 5,
    },
    textInfo: {
        flexShrink: 1,
    },
    name: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.bold,
        paddingBottom: 5
    },
    description: {
        color: theme.colors.textSecondary,
        paddingBottom: 5,
    },
    programmingLanguages: {
        flexDirection: 'row',
    },
    programmingLanguageBox: {
        backgroundColor: theme.colors.primary,
        color: '#FFFFFF',
        padding: 5,
        borderRadius: 5,
    },
    data: {
        flexDirection: 'row'
    },
    dataBox: {
        padding: 22
    },
    number: {
        fontWeight: theme.fontWeights.bold,
        textAlign: 'center',
    },
    label: {
        color: theme.colors.textSecondary,
        textAlign: 'center',
        marginTop: 3,
    }
});

const showShortedNumbers = (number) => {
    if(number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else if(number >= 1000) {
        return (number / 1000).toFixed(1) + 'k';
    } else {
        return number;
    }
};

const RepositoryList = ({ item }) => {
    return (
        <View style={styles.item}>
            <View style={styles.info}>
                <Image
                    style={styles.image}
                    source={{ uri:item.ownerAvatarUrl }} />
                <View style={styles.textInfo}>
                    <Text style={styles.name}>{ item.fullName }</Text>
                    <Text style={styles.description}>{ item.description }</Text>
                    <View style={styles.programmingLanguages}>
                        <Text style={styles.programmingLanguageBox}>{ item.language }</Text>
                    </View>
                </View>
            </View>
            <View style={styles.data}>
                <View style={styles.dataBox}>
                    <Text style={styles.number}>{ showShortedNumbers(item.stargazersCount) }</Text>
                    <Text style={styles.label}>Stars</Text>
                </View>
                <View style={styles.dataBox}>
                    <Text style={styles.number}>{ showShortedNumbers(item.forksCount) }</Text>
                    <Text style={styles.label}>Forks</Text>
                </View>
                <View style={styles.dataBox}>
                    <Text style={styles.number}>{ showShortedNumbers(item.reviewCount) }</Text>
                    <Text style={styles.label}>Reviews</Text>
                </View>
                <View style={styles.dataBox}>
                    <Text style={styles.number}>{ showShortedNumbers(item.ratingAverage) }</Text>
                    <Text style={styles.label}>Rating</Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryList;